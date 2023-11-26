// axios

const posts = [
  { id: 1, title: "title1", content: "contaxt1", createdAt: "2023-11-11" },
  { id: 2, title: "title2", content: "contaxt2", createdAt: "2023-11-25" },
  { id: 3, title: "title3", content: "contaxt3", createdAt: "2023-12-11" },
  { id: 4, title: "title4", content: "contaxt4", createdAt: "2023-12-30" },
  { id: 5, title: "title5", content: "contaxt5", createdAt: "2024-01-10" },
];

export function getPosts(){
  return posts;
}