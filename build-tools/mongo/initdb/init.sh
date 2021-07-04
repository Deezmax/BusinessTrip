#!/usr/bin/env bash

echo "Creating mongo users..."
mongo admin --host localhost -u mongo -p mongo --eval "db.createUser({user: 'businessTrip, pwd: 'admin', [{role: 'readWrite', db: 'bsunessTrips'}]})"
echo "Mongo users created."