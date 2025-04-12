# For sign-up

## Request
http POST :8080/api/auth/sign-up firstName=Jane lastName=Smith username=janesmith password=Jane123@

## Response
HTTP/1.1 201 Created
Connection: keep-alive
Content-Length: 294
Content-Type: application/json; charset=utf-8
Date: Sat, 12 Apr 2025 00:08:48 GMT
ETag: W/"126-FzF+21UoqbPta6ZYeAXxePTjaUQ"
Keep-Alive: timeout=5
X-Powered-By: Express

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJKYW5lIiwibGFzdE5hbWUiOiJTbWl0aCIsInVzZXJuYW1lIjoiamFuZXNtaXRoIiwidXNlcklkIjoxLCJpYXQiOjE3NDQ0MTY1Mjh9.UQ_Jfq0j2f8tKwO4irzrtUydik8CPk6Pj3j7kIwA884",
    "user": {
        "firstName": "Jane",
        "lastName": "Smith",
        "userId": 1,
        "username": "janesmith"
    }
}


## Request
http POST :8080/api/auth/sign-up firstName=Jack lastName=Smith username=jacksmith password=Jack123@

## Response
HTTP/1.1 201 Created
Connection: keep-alive
Content-Length: 294
Content-Type: application/json; charset=utf-8
Date: Sat, 12 Apr 2025 00:08:53 GMT
ETag: W/"126-+OGDKp3C/I2jCoazam+Q4o1GNQU"
Keep-Alive: timeout=5
X-Powered-By: Express

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJKYWNrIiwibGFzdE5hbWUiOiJTbWl0aCIsInVzZXJuYW1lIjoiamFja3NtaXRoIiwidXNlcklkIjoyLCJpYXQiOjE3NDQ0MTY1MzN9.XX3yOQQcKkdvWB5u_V8P-UvOY1zT6nA-fy9qAQWPtw8",
    "user": {
        "firstName": "Jack",
        "lastName": "Smith",
        "userId": 2,
        "username": "jacksmith"
    }
}




# For sign-in

## Request
http POST :8080/api/auth/sign-in username=janesmith password=Jane123@

## Response
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 385
Content-Type: application/json; charset=utf-8
Date: Sat, 12 Apr 2025 00:08:57 GMT
ETag: W/"181-8Ul4Y7eM4ajyqj/D45o9oekKHx8"
Keep-Alive: timeout=5
X-Powered-By: Express

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImZpcnN0TmFtZSI6IkphbmUiLCJsYXN0TmFtZSI6IlNtaXRoIiwidXNlcm5hbWUiOiJqYW5lc21pdGgiLCJjcmVhdGVkQXQiOiIyMDI1LTA0LTEyVDAwOjA4OjQ4Ljg3OVoiLCJpYXQiOjE3NDQ0MTY1Mzd9.9eWeK1pnuxUobyGIT7wU9PrRb9MJxTnaXyekE6QrWcE",
    "user": {
        "createdAt": "2025-04-12T00:08:48.879Z",
        "firstName": "Jane",
        "lastName": "Smith",
        "userId": 1,
        "username": "janesmith"
    }
}

## Request
http POST :8080/api/auth/sign-in username=jacksmith password=Jack123@

## Response
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 385
Content-Type: application/json; charset=utf-8
Date: Sat, 12 Apr 2025 00:09:03 GMT
ETag: W/"181-Q7GfydeSIqRG0ZYZqPbnJ3Kx4N0"
Keep-Alive: timeout=5
X-Powered-By: Express

{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImZpcnN0TmFtZSI6IkphY2siLCJsYXN0TmFtZSI6IlNtaXRoIiwidXNlcm5hbWUiOiJqYWNrc21pdGgiLCJjcmVhdGVkQXQiOiIyMDI1LTA0LTEyVDAwOjA4OjUzLjY1NloiLCJpYXQiOjE3NDQ0MTY1NDN9.oJLlw0qbDWrwrFcqqvxUlveulbAqDLozBZ3E8hgVfKA",
    "user": {
        "createdAt": "2025-04-12T00:08:53.656Z",
        "firstName": "Jack",
        "lastName": "Smith",
        "userId": 2,
        "username": "jacksmith"
    }
}



# For adding movie rating

## Request
http POST :8080/api/auth/movie-rating/add title="Inception" summary="A skilled thief is given a chance at redemption if he can successfully perform inception: planting an idea in someone’s subconscious." link="https://www.example.com/inception" rating:=5 Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImZpcnN0TmFtZSI6IkphbmUiLCJsYXN0TmFtZSI6IlNtaXRoIiwidXNlcm5hbWUiOiJqYW5lc21pdGgiLCJjcmVhdGVkQXQiOiIyMDI1LTA0LTExVDIyOjUyOjQyLjU5OFoiLCJpYXQiOjE3NDQ0MTIxNzd9.81JaVD5QTUKN0vhyrUxnbCbAPMXq1x09wbkiWLOR-SI"

