import axios from "axios";
import { AppSettings } from "src";
const UserService = {};

UserService.getUser = (userId) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `${AppSettings.apiUrl}/getUser/${userId}`,
    })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

UserService.getUserAll = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: `${AppSettings.apiUrl}/getUserAll`,
    })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

UserService.createUser = (req) => {
  return new Promise((resolve, reject) => {
    axios({
      headers: authHeader(),
      method: "post",
      url: `${AppSettings.apiUrl}/createUser`,
      data: req,
    })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

UserService.updateUser = (req) => {
  return new Promise((resolve, reject) => {
    axios({
      headers: authHeader(),
      method: "post",
      url: `${AppSettings.apiUrl}/updateUser`,
      data: req,
    })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

UserService.deleteUser = (userId) => {
    return new Promise((resolve, reject) => {
      axios({
        method: "GET",
        url: `${AppSettings.apiUrl}/deleteUser/${userId}`,
      })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
  };

export default UserService;
