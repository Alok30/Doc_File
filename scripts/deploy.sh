#!/bin/sh

bitbucket_username=$BITBUCKET_USER_NAME
bitbucket_token=$BITBUCKET_TOKEN
project_name=$PROJECT_NAME

ssh -o StrictHostKeyChecking=no ubuntu@$SERVER_PUBLIC_IP <<EOF
# clone the repository under projects folder
mkdir -p ~/projects
cd ~/projects
echo $bitbucket_username
git clone https://$bitbucket_username:$bitbucket_token@bitbucket.org/nltrainees/$project_name.git > /dev/null 2>&1
success=$?
if [[ $success -eq `0` ]];
then
echo "Repository cloned succesfully."
else
echo "Repository already exists"
fi

cd ~/projects/$project_name
git pull origin master
source ~/.nvm/nvm.sh
npm install
pm2 restart ecosystem.config.js
exit

EOF