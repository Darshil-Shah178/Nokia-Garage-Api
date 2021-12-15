# NokiaGarage Api

#### NokiaGarage Api is used in the NokiaGarage you can read articles published by Nokia, book time to work with various equipment and rooms in Nokia Garage at Nokia Karaportti Campus.

## Tech & libraries

##### This service is made using Node.js, Epress.js, MongoDB and Heroku

-   async
-   bcrypt
-   body-parser
-   connect-mongo
-   cookie-parser
-   crypto
-   dateformat
-   dotenv
-   eslint
-   express
-   express-session
-   express-validator
-   mongodb
-   mongoose
-   morgan
-   node-uuid
-   pbkdf2
-   prettier

## Features

##### - An app to utilize the EspooGarage to its full potential

##### - Reserve different rooms such as media lab for uninterrupted work

##### - Reserve different tools and let others know about the availability of the tools

##### - Check your calendar to check the availability of the rooms and tools

## Application

#### - We developed an app using Kotlin

> The code for the Application
> https://github.com/ArsalanShakil/NokiaGarage

#### - Backend is deployed in Heroku

> BASE URL
> https://nokiagarage.herokuapp.com/api/

##### - ENDPOINTS :

> /equipments
> GET

> /articles
> GET

> /bookings
> GET
> POST

> /bookings/:id
> GET
> PUT
> DELETE

> /bookings/users/:ownerUserId
> GET

> /bookings/date/:dateTimeFrom&:dateTimeTo
> GET

> /users
> GET
> POST for user sign up

> /login
> POST for sign in

> /users/:id
> GET
> PUT
> DELETE

##### - To Run the api on a local machine :

> clone the main branch then
> npm init
> npm install
> npm start

## Dependencies

### package.json

"dependencies": {
"async": "^1.2.1",
"bcrypt": "^5.0.1",
"body-parser": "^1.19.0",
"connect-mongo": "^0.8.1",
"cookie-parser": "^1.3.5",
"crypto": "0.0.3",
"dateformat": "^5.0.2",
"dotenv": "^10.0.0",
"eslint": "^8.3.0",
"express": "^4.17.1",
"express-session": "^1.11.3",
"express-validator": "^6.13.0",
"mongodb": "^2.1.0-alpha",
"mongoose": "^5.13.13",
"morgan": "^1.10.0",
"node-uuid": "^1.4.3",
"pbkdf2": "^3.0.3",
"prettier": "^2.4.1"
}

## License

Free Software, Hell Yeah!