## Response
HTTP/1.1 201 Created
Connection: keep-alive
Content-Length: 324
Content-Type: application/json; charset=utf-8
Date: Sat, 12 Apr 2025 00:09:08 GMT
ETag: W/"144-/XpH1yHbQSG5k4u1UCfS2FKtTt4"
Keep-Alive: timeout=5
X-Powered-By: Express

{
    "createdAt": "2025-04-12T00:09:08.107Z",
    "link": "https://www.example.com/inception",
    "movieId": 1,
    "rating": 5,
    "summary": "A skilled thief is given a chance at redemption if he can successfully perform inception: planting an idea in someone’s subconscious.",
    "title": "Inception",
    "updatedAt": "2025-04-12T00:09:08.107Z",
    "userId": 1
}


## Request
http POST :8080/api/auth/movie-rating/add title="The Grand Budapest Hotel" summary="The adventures of a legendary concierge at a famous hotel between the wars and his friendship with a young employee." link="https://www.example.com/grand-budapest" rating:=4 Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImZpcnN0TmFtZSI6IkphY2siLCJsYXN0TmFtZSI6IlNtaXRoIiwidXNlcm5hbWUiOiJqYWNrc21pdGgiLCJjcmVhdGVkQXQiOiIyMDI1LTA0LTExVDIyOjUzOjA4LjczMVoiLCJpYXQiOjE3NDQ0MTIyMDR9.GtS_dSfFBUphv5ZzMDySZiC3mXfmA00q2NlB6-ZZVKU"

## Response
HTTP/1.1 201 Created
Connection: keep-alive
Content-Length: 325
Content-Type: application/json; charset=utf-8
Date: Sat, 12 Apr 2025 00:09:18 GMT
ETag: W/"145-m0etpQsVIrnDzjbdV3ziA07m5Ik"
Keep-Alive: timeout=5
X-Powered-By: Express

{
    "createdAt": "2025-04-12T00:09:18.606Z",
    "link": "https://www.example.com/grand-budapest",
    "movieId": 2,
    "rating": 4,
    "summary": "The adventures of a legendary concierge at a famous hotel between the wars and his friendship with a young employee.",
    "title": "The Grand Budapest Hotel",
    "updatedAt": "2025-04-12T00:09:18.606Z",
    "userId": 2
}


## Request
http POST :8080/api/auth/movie-rating/add title="Losing Memo" summary="A dramatic underwater saga where a forgetful fish loses her wallet and existential purpose." link="https://www.fake-link.com/losing-memo" rating:=2 Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImZpcnN0TmFtZSI6IkphbmUiLCJsYXN0TmFtZSI6IlNtaXRoIiwidXNlcm5hbWUiOiJqYW5lc21pdGgiLCJjcmVhdGVkQXQiOiIyMDI1LTA0LTExVDIzOjE0OjQ2LjE0NloiLCJpYXQiOjE3NDQ0MTMyOTZ9.eILZ1l2b2PCwPvq0nP7DYsLy_wcBUagcr9Bf5T8DdJ8"

## Response
HTTP/1.1 201 Created
Connection: keep-alive
Content-Length: 286
Content-Type: application/json; charset=utf-8
Date: Sat, 12 Apr 2025 00:09:25 GMT
ETag: W/"11e-3cvb5rG+NrqjkD9qQpUvzYWKB+c"
Keep-Alive: timeout=5
X-Powered-By: Express

{
    "createdAt": "2025-04-12T00:09:25.860Z",
    "link": "https://www.fake-link.com/losing-memo",
    "movieId": 3,
    "rating": 2,
    "summary": "A dramatic underwater saga where a forgetful fish loses her wallet and existential purpose.",
    "title": "Losing Memo",
    "updatedAt": "2025-04-12T00:09:25.860Z",
    "userId": 1
}


## Request
http POST :8080/api/auth/movie-rating/add title="The Matress" summary="An alternate universe where a bed becomes self-aware and rebels against humans." link="https://www.fake-link.com/the-matress" rating:=1 Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImZpcnN0TmFtZSI6IkphY2siLCJsYXN0TmFtZSI6IlNtaXRoIiwidXNlcm5hbWUiOiJqYWNrc21pdGgiLCJjcmVhdGVkQXQiOiIyMDI1LTA0LTExVDIzOjE0OjUwLjg4MloiLCJpYXQiOjE3NDQ0MTMzMDB9.q0VNNwZWnChYkrYWt2ux7m3SrPDAsNKkGvD_TLLigXo"

## Response
HTTP/1.1 201 Created
Connection: keep-alive
Content-Length: 274
Content-Type: application/json; charset=utf-8
Date: Sat, 12 Apr 2025 00:09:32 GMT
ETag: W/"112-AiPjWi/Qnli59FlMnHTu0rm5pTk"
Keep-Alive: timeout=5
X-Powered-By: Express

{
    "createdAt": "2025-04-12T00:09:32.229Z",
    "link": "https://www.fake-link.com/the-matress",
    "movieId": 4,
    "rating": 1,
    "summary": "An alternate universe where a bed becomes self-aware and rebels against humans.",
    "title": "The Matress",
    "updatedAt": "2025-04-12T00:09:32.229Z",
    "userId": 2
}


