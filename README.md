# Sam Movie – React Movie Explorer

Sam Movie is a professional, responsive movie browsing application built with React.js and powered by The Movie Database (TMDb) API.  
It allows users to explore popular, top-rated, and upcoming movies, filter by minimum rating, and sort results by release date or average rating. The project is designed with a clean, dark-themed UI and optimized for all screen sizes.

---

## Live Site

https://sam-movie.netlify.app

---

## Features

- Dynamic movie data from TMDb API
- Browse by category: Popular, Top Rated, Upcoming
- Filter movies by rating (6+, 7+, 8+)
- Sort results by:
  - Release date (ascending / descending)
  - Average rating (ascending / descending)
- Movie cards include:
  - Poster image
  - Title and overview
  - Release date and average rating
- Fully responsive design for mobile, tablet, and desktop
- Smooth, modern user interface and experience

---

## Tech Stack

- React.js (Vite)
- Axios (API requests)
- React Router
- CSS Modules
- Lodash (sorting functionality)
- TMDb REST API (data source)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/sam-movie.git
cd sam-movie
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure API key

Create a `.env` file in the root directory and add the following:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

You can obtain your TMDb API key from: https://www.themoviedb.org/

### 4. Start the development server

```bash
npm run dev
```

---

## Deployment

This project can be deployed using any modern hosting platform such as:

- Netlify
- Vercel
- Render

Make sure to define the environment variable `VITE_TMDB_API_KEY` on the deployment platform.

---

## Author

Developed by: Shmuel Yitzhak  
Email: shmoelyitzhak@gmail.com  
Portfolio: https://samprotfolio.netlify.app

---

## License

This project is open source and may be used, modified, and distributed freely for any purpose, including commercial use. No attribution is required.
