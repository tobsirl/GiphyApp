# Giphy App 
React application using [Giphy Api](https://developers.giphy.com/)

## Features
* Fetches a list of trending gifs from the Giphy API
* Allows the user to search for gifs
* Responsive design using Flexbox
## Hosted
Hosted on AWS using Amplify [Link](https://master.d1fpyj0wm36a47.amplifyapp.com/)
## Routing
| Route   | Component | Description                                                    |
|---------|-----------|----------------------------------------------------------------|
| /       | Home      | Displays a list of “trending” gifs, ability to search for gifs |
| /random | Random    | Displays a random gif                                          |


## API Endpoints used
| Endpoint | Request URL                                                                                                         |
|----------|---------------------------------------------------------------------------------------------------------------------|
| Trending | https://api.giphy.com/v1/gifs/trending?api_key=yaV41KWzdrpCOtWDwqW6GEcC9nf2LpqX&limit=25&rating=g                   |
| Search   | https://api.giphy.com/v1/gifs/search?api_key=yaV41KWzdrpCOtWDwqW6GEcC9nf2LpqX&q=&limit=25&offset=0&rating=g&lang=en |
| Random   | https://api.giphy.com/v1/gifs/random?api_key=yaV41KWzdrpCOtWDwqW6GEcC9nf2LpqX&tag=&rating=g                         |

## Modules used
* React Router
* Prop Types