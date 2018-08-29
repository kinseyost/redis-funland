/* eslint-disable no-console*/

import express from 'express';
import http from 'http';
import emitter from 'socket.io-emitter';

const isRunningInDocker = process.env.DOCKER;
const redisPort = isRunningInDocker ? 'redis' : 'localhost';
const io = emitter({ host: redisPort, port: '6379' });

const app = express();
const server = http.Server(app);
const port = 8080;

server.listen(port, () => {
    setInterval(function () {
        console.log('emitting time event');
        io.to('room1').emit('messageFromEmitter', new Date);
    }, 2000);
});