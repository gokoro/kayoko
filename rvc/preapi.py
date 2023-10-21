from fastapi import FastAPI, File, UploadFile, Response
from typing_extensions import Annotated
import shutil
from pathlib import Path
from uuid import uuid4
import os

from api import convert
from assets import prepare_assets

prepare_assets()


if not os.path.exists("raw-audio"):
    os.makedirs("raw-audio")

if not os.path.exists("converted-audio"):
    os.makedirs("converted-audio")

app = FastAPI()


def save_upload_file(upload_file: UploadFile, destination: Path) -> None:
    try:
        with destination.open("wb") as buffer:
            shutil.copyfileobj(upload_file.file, buffer)
    finally:
        upload_file.file.close()


@app.get("/health")
def get_health():
    return {"status": 200}


@app.post("/audios")
async def post_audios(file: UploadFile):
    saved_path = "./raw-audio/" + str(uuid4())
    save_upload_file(file, Path(saved_path))

    audio = convert(saved_path)
    return Response(media_type="audio/wav", content=audio)
