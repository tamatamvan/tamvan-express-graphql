# Tamvan Express GraphQL

Tamvan Express GraphQL is a simple implementation and example on running GraphQL Server using express.js

## Basic Information and Dependencies (package.json)

```json
{
  "name": "tamvan-express-graphql",
  "version": "0.1.0",
  "private": false,
  "public": true,
  "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www"
  },
  "dependencies": {
    "debug": "~2.2.0",
    "express": "~4.13.4",
    "express-graphql": "^0.6.7",
    "graphql": "^0.10.5",
    "morgan": "~1.7.0"
  }
}
```

## File structure

```bash
.
├── LICENSE
├── README.md
├── app.js
├── bin
│   └── www
├── data
│   └── User.js
├── graphql
│   └── schema.js
├── package-lock.json
└── package.json
```

## Getting Started

```bash
git clone https://github.com/tamatamvan/tamavan-express-graphql your_directory_name

cd your_directory_name

npm install

npm run dev # running the server for development

#or

npm start # running the server for production
```
Then, you can access the GraphiQL at `http://localhost:3000/`

## The MIT License
Copyright 2017 - Septian A Tama (tamatamvan)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
