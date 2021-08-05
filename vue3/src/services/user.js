import axios from "axios";

const API = "http://localhost:3000"

export async function users(params) {
    const data = await axios.get(`${API}/users`, { params });
    return data;
  }