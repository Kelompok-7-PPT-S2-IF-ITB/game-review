# from nltk.stem import WordNetLemmatizer

import os
import gc

import torch
from torchcrf import CRF

from transformers import BertTokenizer, BertModel

# from sklearn.metrics import accuracy_score, f1_score, recall_score, precision_score, confusion_matrix
from tqdm import tqdm, trange

from .preprocess import remove_emoji, remove_hashtag, remove_links, remove_money, remove_punct, remove_titiktitik, fix_typo

os.environ["CUDA_LAUNCH_BLOCKING"]="1"

MAX_LEN = 128
NUM_LABELS = 2
BATCH = 64
DEVICE_USED = "cuda:0"
PROPOSED_MODEL_DIR = "ai/model/bilstm-crf-4-last-hidden-states-holdout/trainer"
MODEL_PATH = "D:/Training/Machine Learning/NLP/Sentiment Analysis/proposed_model"
device = torch.device(DEVICE_USED if torch.cuda.is_available() else "cpu")

class ProposedModel3(torch.nn.Module):
    def __init__(self, p_dropout, lstm_in_size, lstm_hdn_size, lstm_layers, lstm_dropout = 0.2):
        super(ProposedModel3, self).__init__()
        
        self.lstm_layers = lstm_layers
        self.lstm_hdn_size = lstm_hdn_size
        
        self.batchnorm = torch.nn.BatchNorm1d(lstm_in_size)
        self.lstm = torch.nn.LSTM(
            input_size = lstm_in_size,
            hidden_size = lstm_hdn_size//2,
            num_layers = lstm_layers,
            bidirectional = True,
            dropout = lstm_dropout,
            batch_first = True
        )
        self.fc1 = torch.nn.Linear(
            in_features = lstm_hdn_size,
            out_features = 2 # number of output classes
        )
        self.dropout = torch.nn.Dropout(p=p_dropout)
        self.crf = CRF(2, batch_first=True)
    
    def process_emission(self, x):
        x_perm = x.permute(0, 2, 1)
        b = self.batchnorm(x_perm)
        b_perm = b.permute(0, 2, 1)

        # Init the hidden state
        h0 = torch.zeros(2*self.lstm_layers, x.size(0), self.lstm_hdn_size//2).requires_grad_()
        h0 = h0.to(device)
      
        # Init the cell state
        c0 = torch.zeros(2*self.lstm_layers, x.size(0), self.lstm_hdn_size//2).requires_grad_()
        c0 = c0.to(device)

        h, _ = self.lstm(b_perm, (h0.detach(), c0.detach()))
        d = self.dropout(h)
        emission = self.fc1(d)
        return emission
    
    def forward(self, x, labels, att_mask=None):
        emission = self.process_emission(x)
        emission_perm = emission.permute(1,0,2)
        labels = labels[None,:]
        loss = -1 * self.crf(emission_perm, labels)
        
        return {"loss": loss, "logits": emission}
    
    def evaluate(self, x, att_mask=None):
        emission = self.process_emission(x)
        emission_perm = emission.permute(1,0,2)
        decoded = self.crf.decode(emission_perm)
        
        return decoded

    def predict(self, x, att_mask=None):
        emission = self.process_emission(x)
        emission_perm = emission.permute(1,0,2)
        decoded = self.crf.decode(emission_perm)
        
        return decoded

def return_label(the_label):
    str_label = ""
    if str(the_label) == "0":
        str_label = "negative"
    elif str(the_label) == "1":
        str_label = "positive"
    else:
        str_label = "no label"
    return str_label

def inference(input_review: str) -> str:
    # Preprocess the input first
    input_review = input_review.lower()
    input_review = remove_emoji(input_review)
    input_review = remove_hashtag(input_review)
    input_review = remove_links(input_review)
    input_review = remove_money(input_review)
    input_review = remove_punct(input_review)
    input_review = remove_titiktitik(input_review)
    input_review = fix_typo(input_review)

    stop = ['i', 'me', 'my', 'myself', 'we', 'our', 'ours', 'ourselves', 'you', "you're", "you've", "you'll", "you'd", 'your', 'yours', 'yourself', 'yourselves', 'he', 'him', 'his', 'himself', 'she', "she's", 'her', 'hers', 'herself', 'it', "it's", 'its', 'itself', 'they', 'them', 'their', 'theirs', 'themselves', 'what', 'which', 'who', 'whom', 'this', 'that', "that'll", 'these', 'those', 'am', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'a', 'an', 'the', 'and', 'but', 'if', 'or', 'because', 'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where', 'why', 'how', 'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'only', 'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'can', 'will', 'just', 'don', "don't", 'should', "should've", 'now', 'd', 'll', 'm', 'o', 're', 've', 'y']
    input_review = " ".join(word for word in input_review.split() if word not in stop)

    # lemmatizer = WordNetLemmatizer()
    # input_review = " ".join(lemmatizer.lemmatize(word) for word in input_review.split())

    # Tokenizing
    tokenizer = BertTokenizer.from_pretrained('bert-base-uncased', model_max_length=MAX_LEN)
    encoded_sentence = tokenizer.encode_plus(
        input_review,
        add_special_tokens = True,
        max_length = MAX_LEN,
        truncation = 'longest_first',
        padding = 'max_length',
        return_attention_mask = True,
        return_tensors = 'pt'
    )

    padded_token_list = encoded_sentence['input_ids']
    att_mask = encoded_sentence['attention_mask']
    tok_type_id = encoded_sentence['token_type_ids']

    model_bert = BertModel.from_pretrained(
        'bert-base-uncased',
        num_labels=NUM_LABELS,
        output_hidden_states = True, # Whether the model returns all hidden-states,
    )

    # Extract the embedding
    model_bert.eval()
    output_bert = model_bert(
        input_ids = padded_token_list,
        attention_mask = att_mask,
        token_type_ids = tok_type_id
    )
    hidden_states = output_bert[2]
    word_embed_4_last_layers = torch.stack(hidden_states[-4:]).sum(0) #sum of last 4 hidden layers
    word_embed_4_last_layers = word_embed_4_last_layers[0,0,:]
    word_embed_4_last_layers = word_embed_4_last_layers[None, None, :] # take the CLS layer
    word_embed_4_last_layers = word_embed_4_last_layers.to(device)

    # loading model
    chkpt = torch.load(PROPOSED_MODEL_DIR + "/pytorch_model.bin", map_location=torch.device('cpu'))
    proposed_method3a = ProposedModel3(
        p_dropout = 0.55,
        lstm_in_size = 768,
        lstm_hdn_size = 1024,
        lstm_layers = 2,
        lstm_dropout = 0.58
    )
    proposed_method3a.load_state_dict(chkpt)
    proposed_method3a = proposed_method3a.to(device)
    
    proposed_method3a.eval()
    output_proposed_model = proposed_method3a.predict(word_embed_4_last_layers)
    gc.collect()

    return return_label(output_proposed_model[0][0])