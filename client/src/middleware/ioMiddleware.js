import io from 'socket.io-client';
import store from '../store.js';

const socket = io.connect(':8081');

socket.on('io', (action) => {
    action.io = false; // set io to false, and then dispatch
    store.dispatch(action);
});

socket.on('message', (action) => {
    store.dispatch(action);
});

socket.on('messageFromEmitter', (action) => {
    console.log('action comming from emitter', action);
    socket.emit('emit', action);
    store.dispatch(action);
});

export const ioMiddleware = () => next => action => {
    if (action.io) {
        socket.emit('io', action);
    }
    return next(action);
};

export default ioMiddleware;