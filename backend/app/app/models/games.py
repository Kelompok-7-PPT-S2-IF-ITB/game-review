from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from app.db.base_class import Base


class Games(Base):
    id = Column(Integer, primary_key=True, index=True, nullable=False)
    game_name = Column(String, index=True)
    gamerel = relationship("Sentiment", back_populates="game")