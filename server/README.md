# React-Stock-Server

React-Stock-Server is the HTTP API backend for React-stock project

## Installation

```bash

yarn --prod

```

## Usage

### Environment Variables

> FB_CLIENT_ID -> ClientID for Facebook Authentication
>
> FB_CLIENT_SECRET -> Client secret for Facebook Authentication
>
> CLIENT_URL -> URL to the frontend
>
> PORT -> The specific port for express. Default is 3030

Using in development environment

```bash

yarn dev

```

Navigate to localhost:3030

---

Using in development environment

```bash

yarn build

node ./build/main.js

```

## API Routes

### User Routes

> AUTH GET /api/user -> Return object of the user infomation based on cookie
>
> AUTH GET /api/portfolio -> Return object of the portfolio for specific user

### Stock Routes

> GET /api/stocks -> Return array all the stocks available
>
> GET /api/stock -> Return object of the individual stock based on stockID property in request body
>
> ```json
> {
> 	"stockID": <Integer>
> }
> ```
>
> POST /api/stock -> Create new stock for the market
>
> RETURN: 201 Status code
>
> ```json
> {
> 	"name":  <String>,
> 	"price": <Decimal(8,2)>
> }
> ```
>
> AUTH PATCH /api/stock -> Buy the stock. User will come from cookie data
>
> RETURN: 200 Status code and { success: true }
>
> ```json
> {
> 	"stockID":  <Integer>,
> 	"quantity": <Integer>
> }
> ```

### Transactions Routes

> AUTH GET /api/transactions -> Return array of transactions of the user

### Authentication Routes

> GET /api/auth/facebook -> Login with Facebook after success redirect to the CLIENT_URL environment variable
>
> GET /api/auth/logout -> Logout and after success redirect to the CLIENT_URL environment variable

## License

[MIT](https://choosealicense.com/licenses/mit/)
