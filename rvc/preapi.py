from fastapi import FastAPI, File, UploadFile
from fastapi.responses import FileResponse
from typing_extensions import Annotated
import shutil
from pathlib import Path
from uuid import uuid4
import os

from .tools.infer_to_replace import convert


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
    id = str(uuid4())

    input_path = "./raw-audio/" + id
    output_path = "./converted-audio/" + id

    save_upload_file(file, Path(input_path))

    convert(input_path, output_path)

    return FileResponse(media_type="audio/wav", path=output_path)
