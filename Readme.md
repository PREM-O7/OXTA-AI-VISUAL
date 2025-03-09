Install Dependencies

npm install

Set Up Environment Variables

Create a .env file and add your API keys:

REACT_APP_FIREBASE_API_KEY=your_firebase_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_BACKEND_URL=http://localhost:5000

Start the Development Server

npm start

API Endpoints

Generate Image

POST /generate
Request Body:

{
  "prompt": "A futuristic cityscape with neon lights"
}

Response:

{
  "imageUrl": "https://generated-image-url.com/image.png"
}

Deployment

Frontend (Vercel)

vercel deploy

Backend (Render / AWS)

node server.js

Screenshots

Coming soon...

Contributing

1. Fork the repo


2. Create a new branch (feature-branch)


3. Commit your changes


4. Open a pull request
5. 
