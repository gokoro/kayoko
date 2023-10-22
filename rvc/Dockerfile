FROM python:3.8.17 AS builder

ENV PYTHONUNBUFFERED 1
ENV PATH="/opt/venv/bin:$PATH"

RUN apt-get update -y -qq \
  && apt-get install rsync -y

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
  && git clone https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI.git . \
  && git checkout 318e8fd8cfecd9deb7bbeac9a17fcb72a8ecb360 \
  && mv /app/* /rvc \
  && mv infer_to_replace.py tools/


FROM python:3.8.17-slim

ENV PATH="/opt/venv/bin:$PATH"

WORKDIR /rvc

COPY --from=builder /opt/venv /opt/venv
COPY --from=builder /rvc /rvc

RUN ls -al /rvc

RUN apt-get update -y \
  && apt-get install ffmpeg -y -qq 

CMD [ "uvicorn", "preapi:app", "--host", "0.0.0.0", "--port", "8000", ]