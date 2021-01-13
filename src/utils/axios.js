import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-4d425.cloudfunctions.net/api",
});

export default instance;
