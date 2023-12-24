// axios: https://github.com/axios/axios#example 참조
import axios from "axios";

const posts = [
  { id: 1, title: "title1", content: "contaxt1", createdAt: "2023-11-11" },
  { id: 2, title: "title2", content: "contaxt2", createdAt: "2023-11-25" },
  { id: 3, title: "title3", content: "contaxt3", createdAt: "2023-12-11" },
  { id: 4, title: "title4", content: "contaxt4", createdAt: "2023-12-30" },
  { id: 5, title: "title5", content: "contaxt5", createdAt: "2024-01-10" },
];

export function getPosts() {
  // return posts;
  return axios.get("http://localhost:5000/posts");
}

// https://github.com/typicode/json-server Test REST API Sample

export function getPostById(id) {
  return axios.get(`http://localhost:5000/posts/${id}`);
  // return posts.find((item) => item.id === id);
}

export function createPost(data) {
  return axios.post("http://localhost:5000/posts/", data);
}

export function updatePost(id, data) {
  return axios.put(`http://localhost:5000/posts/${id}`, data);
}

export function deletePost(id) {
  return axios.delete(`http://localhost:5000/posts/${id}`);
}
