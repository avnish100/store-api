# store-api
A bare-bones REST API with a MongoDB database for an ecommerce store supporting filtering and sorting in queries written in NodeJS

## Usage
The REST API is described below
## Getting all products

`GET /api/v1/products`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/v1/products

## Filtering by product name 
  Supports partial matches of a products name

`GET /api/v1/products?name=albany`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/v1/products?name=albany

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 355
    ETag: W/"163-6k+BGxRql5sHUkbQ6iJHxbKh/3U"
    Date: Fri, 11 Aug 2023 08:08:38 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"products":[{"featured":false,"rating":5,"createdAt":"2023-08-07T07:21:57.771Z","_id":"64d09b99480f751dbc4daa40","name":"albany sectional","price":109,"company":"liddy","__v":0},{"featured":false,"rating":4.9,"createdAt":"2023-08-07T07:21:57.771Z","_id":"64d09b99480f751dbc4daa41","name":"albany table","price":309,"company":"liddy","__v":0}],"nbHits":2}

## Filtering by company 

`GET /api/v1/products?company=ikea`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/v1/products?company=ikea
    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 1150
    ETag: W/"47e-CBBBqJQDbHcKcVbEN+YbkZmGaKg"
    Date: Fri, 11 Aug 2023 08:10:49 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"products":[{"featured":false,"rating":4.55,"createdAt":"2023-08-07T07:21:57.771Z","_id":"64d09b99480f751dbc4daa44","name":"dining table","price":42,"company":"ikea","__v":0},{"featured":false,"rating":4.5,"createdAt":"2023-08-07T07:21:57.771Z","_id":"64d09b99480f751dbc4daa45","name":"emperor bed","price":23,"company":"ikea","__v":0},{"featured":true,"rating":4.5,"createdAt":"2023-08-07T07:21:57.771Z","_id":"64d09b99480f751dbc4daa47","name":"high-back bench","price":39,"company":"ikea","__v":0},{"featured":false,"rating":4.5,"createdAt":"2023-08-07T07:21:57.771Z","_id":"64d09b99480f751dbc4daa4b","name":"shelf","price":30,"company":"ikea","__v":0},{"featured":false,"rating":4.5,"createdAt":"2023-08-07T07:21:57.771Z","_id":"64d09b99480f751dbc4daa51","name":"wooden bed","price":25,"company":"ikea","__v":0},{"featured":false,"rating":4.5,"createdAt":"2023-08-07T07:21:57.771Z","_id":"64d09b99480f751dbc4daa52","name":"wooden desk","price":15,"company":"ikea","__v":0},{"featured":false,"rating":4.5,"createdAt":"2023-08-07T07:21:57.771Z","_id":"64d09b99480f751dbc4daa53","name":"wooden desk","price":40,"company":"ikea","__v":0}],"nbHits":7

## Sorting by price
`GET /api/v1/products?sort=price`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/v1/products?sort=price

## Sorting by rating
`GET /api/v1/products?sort=rating`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/v1/products?sort=rating

## Select the fields required
`GET /api/v1/products?fields=name`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/v1/products?fields=name

## Set numerical filters
`GET /api/v1/products?numericFilters=price>120`

    curl -i -H 'Accept: application/json' http://localhost:3000/api/v1/products?numericFilters=price>120

    HTTP/1.1 200 OK
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 511
    ETag: W/"1ff-OgwWSJLCdFKsip9bQWsY/cHG2ac"
    Date: Fri, 11 Aug 2023 08:38:27 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    
    {"products":[{"featured":false,"rating":4.9,"createdAt":"2023-08-07T07:21:57.771Z","_id":"64d09b99480f751dbc4daa41","name":"albany table","price":309,"company":"liddy","__v":0},{"featured":false,"rating":4.8,"createdAt":"2023-08-07T07:21:57.771Z","_id":"64d09b99480f751dbc4daa42","name":"armchair","price":125,"company":"marcos","__v":0},{"featured":false,"rating":4.5,"createdAt":"2023-08-07T07:21:57.771Z","_id":"64d09b99480f751dbc4daa4d","name":"sofa set","price":129,"company":"marcos","__v":0}],"nbHits":3}





  
