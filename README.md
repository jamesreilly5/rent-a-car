# rent-a-car
React app that displays a JSON feed of rental cars. The app was built for a technical test for a front end position.

![Alt text](/screenshot.jpg?raw=true "Parser of the Gods App")

### Dependencies
* Node/npm
* Gulp

### Development
**Running the app**

- Run `npm install`
- Run `NODE_ENV=development gulp`
- Go to `localhost:8889` to display the app

Alternatively, just open index.html in the dist folder. It should be all compiled!

**Run tests in browser**

Go to `localhost:8889/testrunner.html` to see your tests

**Minify the code, ready for production**

Run `NODE_ENV=production gulp deploy`


### Known issues / design issues
* The page doesn't request from the URL but from a JSON fixture. This is because access-control-allow-origin isn't set on the header on the response leading to CORS errors. The code is there to do it though (commented out under _componentWillMount_ in CarList).
* Should use less over css.
* The grid doesn't stack nicely when cards are expanded (via more info). Needs a system of either splitting into rows or a fluid layout that lets the cards stack nicer
* There's a null check in FilterPanel for the element for _componentDidMount_. This is done because the dropdown doesn't get rendered in phantomjs. Ideally I'd stub this using Jest or react-jasmine but time was an issue so I parked it.
* Testing of components using Jest
* Null checks for nested elements in the parser or casting invalid types

## Problem - Assessment for front end developer:

In order to verify your skillset for the role there is a small task that must be accomplished. The URL supplied below contains a JSON response that represents car availability. Using any JavaScript framework of your choice ( our favourite is AngularJS ), create a static HTML document that displays a visual representation of the following feed.

URL feed: http://www.cartrawler.com/ctabe/cars.json

Core objectives:

- Parse message from URL feed
- Create a visual representation of the list of cars using HTML5 and CSS3 techniques.
- Each car block must contain all attribute data supplied in feed e.g. Vendor, Passenger,
- Default order of cars must be driven by ‘Price’.
- Extract the Pickup/Return information and display as ‘Legend’ above car list.
- Show us the quality of your code, and project structure

Advanced (optional):
- Surprise us!
- Maybe: a group by ‘Vendor’ option?
- Maybe: order the car list via alternate custom sorting techniques?

Deliverable:
- Email in zipped up version of all code and libraries used

Note:
All core objectives must be met in order to validate your skillset (Quantity, Fuel Type etc…)
