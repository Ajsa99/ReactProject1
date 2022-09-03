import axios from "axios";

const newApi = axios.create({baseURL : "https://newsapi.org"})


export default newApi;