from typing import Optional, Union, Dict, Any
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.crud.base import CRUDBase
from app.models.games import Games
from app.schemas.games import GameSchema, GameBase, GameUpdate

class CRUDGames(CRUDBase[GameSchema, GameSchema, GameUpdate]):
    def get_by_gameid(self, db: Session, *, id: int) -> Optional[Games]:
        return db.query(Games).filter(Games.id == id).first()
    
    def get_by_gamename(self, db: Session, *, name: str) -> Optional[Games]:
        return db.query(Games).filter(Games.game_name == name).first()

    def create(self, db: Session, *, obj_in: GameBase) -> Games:
        if self.get_by_gamename(db, obj_in.game_name):
            raise HTTPException(
                status_code=400,
                detail="Game already exists!"
            )
        db_obj = Games(
            game_name = obj_in.game_name,
        )
        db.add(db_obj)
        db.commit()
        db.refresh(db_obj)
        return db_obj

    def update(
        self, db: Session, *, db_obj: Games, obj_in: Union[GameUpdate, Dict[str, Any]]
    ) -> Games:
        if isinstance(obj_in, dict):
            update_data = obj_in
        else:
            update_data = obj_in.dict(exclude_unset=True)
        return super().update(db, db_obj=db_obj, obj_in=update_data)


games = CRUDGames(Games)
