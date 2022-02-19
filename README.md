# poly-Ai
## Project Name - API INTEGRATION

## Deployment link
- https://polynomial-api.netlify.app/
- Frontend part has been hosted in netlify and backend part in heroku
- backend is hosted in - https://polynomial-api.herokuapp.com/pastehere

## Demo Video

- https://youtu.be/XybQBzEVkPY

## Table of Contents

- [General Info](#general-information)
- [Tech Stack/ Framework Used](#tech-stack/-framework-used)
- [Getting Started](#Getting-Started)
- [Features](#features)
- [Images](#images)

## General Information

- This web application is lets user to share any form text with their friends and the texts are encrypted.

## Tech Stack/ Framework Used

- NodeJS
- MongoDB
- Express
- REACT
- Material UI

## Getting Started

The instructions for setting up project locally.
To get a local copy up and follow these simple example steps.

### Prerequisites

This is the list of things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/biswajit1612/poly-ai.git
   ```
2. Install NPM packages for backend part

   ```sh
   cd server
   ```

   ```sh
   npm install
   ```

   ```sh
   nodemon start
   ```

3. follow readme in the client folder for client side setup

   ```sh
   cd client
   ```
   ```sh
   npm start
   ```

4. On file .env in server folder add the followings
   ```sh
   DB_URL=
   ```
   for mongodb setup

## Features
- Authentication
- User can paste text snippets or documents and should provide a key for encryption.
- User gets a short url after pasting their content.Once you click on it you will have to enter the key for decryption
- User can view their recently created snippets.
- User can manually delete or renew the expiration time of a content url.
- User gets track the people and their ip address who are accessing his snippet.
- If a user pastes a url and get a short url after that he will be redirected to the original url.

## Images

- Auth Page

![Auth](https://user-images.githubusercontent.com/66401984/154605250-1b9bf053-7155-4add-839f-bb2980d2df32.png)

- Home Page

![Homepage](https://user-images.githubusercontent.com/66401984/154605304-2a1ecd50-6a74-4f49-829d-2b8944840763.png)


- Url Page

![url](https://user-images.githubusercontent.com/66401984/154786047-00e21e7d-ee65-4049-aa2e-d4af2085b171.png)

- Fetch Text Page

![Fetch Text page](https://user-images.githubusercontent.com/66401984/154605394-594fd55b-5517-45c9-a696-ab63d3e93158.png)

- Details Page

![Details page](https://user-images.githubusercontent.com/66401984/154605417-228124d0-9a21-481c-88ea-7ecf958a0086.png)

- Name and IP track Page

![Name ip](https://user-images.githubusercontent.com/66401984/154605508-250558f4-fb9b-4c1a-8047-ec5970446301.png)

-My snippets Page


![My snippets](https://user-images.githubusercontent.com/66401984/154605554-c9daaaf2-237d-46af-bf10-b201f67c3926.png)

-how encrypted data is store in database(messsage field in collection)

![encrypted data](https://user-images.githubusercontent.com/66401984/154615279-293f8d11-7b3e-445e-8bb4-ba51eb78e4c4.png)
