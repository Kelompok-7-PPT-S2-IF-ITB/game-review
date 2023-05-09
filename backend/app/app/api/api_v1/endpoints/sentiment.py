from typing import Any

from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse

from app import models, schemas
from app.api import deps
from app.core.celery_app import celery_app

router = APIRouter()


@router.post("/", response_model=schemas.Reviews, status_code=201)
def sentiment_celery(
    reviews: schemas.Reviews,
    current_user: models.User = Depends(deps.get_db),
) -> Any:
    """
    Inference using Celery worker.
    """
    result = celery_app.send_task("app.worker.process_sentiment", args=[reviews.review])
    returned_values = result.get()
    return JSONResponse({"review": reviews.review, "sentiment": returned_values})