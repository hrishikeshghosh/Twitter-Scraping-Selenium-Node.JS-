## OVERVIEW OF CODEBASE


# Index.js
contains server building code

# Model
contains MongoDB Schema

# Controller
contains logic for getting web scraped data and saving into mongoDB

# views
contains ejs html file for server side rendering (for building simplied html page to show the scraped data)

# util
contains two fils -> 1. webscrape.js (contains logic for webscraping twitter's trending topics) and 2. ProxyGenerator.js (contains api call for open proxy to get rotating ip addresses)

# ENV
.env file contains variables associated with important connections, api calls and other mandetory authentication purposes. (Hidden)
