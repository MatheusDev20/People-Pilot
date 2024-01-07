echo 'Starting building...'

npm run build

echo 'Done!'

echo 'Moving files via secure shell ...'

scp -r  ./dist/* root@204.48.26.219:/var/www/peoplepilot.com.br/html 

echo 'Done!'
echo 'Deployed successfully!'