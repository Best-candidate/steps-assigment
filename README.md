## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start


## Endpoints

1. POST /posts  - create new post by passing fields : 
{
	"title": "Post title",
	"content": "Post Content",
	"creatorId": "Post's Creator Id" 
}
Ids for test : "625e9f78422bac8c08d95e1d", "625e9f9d422bac8c08d95e1e", "625e9fc8422bac8c08d95e20"

2. GET /posts - get posts with start and limit number parameters

3. GET /statistics/topcreators - get top 10 post creators

4. GET /statistics/runtimes - get runtimes of first two functions


## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
