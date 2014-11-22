
START WEB NODE SERVER
mean-training/nodemon server.js


START LOCAL MONGODB SERVER
Documents/tools/mongodb/bin/mongod --dbpath data/db

PUSH TO HERUKO
git status
git add -A
git commit -m "message"
git remote -v
git push heroku master



CONNECT TO MONGODB HEROKU
mongo dbmean@ds049160.mongolab.com:49160/heroku_app31184641