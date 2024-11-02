export const USER_AVATAR =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API}`,
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
