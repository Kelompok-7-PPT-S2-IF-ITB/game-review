from typing import Optional

from pydantic import BaseModel

class GameBase(BaseModel):
    game_name = str

class GameSchema(GameBase):
    id = int

class GameUpdate(BaseModel):
    game_name = str