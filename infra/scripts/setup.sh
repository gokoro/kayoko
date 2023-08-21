#!/bin/sh

# Download models

sed -i "s/#\$nrconf{restart} = 'i';/\$nrconf{restart} = 'a';/" /etc/needrestart/needrestart.conf

apt install unzip -y

cd /home/ubuntu/kayoko
mkdir -p assets/models && cd assets/models

wget https://huggingface.co/benitheworld/kokomi-kr/resolve/main/kokomi-kr.zip
unzip kokomi-kr.zip && rm -rf kokomi-kr.zip
mv added_IVF522_Flat_nprobe_1_kokomi-kr_v2.index kokomi-kr.index

cd ../../rvc
wget https://huggingface.co/lj1995/VoiceConversionWebUI/resolve/main/hubert_base.pt


# Setup python
apt install python3-pip -y

./venv.sh
source .venv/bin/activate

pip install torch torchvision torchaudio
pip install -r requirements.txt