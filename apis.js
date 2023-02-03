import axios, { Axios } from "axios";

export const getAllPhotos = () => Axios.get("http://jsonplaceholder.typicode.com/photos");