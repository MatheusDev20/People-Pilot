echo 'Starting building...'

npm run build

scp -r  ./dist/* root@204.48.26.219:/var/www/peoplepilot.com.br/html 

echo 'Deployed successfully!'