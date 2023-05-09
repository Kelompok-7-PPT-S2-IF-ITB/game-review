from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.dialects.mysql import LONGTEXT
from sqlalchemy.orm import relationship

from app.db.base_class import Base


class Sentiment(Base):
    id = Column(Integer, primary_key=True, index=True, nullable=False)
    review = Column(LONGTEXT, nullable=True)
    sentiment_class = Column(Integer, index=True, nullable=True)
    game_id = Column(Integer, ForeignKey("games.id"), index=True, nullable=False)
    game = relationship("Games", back_populates="gamerel")