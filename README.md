# NetflixGPT

# 🎬 Movie Recommendation App

This project is a movie web application built with **React.js**, utilizing **The Movie Database (TMDB) API** for fetching movie data and **Gemini API** for enhanced AI interactions (optional). It allows users to view now playing, top-rated, and popular movies, and watch trailers with a smooth and responsive interface.

## 🚀 Features

- View movies by category: Now Playing, Popular, and Top Rated.
- Click on a movie poster to play its trailer.
- Responsive UI with conditional rendering and modals.
- Global state management using Redux Toolkit.
- Escape key functionality for closing trailers.
- Autoplaying, muted trailers via YouTube embeds.
- Custom hooks for reusable logic (e.g., fetching trailers).

---

## 🧰 Tech Stack

- **React.js** (with functional components & hooks)
- **Redux Toolkit** (for global state management)
- **Tailwind CSS** (for responsive UI)
- **TMDB API** (for movie data and trailers)
- **Gemini API** (for AI enhancements, like recommendations or search — optional)
- **Vite** or **Create React App** (as a bundler — based on your setup)

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/movie-trailer-app.git
cd movie-trailer-app

# Install dependencies
npm install
```

---

## 🛠️ Configuration

1. **TMDB API Key**

   Sign up at [TMDB](https://www.themoviedb.org/) and generate an API key.

   Create a `.env` file in the root:

   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key
   ```

   Update your API call file (`constants.js`) accordingly:

   ```js
   export const API_OPTIONS = {
     method: 'GET',
     headers: {
       accept: 'application/json',
       Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
     },
   };
   ```

2. **Gemini API **

   If you're integrating AI-based features (like search or recommendations), use Google Gemini API.

   Create another entry in `.env`:

   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key
   ```

   Use this key to call Gemini services in your AI utility functions.

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── MovieCard.js
│   ├── PlayTrailer.js
│   └── ...other UI components
│
├── utils/
│   ├── constants.js
│   ├── hooks/useMovieTrailer.js
│   └── store/moviesSlice.js
│
├── App.js
└── main.jsx
```

---

## ▶️ Running the App Locally

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser (or `http://localhost:3000` for CRA).

---

## ☁️ Deployment

Firebase: Link ( https://netflixgpt-c0be4.web.app )


## 💡 How It Works

1. **Fetching Movies**
   - Uses TMDB API to get lists of now playing, popular, and top-rated movies.
   - Stores the data in Redux for easy access.

2. **Showing Trailers**
   - When a user clicks on a movie card, it triggers a modal with an embedded YouTube trailer.
   - Trailer links are fetched dynamically using TMDB's video endpoint.

3. **Trailer Modal**
   - Full-screen overlay with escape key handling.
   - Utilizes `<iframe>` to embed YouTube trailers with autoplay and mute settings.

4. **AI Integration **
   - Uses Gemini API for smart search or content recommendations.

---

## 🧠 Future Enhancements


- Dark/light theme toggle.

---

## 📜 License

This project is open source under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Developed by [Ganesh Derkar]( https://ganeshderkarportfolio.netlify.app )

---

## 🌟 Support

If you like this project, give it a ⭐ on GitHub!