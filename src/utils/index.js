import axios from "axios";
import { image10, image7, image8, image9 } from "../assets/images";

const Travel_api = "http://127.0.0.1:8000/api";

export const customFetch = axios.create({
  baseURL: Travel_api,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getUserFromLocalStorage = () => {
  try {
    const userJSON = localStorage.getItem("user");
    if (userJSON) {
      const user = JSON.parse(userJSON);
      return user;
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
    // Remove invalid data from localStorage
    localStorage.removeItem("user");
    window.location.href = "/auth/login";
  }

  return null;
};

export const TripSliders = [
  {
    id: 1,
    image: image7,
    shortDesc: "Embark on a visual journey.",
    longDesc: `Share your experiences with the world and connect with fellow
    travelers.Your stories create the map of our shared
    adventures.`,
  },
  {
    id: 2,
    image: image8,
    shortDesc: "Capture the essence of your travels.",
    longDesc:
      "Upload photos, write descriptions, and let your adventures unfold on a global stage. Join us in building a tapestry of wanderlust.",
  },
  {
    id: 3,
    image: image9,
    shortDesc: "Explore beyond boundaries.",
    longDesc:
      "Share your world in images and words, and let the travel community follow your footsteps. Join us, where every story finds its place.",
  },
  {
    id: 4,
    image: image10,
    shortDesc: "Start your storytelling adventure",
    longDesc:
      "Share your travel tales effortlessly with images, descriptions, and ratings. Connect with a community that speaks the language of exploration.",
  },
];

export const navbarLink = [
  {
    id: 1,
    url: "/trips",
    text: "Trips",
  },
  {
    id: 2,
    url: "/new-trip",
    text: "Create-trip",
  },
  // {
  //   id: 3,
  //   url: "/",
  //   text: "Create-trip",
  // },
  {
    id: 4,
    url: "/auth/login",
    text: "Login",
  },
  {
    id: 5,
    url: "/auth/register",
    text: "Signup",
  },
];
