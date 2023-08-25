FROM python:3.8.17 AS base

ENV PYTHONUNBUFFERED 1
ENV PATH="/opt/venv/bin:$PATH"

RUN apt-get update -y -qq

COPY . /app
WORKDIR /app

# Fetch models
ADD https://huggingface.co/lj1995/VoiceConversionWebUI/resolve/main/hubert_base.pt .
ADD https://huggingface.co/benitheworld/kokomi-kr/resolve/main/kokomi-kr.zip .

WORKDIR /app/rvc

# Install deps for caching
RUN wget https://raw.githubusercontent.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI/main/requirements.txt \
  && cat ../requirements.txt >> requirements.txt \
  && python -m venv /opt/venv \
  && pip install -r requirements.txt \
  && apt-get install git unzip -y

# Download sources and move needed models
RUN rm -rf requirements.txt \
  && git clone https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI.git . --depth=1 \
  && unzip ../kokomi-kr.zip && rm -rf ../kokomi-kr.zip \
  && mv -t . ../hubert_base.pt ../kokomi-kr.pth ../added_IVF522_Flat_nprobe_1_kokomi-kr_v2.index ../infer_watcher.py 


FROM python:3.8.17-slim

ENV PATH="/opt/venv/bin:$PATH"

WORKDIR /app

COPY --from=builder /opt/venv /opt/venv
COPY --from=builder /app/rvc/ ./rvc

WORKDIR /app/rvc

RUN apt-get update -y \
  && apt-get install ffmpeg -y -qq 

CMD [ "python", "infer_watcher.py" ]