## Request
http POST :8080/api/auth/movie-rating/add title="The Imitation Game" summary="During World War II, Alan Turing tries to crack the German Enigma code with help from fellow mathematicians." link="https://www.example.com/imitation-game" rating:=4 Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImZpcnN0TmFtZSI6IkphbmUiLCJsYXN0TmFtZSI6IlNtaXRoIiwidXNlcm5hbWUiOiJqYW5lc21pdGgiLCJjcmVhdGVkQXQiOiIyMDI1LTA0LTExVDIzOjE0OjQ2LjE0NloiLCJpYXQiOjE3NDQ0MTMyOTZ9.eILZ1l2b2PCwPvq0nP7DYsLy_wcBUagcr9Bf5T8DdJ8" 

## Response
HTTP/1.1 201 Created
Connection: keep-alive
Content-Length: 311
Content-Type: application/json; charset=utf-8
Date: Sat, 12 Apr 2025 00:09:38 GMT
ETag: W/"137-LRB8hWLtkxh1ubA602uakXFUTwU"
Keep-Alive: timeout=5
X-Powered-By: Express

{
    "createdAt": "2025-04-12T00:09:38.300Z",
    "link": "https://www.example.com/imitation-game",
    "movieId": 5,
    "rating": 4,
    "summary": "During World War II, Alan Turing tries to crack the German Enigma code with help from fellow mathematicians.",
    "title": "The Imitation Game",
    "updatedAt": "2025-04-12T00:09:38.300Z",
    "userId": 1
}




# For editing movie ratings

## Request
http PUT :8080/api/auth/movie-rating/3/edit title="Finding Memo" summary="A clownfish travels across the ocean to find his missing son." link="https://www.example.com/finding-nemo" rating:=4 Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImZpcnN0TmFtZSI6IkphbmUiLCJsYXN0TmFtZSI6IlNtaXRoIiwidXNlcm5hbWUiOiJqYW5lc21pdGgiLCJjcmVhdGVkQXQiOiIyMDI1LTA0LTExVDIzOjE0OjQ2LjE0NloiLCJpYXQiOjE3NDQ0MTMyOTZ9.eILZ1l2b2PCwPvq0nP7DYsLy_wcBUagcr9Bf5T8DdJ8"

## Response
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 256
Content-Type: application/json; charset=utf-8
Date: Sat, 12 Apr 2025 00:09:45 GMT
ETag: W/"100-dJB3WrldM+U2U/dfIhUjgzYZZcI"
Keep-Alive: timeout=5
X-Powered-By: Express

{
    "createdAt": "2025-04-12T00:09:25.860Z",
    "link": "https://www.example.com/finding-nemo",
    "movieId": 3,
    "rating": 4,
    "summary": "A clownfish travels across the ocean to find his missing son.",
    "title": "Finding Memo",
    "updatedAt": "2025-04-12T00:09:25.860Z",
    "userId": 1
}


## Request
http PUT :8080/api/auth/movie-rating/4/edit title="The Matrix" summary="A hacker discovers the world he lives in is a simulated reality controlled by machines." link="https://www.example.com/the-matrix" rating:=5 Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsImZpcnN0TmFtZSI6IkphY2siLCJsYXN0TmFtZSI6IlNtaXRoIiwidXNlcm5hbWUiOiJqYWNrc21pdGgiLCJjcmVhdGVkQXQiOiIyMDI1LTA0LTExVDIzOjE0OjUwLjg4MloiLCJpYXQiOjE3NDQ0MTMzMDB9.q0VNNwZWnChYkrYWt2ux7m3SrPDAsNKkGvD_TLLigXo"

## Response
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 278
Content-Type: application/json; charset=utf-8
Date: Sat, 12 Apr 2025 00:09:50 GMT
ETag: W/"116-jMS9Bp3r123CvsPIxJS+GXWdI2g"
Keep-Alive: timeout=5
X-Powered-By: Express

{
    "createdAt": "2025-04-12T00:09:32.229Z",
    "link": "https://www.example.com/the-matrix",
    "movieId": 4,
    "rating": 5,
    "summary": "A hacker discovers the world he lives in is a simulated reality controlled by machines.",
    "title": "The Matrix",
    "updatedAt": "2025-04-12T00:09:32.229Z",
    "userId": 2
}




# For deleting movie ratings

## Request
http DELETE :8080/api/auth/movie-rating/5/delete Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImZpcnN0TmFtZSI6IkphbmUiLCJsYXN0TmFtZSI6IlNtaXRoIiwidXNlcm5hbWUiOiJqYW5lc21pdGgiLCJjcmVhdGVkQXQiOiIyMDI1LTA0LTExVDIzOjE0OjQ2LjE0NloiLCJpYXQiOjE3NDQ0MTMyOTZ9.eILZ1l2b2PCwPvq0nP7DYsLy_wcBUagcr9Bf5T8DdJ8"

## Response
HTTP/1.1 204 No Content
Connection: keep-alive
Date: Sat, 12 Apr 2025 00:10:09 GMT
ETag: W/"a-bAsFyilMr4Ra1hIU5PyoyFRunpI"
Keep-Alive: timeout=5
X-Powered-By: Express




