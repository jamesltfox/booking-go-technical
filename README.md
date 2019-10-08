# BookingGo Front-end assessment
This is a ReactJS project replicating a subset of the search form on RentalCars website.

## Running the project

1. Clone or download from https://github.com/jamesltfox/booking-go-technical/
2. cd into booking-go-technical or the name of the project you specify
3. Run yarn install 
4. Run yarn start to begin the webpack dev server
5. Go to http://localhost:8080 in the browser 


## Observations

I have not included validation other than the standard HTML5 required attribute. In full production / development I would use a package to help escape any unwanted data being sent as part of the request. 

I had tried using the endpoint as specified in the documentation that was sent over and noted that it pointed to a Heroku server, by removing the https://cors.io I was able to access the API.

Also adding XX into the search did return results when testing, so used a tilde instead which gave the correct response of no records found.

From a UI perspective I would also say that the placeholder text maybe better served above the input as it allows users to see what details they can use at all times rather than having to delete content to see the placeholder reappear, I believe that it would also have issues into language translation when used as a placeholder.

It has been a fun exercise to complete and I thank you for considering me for the position available.

