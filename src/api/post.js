import axios from "axios";

export const listPost = async () => {
  return await axios.get("http://localhost:9090/api/posts", {
    // get all post
    // headers: {
    //   Authorization: `Bearer ${authtoken}`,
    // },
  });
};

export const currentPost = async (id) => {
  return await axios.get("http://localhost:9090/api/posts/" + id);
};

export const createPost = async (value) => {
  return await axios.post("http://localhost:9090/api/users/post", value);
};

// export const updatePost = async (authtoken, value, valu , id) => {
//   return await axios.put("http://localhost:5000/posts/edit-post/" + id,

// };

export const removePost = async (id) => {
  return await axios.delete("http://localhost:5000/posts/" + id);
};
