🌟 Creatorverse

Creatorverse is a full-stack React application that allows users to create, view, update, and delete their favorite content creators. These creators can be YouTubers, Twitch streamers, TikTok personalities, Instagram creators, or any online content producer worth following.

The app serves as a personal directory of creators, giving users full CRUD (Create, Read, Update, Delete) functionality through a clean and intuitive interface.

🚀 Features
Core Features

View a list of all content creators on the homepage

Each creator includes:

Name

Channel or profile URL

Short description

Optional image URL

Click on a creator to view detailed information

Add a new content creator using a form

Edit an existing creator’s name, URL, description, or image

Delete a content creator with confirmation

Each creator has a unique route and URL

Technical Features

Built with React and Vite

Client-side routing using React Router

Database and backend powered by Supabase

API calls implemented using async/await

State managed using React hooks (useState, useEffect)

Environment variables used to securely store Supabase credentials

🧱 Tech Stack

Frontend: React, Vite

Routing: React Router DOM

Backend / Database: Supabase

Styling: Basic CSS (optional PicoCSS support)

API Communication: Supabase JavaScript Client

📂 Project Structure
src/
│── components/
│   └── Card.jsx
│── pages/
│   ├── ShowCreators.jsx
│   ├── ViewCreator.jsx
│   ├── AddCreator.jsx
│   ├── EditCreator.jsx
│   └── DeleteCreator.jsx
│── client.js
│── App.jsx
│── main.jsx

⚙️ Getting Started
1. Install dependencies
npm install

2. Create a .env file
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

3. Start the development server
npm run dev

🗄️ Database Setup

Supabase table: creators

Columns:

id (auto-generated)

name (text)

url (text)

description (text)

imageURL (text, optional)

Row Level Security is disabled for simplicity, and realtime updates are enabled.

✨ Future Improvements

Add authentication for user-specific creator lists

Improve UI styling with PicoCSS or Tailwind

Add search and filtering functionality

Add image previews and validation

Add loading and error states

🧑‍🚀 Author

Built as part of the WEB103 Creatorverse Project to demonstrate full CRUD functionality using React and Supabase.
