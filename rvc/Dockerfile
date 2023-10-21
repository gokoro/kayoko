FROM python:3.8.17 AS builder

ENV PYTHONUNBUFFERED 1
ENV PATH="/opt/venv/bin:$PATH"

RUN apt-get update -y -qq

COPY . /app

WORKDIR /rvc

# Install deps for caching
RUN wget https://raw.githubusercontent.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI/main/requirements.txt \
  && sed -i '/fastapi/d' requirements.txt \
  && cat /app/requirements.txt >> requirements.txt \
  && python -m venv /opt/venv \
  && pip install -r requirements.txt 

# Download sources and move needed models
RUN rm -rf requirements.txt \
  && git clone https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI.git . --depth=1 \
  && mv /app/* .


FROM python:3.8.17-slim

ENV PATH="/opt/venv/bin:$PATH"


COPY --from=builder /opt/venv /opt/venv
COPY --from=builder /rvc /rvc

WORKDIR /rvc

RUN apt-get update -y \
  && apt-get install ffmpeg -y -qq 

CMD [ "uvicorn", "preapi:app" ]