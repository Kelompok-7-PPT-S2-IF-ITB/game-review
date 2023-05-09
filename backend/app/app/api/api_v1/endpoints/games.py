from typing import Any, List

from fastapi import APIRouter, Body, Depends, HTTPException
from fastapi.encoders import jsonable_encoder
from pydantic.networks import EmailStr
from sqlalchemy.orm import Session

from app import crud, models, schemas
from app.api import deps
from app.core.config import settings
from app.utils import send_new_account_email

router = APIRouter()


@router.get("/", response_model=List[schemas.GameSchema])
def get_games(
    db: Session = Depends(deps.get_db),
    skip: int = 0,
    limit: int = 100,
    current_user: models.User = Depends(deps.get_current_user),
) -> Any:
    """
    Retrieve games list.
    """
    games = crud.games.get_multi(db, skip=skip, limit=limit)
    return games

@router.post("/", response_model=schemas.GameSchema)
def create_games(
    db: Session = Depends(deps.get_db),
    *,
    game_info: schemas.games.GameBase,
    current_user: models.User = Depends(deps.get_current_user),
) -> Any:
    """
    Create game.
    """
    game = crud.games.create(db, obj_in=game_info)
    return game

@router.put("/", response_model=schemas.GameUpdate)
def update_games(
    db: Session = Depends(deps.get_db),
    *,
    id: int,
    game_info: schemas.games.GameUpdate,
    current_user: models.User = Depends(deps.get_current_user),
) -> Any:
    """
    Update game.
    """
    if not crud.games.get_by_gameid(db, id=id):
        raise HTTPException(
            status_code=400,
            detail="Game not found"
        )
    game = crud.games.update(db, obj_in=game_info)
    return game