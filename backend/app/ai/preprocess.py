import re

# Preprocessing

def remove_links(x):
    x = re.sub(r"http\S+", "", x)
    x = re.sub(r"https\S+", "", x)
    x = re.sub(r"www.\S+", "", x)
    x = re.sub(".*\..*\..*", "", x)
    return x

def remove_hashtag(x):
    x = re.sub("@[A-Za-z0-9_]+","", x)
    x = re.sub("#[A-Za-z0-9_]+","", x)
    return x

def remove_punct(x):
    x = re.sub(r"[()!?:;,.'-]","", x)
    return x

def remove_emoji(x):
    x = x.replace(":)", "")
    x = x.replace(":-)", "")
    x = x.replace(":(", "")
    x = x.replace("-_-", "")
    x = x.replace(";)", "")
    x = x.replace(";-)", "")
    # REFERENCE FOR EMOJI_PATTERN: https://gist.github.com/slowkow/7a7f61f495e3dbb7e3d767f97bd7304b
    emoji_pattern = re.compile("["
                           u"\U0001F600-\U0001F64F"  # emoticons
                           u"\U0001F300-\U0001F5FF"  # symbols & pictographs
                           u"\U0001F680-\U0001F6FF"  # transport & map symbols
                           u"\U0001F1E0-\U0001F1FF"  # flags 
                           u"\U00002702-\U000027B0"
                           u"\U000024C2-\U0001F251"
                           "]+", flags=re.UNICODE)
    x = emoji_pattern.sub(r'', x)
    return x

def remove_titiktitik(x):
    x = x.replace("..", "")
    x = x.replace("...", "")
    x = x.replace("....", "")
    x = x.replace(".....", "")
    x = x.replace("...................", "")
    return x

def remove_money(x):
    x = re.sub("€", "", x)
    x = re.sub("$", "", x)
    x = x.replace("usd", "")
    return x

def fix_typo(x):
    x = x.replace("veru", "very")
    x = x.replace("gud", "good")
    x = x.replace("gut", "good")
    x = x.replace("withouth", "without")
    x = x.replace("noob", "newbie")
    x = x.replace("dis", "this")
    x = x.replace("noobs", "newbie")
    x = x.replace("nice1", "nice")
    x = x.replace("4ever", "forever")
    x = x.replace("w0n", "won")
    x = re.sub("&lt;3", "", x)
    x = x.replace("graficks", "graphics")
    x = x.replace("dissapeared", "disappeared")
    x = x.replace("yr", "year")
    x = x.replace("yrs", "years")
    x = x.replace("dosent", "doesnt")
    x = x.replace("awsume","awesome")
    x = re.sub("&lt3","",x)
    x = x.replace("compatative", "competitive")
    x = x.replace("cyyounterstrikesyyource", "counter strike source")
    x = x.replace("&amp","and")
    x = x.replace("yyoure","your")
    x = x.replace("cyyounter","counter")
    x = x.replace("child hood", "childhood")
    return x