#!/bin/bash

cd api-gateway && npm install && npm run deploy &
cd users && npm install && npm run deploy &
cd products && npm install && npm run deploy &

wait -n

exit $?