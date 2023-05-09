from typing import Optional, Union, Dict, Any
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app.models.sentiment import Sentiment
from app.schemas.sentiment import SentimentBase, SentimentCreate, SentimentUpdate

class CRUDSentiment(CRUDBase[SentimentBase, SentimentCreate, SentimentUpdate]):
    def get_by_id(self, db: Session, *, id: int) -> Optional[Sentiment]:
        return db.query(Sentiment).filter(Sentiment.id == id).first()

    def create(self, db: Session, *, obj_in: SentimentCreate) -> Sentiment:
        db_obj = Sentiment(
            review = obj_in.review
        )
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def update(
        self, db: Session, *, db_obj: Sentiment, obj_in: Union[SentimentUpdate, Dict[str, Any]]
    ) -> Sentiment:
        if isinstance(obj_in, dict):
            update_data = obj_in
        else:
            update_data = obj_in.dict(exclude_unset=True)
        return super().update(db, db_obj=db_obj, obj_in=update_data)


sentiment = CRUDSentiment(Sentiment)
