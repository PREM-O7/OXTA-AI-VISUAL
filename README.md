# OXTA VISUALS AI  

OXTA VISUALS AI is an AI-powered image generation platform that allows users to create high-quality images using text prompts. It features user authentication, a user-friendly dashboard, and a modern UI.  

## Features  

✅ **AI Image Generation** – Enter a text prompt to generate unique images.  
✅ **User Authentication** – Sign up and log in with Google or email/password.  
✅ **User Dashboard** – View, manage, and download generated images.  
✅ **Gallery** – Browse AI-generated images from users.  
✅ **Sharing Options** – Save images to the dashboard, download, or share.  

## Tech Stack  

- **Frontend**: React.js / Next.js  
- **Backend**: Node.js + Express  
- **Database**: Firebase / MongoDB  
- **Hosting**: Vercel / Netlify (Frontend), AWS / Google Cloud (Backend)  

## Installation  

### Clone the Repository  
```bash
git clone https://github.com/PREM-O7/OXTA-VISUALS-AI.git
cd OXTA-VISUALS-AI
```

### Install Dependencies  
```bash
npm install
```

### Set Up Environment Variables  

Create a `.env` file in the root directory and add your API keys:  

```env
REACT_APP_FIREBASE_API_KEY=your_firebase_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_BACKEND_URL=http://localhost:5000
```

### Start the Development Server  
```bash
npm start
```

## API Endpoints  

### Generate Image  
**POST** `/generate`  

#### Request Body:  
```json
{
  "prompt": "A futuristic cityscape with neon lights"
}
```

#### Response:  
```json
{
  "imageUrl": "https://generated-image-url.com/image.png"
}
```

## Deployment  

### Frontend (Vercel)  
```bash
vercel deploy
```

### Backend (Render / AWS)  
```bash
node server.js
```

## Screenshots  
Coming soon...  

## Contributing  

1. Fork the repo  
2. Create a new branch (`feature-branch`)  
3. Commit your changes  
4. Open a pull request  

## License  

This project is licensed under the **MIT License**.  
