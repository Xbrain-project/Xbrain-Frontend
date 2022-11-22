import axios from "axios";

export const addComment = async (id, value) => {
  return await axios.post(
    "http://localhost:9090/api/posts/" + id + "/comments",
    value
  );
};

export const getCommentbyPost = async (id) => {
  return await axios.get("http://localhost:9090/api/posts/" + id + "/comments");
};
