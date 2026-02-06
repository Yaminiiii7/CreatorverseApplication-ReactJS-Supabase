# WEB103 Prework - *👉🏿 Creatorverse application*

Submitted by: **👉🏿 Yamini Mandadi**

About this web app: **👉🏿 Creatorverse is a full-stack React application that allows users to create, view, update, and delete their favorite content creators. These creators can be YouTubers, Twitch streamers, TikTok personalities, Instagram creators, or any online content producer worth following.

The app serves as a personal directory of creators, giving users full CRUD (Create, Read, Update, Delete) functionality through a clean and intuitive interface.**

Time spent: **👉🏿 15** hours

## Required Features

The following **required** functionality is completed:

<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->
- [*] **A logical component structure in React is used to create the frontend of the app**
- [*] **At least five content creators are displayed on the homepage of the app**
- [*] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [*] **API calls use the async/await design pattern via Axios or fetch()**
- [] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [*] **Each content creator has their own unique URL**
- [*] **The user can edit a content creator to change their name, url, or description**
- [*] **The user can delete a content creator**
- [*] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [ ] Picocss is used to style HTML elements
- [ ] The content creator items are displayed in a creative format, like cards instead of a list
- [ ] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [ ] List anything else that you added to improve the site's functionality!

## Video Walkthrough

Here's a walkthrough of implemented required features:


https://youtu.be/dL0kDg_rxfo


## License

Copyright [👉🏿 2026] [👉🏿 Yamini Mandadi]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

<<<<<<< HEAD
Environment variables used to securely store Supabase credentials

🧱 Tech Stack

Frontend: React, Vite

Routing: React Router DOM

Backend / Database: Supabase

Styling: Basic CSS (optional PicoCSS support)

API Communication: Supabase JavaScript Client

📂 Project Structure
```
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
```
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
=======
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
>>>>>>> d8d4cfc ('adding_readme')
