from celery import Celery
import os

from app.core.config import settings

os.environ.setdefault('FORKED_BY_MULTIPROCESSING', '1')
celery_app = Celery("worker", broker=settings.CELERY_BROKER_URL)

celery_app.conf.result_backend = settings.CELERY_RESULT_BACKEND
celery_app.conf.task_routes = {"app.worker.test_celery": "main-queue"}
celery_app.conf.task_routes = {"app.worker.process_sentiment": "main-queue"}