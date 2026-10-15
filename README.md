# ResQHeart — Animal Welfare Management System

ResQHeart is a web-based platform built to rescue, heal, and rehome stray animals. It simplifies pet adoption, online donations, animal welfare awareness, and pet-care assistance.

**Live Demo:** https://res-q-heart.vercel.app/

## Features

- **Pet Adoption:** Browse pets, submit adoption requests, manage approvals, and book adoption slots with email notifications.
- **Online Donations:** Razorpay integration with payment status tracking.
- **AI Pet Assistant:** Assistance with pet health, food, and vaccination queries.
- **Blogs & Contact:** Share animal welfare information and connect with the organization.
- **Admin Dashboard:** Manage pets, adoption requests, blogs, donations, and website content.

## Tech Stack

- **Frontend:** React, Bootstrap, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT, HTTP-only cookies, bcrypt, role-based authorization
- **Image Management:** Cloudinary
- **Integrations:** Razorpay, Nodemailer
- **AI:** TinyLlama, LangChain, Pinecone

## Environment Variables

Create a `.env` file in the backend directory and configure the required variables:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

Configure additional environment variables for email and AI integrations as required by your implementation. Never commit your `.env` file to GitHub.

## Getting Started

```bash
git clone <your-repository-url>
cd ResQHeart
```

Install dependencies in the frontend and backend directories, configure environment variables, and start both applications using their respective npm scripts.

## Deployment

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

## Project Objective

ResQHeart brings animal adoption, donations, and pet-care assistance together in one platform to support stray animal welfare.

**Developed by:** Likhitha A J
