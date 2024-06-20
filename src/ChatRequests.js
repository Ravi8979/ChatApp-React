import axaios from 'axios';

const API = axios.create({baseURL: 'http://localhost:3000'})

export const userChats = API.get('/chat/${id)')