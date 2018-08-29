# redis-funland
pull down this repo and 
```
run docker-compose up
```
This will start all of the dependent services for the project
* [mongo](https://www.mongodb.com/)
* [redis](https://redis.io/)
* [Services ⬇](#services)

### Services:
* `client`
    - react based front-end
* `server`
    - server responsible for serving `client` and room for pub/sub using [socket.io-redis](https://github.com/socketio/socket.io-redis)
* `emitter`
    - emits messages to `client` via [socket.io-emitter](https://github.com/socketio/socket.io-emitter)

