import axios from "axios";

// export const getUser = async () => {
//   return await axios.get("http://localhost:9090/api/posts", {

//   });
// };

export const getUserById = async (id) => {
  return await axios.get("http://localhost:9090/api/posts/" + id);
};

export const login = async (value) => {
  return await axios.post("http://localhost:8080/api/login", value);
};

export const signUp = async (value) => {
  return await axios.post("http://localhost:8080/api/register", value);
};

export const updateUser = async (value, id) => {
  return await axios.put("http://localhost:5000/posts/edit-post/" + id, value);
};
