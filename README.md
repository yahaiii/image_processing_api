# Image Processing API

This is a Node.js API that allows you to resize images and serve them to the frontend. The API can be used for rapid prototyping, as well as to serve properly scaled versions of images to reduce page load size.

## Features

- Resize images using URL parameters
- Store resized images for future use
- Stream resized images to the client to reduce memory usage

## Installation

To install the server, packages and dependencies, clone the repository and run `npm install` to install.

## Usage

Run `npm run format` to format code with prettier.
Run `npm run test` to build and run tests.
Run `npm run jasmine` to run tests.
Run `npm run build` to build.

To start the API, run `npm run start`. The API will listen on port 3000 by default.

To resize an image, send a GET request to the `/resize` endpoint with the following URL parameters:

- `filename`: the name of the image file
- `width`: the width of the resized image
- `height`: the height of the resized image

For example: `/resize?filename=image&width=200&height=200`

WITHOUT file extension. JPG is assumed.

The API will return the resized image in the response, and save a copy for future use.


To start the API, run the following command:
`npm run start`

## Health Check Endpoint
To ensure that the app is working properly, a health check endpoint is available at the following URL:

`http://localhost:3000/health`

You can use this endpoint to check the status of the app by making a GET request to it. If the app is working properly, the endpoint will return a status code of 200. If there is an issue with the app, the endpoint will return a different status code.

To use the health check endpoint, you can use a tool like curl to make a request to the endpoint:

`curl -i http://localhost:3000/health`
Alternatively, you can use a browser to make the request by visiting the URL in the address bar.

You can use the health check endpoint as a simple way to ensure that the app is running and available to handle requests.

## Built With

* [Node.js](https://nodejs.org/) - JavaScript runtime
* [Express](https://expressjs.com/) - Web framework for Node.js
* [Sharp](https://sharp.pixelplumbing.com/) - Image processing library
* [Jasmine](https://jasmine.github.io/) - Testing framework
* [Supertest](https://jasmine.github.io/) - Endpoint testing
* [Prettier](https://prettier.io/) - Code formatter
* [ESLint](https://eslint.org/) - Code linter
* [TypeScript](https://www.typescriptlang.org/) - Programming language

## License

This project is licensed under the MIT License.
