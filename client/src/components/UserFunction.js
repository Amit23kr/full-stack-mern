import axios from "axios";

export const register = newUser => {
  return (
    axios
      .post("users/register", {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        phone_No: newUser.phone_No,
        email: newUser.email,
        password: newUser.password,
        website: newUser.website,
        textArea: newUser.textArea
      })
      // .then(res => {
      //   console.log("Registered!");
      // });
      .then(res => {
        localStorage.setItem("usertoken", res.data);
        return res.data;
      })
      .catch(err => {
        console.log(err);
      })
  );
};

// export const login = user => {
//   return axios
//     .post("users/login", {
//       email: user.email,
//       password: user.password
//     })
//     // .then(res => {
//     //   localStorage.setItem("usertoken", res.data);
//     //   return res.data;
//     // })
//     // .catch(err => {
//     //   console.log(err);
//     // });
// };
