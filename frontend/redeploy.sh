#!/bin/bash

echo '[INFO]: Starting redeploying frontend'

echo '[INFO]: Redeploying RoomBorrowing-fe'

sh -c "git pull origin main && npm install && npm run build && pm2 restart roomBorrowing-frontend.cjs"