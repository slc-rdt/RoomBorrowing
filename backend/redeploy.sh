#!/bin/bash

echo '[INFO]: Starting redeploying backend'

echo '[INFO]: Redeploying RoomBorrowing-be'

sh -c "git pull origin main && go install && go build main.go && pm2 reload pm2.local.json"
