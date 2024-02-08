import axios from "axios";
import { image10, image7, image8, image9 } from "../assets/images";
import { redirect } from "react-router-dom";

const Travel_api = "https://wanderwise.space/api";

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
    return redirect("/auth/login");
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
    text: "Journey",
  },
  {
    id: 2,
    url: "/trips/add",
    text: "New Adventure",
  },
  {
    id: 3,
    url: "/trips/saved",
    text: "Bookmarked",
  },
  {
    id: 4,
    url: "/auth/profile",
    text: "Profile",
  },
  {
    id: 5,
    url: "/auth/login",
    text: "Sign In",
  },
  {
    id: 6,
    url: "/auth/register",
    text: "Register",
  },
];
