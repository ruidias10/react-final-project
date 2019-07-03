#!/bin/bash
locale-gen en_US.UTF-8  > /dev/null
echo 'export LC_ALL=en_US.UTF-8' | tee --append ~/.profile

echo "Provisioning virtual machine..."

echo "- System update"
sudo apt-get update -y > /dev/null
sudo apt-get -f install -y > /dev/null

echo "- Install: essential"
sudo DEBIAN_FRONTEND=noninteractive apt-get install build-essential nano curl zip unzip -y > /dev/null

echo "- Install: node; npm; express"
curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
sudo DEBIAN_FRONTEND=noninteractive apt-get install nodejs -y > /dev/null

echo "- Install: mongodb"
sudo DEBIAN_FRONTEND=noninteractive apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4
echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list
sudo DEBIAN_FRONTEND=noninteractive apt-get update > /dev/null
sudo DEBIAN_FRONTEND=noninteractive apt-get install -y mongodb-org > /dev/null
sudo DEBIAN_FRONTEND=noninteractive apt-get install -y mongodb-org-server > /dev/null
sudo DEBIAN_FRONTEND=noninteractive apt-get --fix-broken install > /dev/null

echo "- Install: redis"
sudo DEBIAN_FRONTEND=noninteractive apt-get install redis-server -y > /dev/null

echo "- Install: nginx"
sudo DEBIAN_FRONTEND=noninteractive apt-get install nginx -y > /dev/null
sudo mkdir /etc/nginx/logs/
sudo touch /etc/nginx/logs/access.log
sudo touch /etc/nginx/logs/error.log
sudo rm /var/www/html/index.nginx-debian.html
sudo cp /vagrant/config/nginx.conf /etc/nginx/nginx.conf
sudo systemctl restart nginx.service

echo "- System update"
sudo apt-get update -y > /dev/null && sudo apt-get clean -y > /dev/null && sudo apt-get autoclean -y > /dev/null

echo "- Mongodb update"
sudo cp /vagrant/config/mongod.conf /etc/mongod.conf
sudo DEBIAN_FRONTEND=noninteractive service mongod start > /dev/null

sudo chmod +x /vagrant/config/mongod.sh
#sudo /vagrant/config/mongod.sh