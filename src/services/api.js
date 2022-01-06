import axios from "axios";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMmIwNzU4NWE5MjU5ZjFhYmEyMTY0MWE3NjJlMTcwZSIsInN1YiI6IjYxZDUwZDlmYTg0ZmY3MDA4YzFhYzgwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dO8B6NkGqevbyc5CmfAyfe7JX0rwZCU1oO7Ny3aVRkk";
export default axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${token}`
    }
})