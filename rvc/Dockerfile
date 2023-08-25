FROM python:3.8.17 AS base

ENV PYTHONUNBUFFERED 1
ENV PATH="/opt/venv/bin:$PATH"

RUN apt-get update -y -qq

COPY . /app
WORKDIR /app

FROM base AS builder

RUN apt-get install git unzip -y \
  && git clone https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI.git rvc --depth=1 \
  && cat requirements.txt >> rvc/requirements.txt \
  && python -m venv /opt/venv 

WORKDIR /app/rvc

ADD https://huggingface.co/lj1995/VoiceConversionWebUI/resolve/main/hubert_base.pt .
ADD https://huggingface.co/benitheworld/kokomi-kr/resolve/main/kokomi-kr.zip .
RUN unzip kokomi-kr.zip && rm -rf kokomi-kr.zip

RUN pip install -r requirements.txt

COPY ../infer_watcher.py ./

FROM python:3.8.17-slim

ENV PATH="/opt/venv/bin:$PATH"

WORKDIR /app

COPY --from=builder /opt/venv /opt/venv
COPY --from=builder /app/rvc/ ./rvc

WORKDIR /app/rvc

RUN apt-get update -y \
  && apt-get install ffmpeg -y -qq 

CMD [ "python", "infer_watcher.py" ]