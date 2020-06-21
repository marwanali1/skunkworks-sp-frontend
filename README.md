# sp-clone
Frontend code for music streaming app clone

### Setting up the app locally

Clone the repo: `https://github.com/marwanali1/sp-clone-frontend.git`

Change into the repo: `cd sp-clone-frontend`

Install project dependencies: `npm install --save`

Run the app: `npm start`

#### Docker

Create docker image of the app: `docker build -t sp-clone-frontend:latest .`  

Run docker container with the image: `docker run -v ${PWD}:/sp-clone-frontend -v /sp-clone-frontend/node_modules -p 3001:3000 --rm sp-clone-frontend:latest`

Verify the app is running by going to `http://localhost:3001` in browser