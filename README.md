# redis-funland
pull down this repo and 
```
run docker-compose up
```
This will start all of the dependent services for the project
* [mongo](https://www.mongodb.com/)
* [redis](https://redis.io/)
* Our Services

### Services:
* `client`
    - react based front-end
* `server`
    - server responsible for serving `client` and room for pub/sub
* `emitter`
    - emits messages to `client` via socket.io-emitter

