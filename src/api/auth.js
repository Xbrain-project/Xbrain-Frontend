import axios from "axios";

export const signup = async (formData) => {
    return await axios.post("http://localhost:9090/api/signup", formData)
}

export const signIn = async (form) => {
    return await axios.post("http://localhost:9090/api/signin", form)
}

export const updateUser = async (authtoken,value) => {
  return await axios.put("http://localhost:9090/users/update-user",
    value,   
    {
    headers: {
      Authorization: `Bearer ${authtoken}`,
    },
  }
  );
}


export const currentUser = async (authtoken) => {
    return await axios.post("http://localhost:5000/users/current-user",
      {},     // ปีกกาว่างๆนี้คือ param ของ post ที่จะส่งไป แต่ในที่นี้เราส่งไปแค่ token
      {
      headers: {
        Authorization: `Bearer ${authtoken}`,
      },
    }
    );
  }


export const currentAdmin = async (authtoken) => {
    return await axios.post("http://localhost:5000/users/current-admin",
      {},    
      {
        headers: {
          Authorization: `Bearer ${authtoken}`,
        },
      }
    );
  }