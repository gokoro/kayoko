#!/bin/sh

cd /home/ubuntu
git clone https://github.com/gokoro/kayoko --depth=1 && cd kayoko/infra/scripts
chmod +x ./*
./setup-gpu.sh && ./postsetup-gpu.sh && ./launch.sh && ./setup.sh
(crontab -l 2>/dev/null; echo "@reboot $(realpath ./launch.sh)") | crontab -

echo Rebooting for applying for some changes....
reboot