#!/bin/bash

echo '[INFO]: Starting redeploying frontend'

echo '[INFO]: Redeploying RoomBorrowing-fe'

sh -c "git pull origin main && npm install && npm build && pm2 reload pm2.local.json"