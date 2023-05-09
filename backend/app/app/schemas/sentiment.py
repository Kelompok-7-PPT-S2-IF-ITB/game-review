from typing import Optional

from pydantic import BaseModel

class SentimentBase(BaseModel):
    sentiment_id = int
    sentiment_class = Optional[int]

    class Config:
        arbitrary_types_allowed = True

class SentimentCreate(SentimentBase):
    review = Optional[str]

class Sentiment(SentimentBase):
    review = Optional[str]

class SentimentUpdate(Sentiment):
    game_id = int