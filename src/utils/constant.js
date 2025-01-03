export const USER_AVATAR =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDcxZGU4ZTJhOWFlOTAzNzQ1NWYzNGVlOWVjMDE0MyIsIm5iZiI6MTczMDEzNDc3NS4wMTk4MzcsInN1YiI6IjY3MWZjMGJiMzRjMGZhYmQ2ODFkMmJiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fb8smrUrZgC3dsxRWDOYdYCLnrzknp06G12onYCGwFM`,
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w780";

export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English",
  },
  {
    identifier: "hi",
    name: "Hindi",
  },
  {
    identifier: "es",
    name: "spanish",
  },
  {
    identifier: "ar",
    name: "arabic",
  },
];
export const GEMINI_API = import.meta.env.VITE_GEMINI_API;
