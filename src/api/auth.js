import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api/v1/auth";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Function to sign up a new user
 * POST /signup
 * @param {Object} user
 * returns {Promise<Object>} response data
 */
export function signup(user) {
  return api
    .post("/signup", user)
    .then((response) => [null, response.data])
    .catch((error) => {
      return [error.response ? error.response.data : error.message, null];
    });
}
