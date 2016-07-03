# :airplane::airplane:GoodbyeYall :airplane::airplane:
###We do the work, you do the travel.
Helping people achieve their travel goals

### Development Team
######[James Fitzpatrick](https://github.com/Fitzpatrick1)
######[Sin Cheung Ko](https://github.com/scko823)
######[Paul-Michael Schreiber](https://github.com/pschreibs85)
######[Owen Temple](https://github.com/owentemple)
######[Vidush Rana](https://github.com/Vidushr)

#GoodbyeYall Cheap Airfare Finder
http://www.goodbyeyall.com (Hosted on Heroku)

GoodbyeYall is backend-intensive travel app that analyzes flight prices from Texas to 42 of the most popular global destinations with the goals of identifing the least expensive time to fly in the next 12 months and sending Facebook notifications to users based on their individual preferences. :tada::tada:



###Getting Started

###### Prerequisites
Install nodemon globally

```
npm install -g nodemon
```

###### Development server
Install dependencies if you have not already done so
```
npm install
```
Run webpack and have it watch for file changes

```
npm run build;          
```

for Windows: 

```
webpack -g
```

In a separate tab in the terminal, start the development server
```
npm run dev
```
Connect to localhost:4000 in your browser


###Built With

- Node JS
- PostgreSQL
- Express
- React JS
- React Router
- React Redux
- React Bootstrap
- D3 JS
- Integrated with Facebook Oauth

In the backend, a worker queries Skyscanner.com's Flights API and filters/formats/stores all the relevant data on our backend using a PostgresSQL database adapter through the Node.js KNEX library.

The front-end accepts user input (travel package selection), and then sends the destination cities as well as preferred Texas airport to the backend.

The backend web server then queries the database for all saved flight quotes retrieved by the worker and average prices for that route by month.

Using the collected data, the frontend uses React to display the desirable data in a D3 line chart view, and also generates a 'Buy Now' button offering the cheapest flight available for that route in the next 12 months. Users can toggle between destinations within a given travel package and can toggle by preferred origin airport.

Login using Facebook will immiediately redirect to preferances to setup notifications of cheapest routes to the user. Notifications are sent via Facebook Graph API. Preferances are saved to the database so user may log out when leaving the site.

Destination specific travel information is rendered for each destination via button click.

API Reference:

Backend APIs to collect flight quotes

[Skyscanner Flight API](http://business.skyscanner.net/portal/en-GB/Documentation/ApiOverview)

Front-end APIs to weather and and travel requirements

[Travel Requirements API](https://travelbriefing.org/api)

Facebook API to Oauth and notifications

[Facebook Graph API](http://graph.facebook.com/) 



