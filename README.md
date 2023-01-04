# Image Processing API

This is a Node.js API that allows you to resize images and serve them to the frontend. The API can be used for rapid prototyping, as well as to serve properly scaled versions of images to reduce page load size.

## Features

- Resize images using URL parameters
- Store resized images for future use
- Stream resized images to the client to reduce memory usage

## Installation

To install the server, packages and dependencies, clone the repository and run `npm install` to install.

## Usage

Run `npm run test` to build and run tests.

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
