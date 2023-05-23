# webb22_alm_cicd

## To run project in the browser

1. Clone this repository to your local machine using http or ssh
2. Run **npm install** in the terminal of your code editor to install all dependencies
3. Run **npm run start** to startup the project
4. Visit http://www.localhost:3000 in your browser to access the project site

##### Note:

- /calc takes you to the instructions to use the calculator
- /calc/add?val1=50&val2=72 --> Modify the url according to your needs. /sub, /mult, /div etc. As well as different values.

## Testing

_Mocha & Supertest_

**Mocha:** npm run test

**Supertest:** npm run supertest

**Nyc:** npm run coverage

## Docker

- A new image is published to github packages by github actions, on push to main branch
- To pull the latest image version, run **docker pull ghcr.io/beccafi/webb22_alm_cicd:main** in your terminal
