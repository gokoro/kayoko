FROM python:3.8.17-slim-bookworm AS base

RUN apt-get update -y -qq

COPY . /app
WORKDIR /app

FROM base AS builder

RUN apt-get install git unzip -y \
  && git clone https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI.git rvc --depth=1 \
  && cat requirements.txt >> rvc/requirements.txt

WORKDIR /app/rvc

ADD https://huggingface.co/lj1995/VoiceConversionWebUI/resolve/main/hubert_base.pt .
ADD https://huggingface.co/benitheworld/kokomi-kr/resolve/main/kokomi-kr.zip .
RUN unzip kokomi-kr.zip && rm -rf kokomi-kr.zip

COPY ../infer_watcher.py ./

FROM base

WORKDIR /app

COPY --from=builder /app/rvc/ ./rvc

WORKDIR /app/rvc

RUN apt-get install ffmpeg -y -qq \
  && sed -i 's/pyworld==0.3.2/pyworld==0.3.4/g' requirements.txt  \
  && sed -i 's/pyworld = "^0.3.2"/pyworld = "^0.3.4"/g' pyproject.toml  \
  && pip install -r requirements.txt 

CMD [ "python", "infer_watcher.py" ]