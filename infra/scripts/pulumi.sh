sudo su
git clone https://github.com/gokoro/kayoko --depth=1 && cd kayoko/infra/scripts
chmod +x ./*
./setup.sh && ./postsetup.sh && ./launch.sh
(crontab -l 2>/dev/null; echo "@reboot $(realpath ./pulumi.sh)") | crontab -

echo Rebooting for applying for some changes....
reboot