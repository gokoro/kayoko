#!/bin/sh

export PATH=/usr/local/cuda-12.2/bin${PATH:+:${PATH}}
export LD_LIBRARY_PATH=/usr/local/cuda-12.2/lib64\
                         ${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}

sudo su

systemctl enable nvidia-persistenced
cp /lib/udev/rules.d/40-vm-hotadd.rules /etc/udev/rules.d
sed -i '/SUBSYSTEM=="memory", ACTION=="add", DEVPATH==\/devices\/system\/memory\/memory[0-9]*", TEST=="state", ATTR{state}!="online", ATTR{state}="online"/d' /lib/udev/rules.d/40-vm-hotadd.rules

/usr/bin/nvidia-persistenced --verbose
