# skunkworks-sp
Frontend code for music streaming app clone

### Setting up the app locally

Clone the repo: `https://github.com/marwanali1/skunkworks-sp-frontend.git`

Change into the repo: `cd skunkworks-sp-frontend`

Install project dependencies: `npm install --save`

Run the app: `npm start`

#### Docker

Create docker image of the app: `docker build -t skunkworks-sp-frontend .`  

Run docker container with the image: `docker run -v ${PWD}:/skunkworks-sp-frontend -v /skunkworks-sp-frontend/node_modules -p 3001:3000 --rm skunkworks-sp-frontend`

Verify the app is running by going to `http://localhost:3001` in browser