cd client
yarn --prod
yarn build
cd ../server
yarn --prod
yarn build
pm2 restart 0