import axios from "axios";

export const addApplyPost = async (student_id,value) => {
  return await axios.post("http://localhost:8080/createApplyPost/"+student_id,value)
};

export const getTeacherPostById = async (post_id) => {
  return await axios.get("http://localhost:8080/getTeacherPost/"+post_id)
};