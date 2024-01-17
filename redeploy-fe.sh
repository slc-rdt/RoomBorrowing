#!/bin/bash

echo '[INFO]: Starting redeploying frontend'

echo '[INFO]: Redeploying RoomBorrowing-fe'

# shellcheck disable=SC2140
sh -c "git pull origin main && cd frontend && npm install && npm run build && cp -r dist /var/www/roomborrowing"
