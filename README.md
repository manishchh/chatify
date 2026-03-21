# Chatify

Chatify is a full-stack real-time chat application with cookie-based authentication, one-to-one messaging, image sharing, online presence, and welcome email support.

![Dashboard Overview](chatify.jpg)
## Features

- 🔐 Custom JWT Authentication (no 3rd-party auth)
- ⚡ Real-time Messaging via Socket.io
- 🟢 Online/Offline Presence Indicators
- 🔔 Notification & Typing Sounds (with toggle)
- 📨 Welcome Emails on Signup (Resend)
- 🗂️ Image Uploads (Cloudinary)
- 🧰 REST API with Node.js & Express
- 🧱 MongoDB for Data Persistence
- 🚦 API Rate-Limiting powered by Arcjet
- 🎨 Beautiful UI with React, Tailwind CSS & DaisyUI
- 🧠 Zustand for State Management
- 🧑‍💻 Git & GitHub Workflow (branches, PRs, merges)
- 🚀 Easy Deployment (Sevalla)

## Tech Stack

- Frontend: React 19, Vite, Zustand, Axios, React Router, Tailwind CSS, DaisyUI, Socket.IO Client
- Backend: Node.js, Express, MongoDB with Mongoose, Socket.IO, JWT, bcrypt, cookie-parser, CORS
- Integrations: Cloudinary, Resend, Arcjet

## How It Works

- The frontend talks to the backend through `/api/...` routes.
- Authentication is handled with an HTTP-only `jwt` cookie.
- Socket.IO connections reuse that cookie to authenticate real-time sessions.
- MongoDB stores users and messages.
- Cloudinary stores uploaded images.
- Resend sends the welcome email after signup.
- In production, the backend serves the built frontend from `frontend/dist`.

## Requirements

- Node.js 20 or newer
- npm
- MongoDB database
- Cloudinary account
- Resend account
- Arcjet key

## Environment Variables

Create a `.env` file for the backend with the following values:

```env
PORT=3000
MONGO_URI=your_mongo_uri_here

NODE_ENV=development

JWT_SECRET=your_jwt_secret

RESEND_API_KEY=your_resend_api_key
EMAIL_FROM=your_email_from_address
EMAIL_FROM_NAME=your_email_from_name

CLIENT_URL=http://localhost:5173

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

ARCJET_KEY=your_arcjet_key
ARCJET_ENV=development
```

Notes:

- `CLIENT_URL` should match the frontend dev server URL in development.
- `PORT` defaults to `3000`.
- The frontend does not currently require its own `.env` file for local development.
- If a third-party service is missing, the related feature may fail at runtime.

# Installation
## Running Backend🔧

```bash
cd backend
npm install
npm run dev
```
## Running Frontend💻
```bash
cd frontend
npm install
npm run dev
```

## API Overview

Auth routes:

- `POST /api/auth/signup`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `PUT /api/auth/update-profile`
- `GET /api/auth/check`

Message routes:

- `GET /api/messages/contacts`
- `GET /api/messages/chats`
- `GET /api/messages/:id`
- `POST /api/messages/send/:id`

## Production Build

To prepare the app for production:

```bash
npm run build
npm start
```

With `NODE_ENV=production`, the backend serves the built frontend files.
