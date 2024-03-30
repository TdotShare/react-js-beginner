import axios from "axios";
import { AppSettings } from "common/configs";

let UserService = {};

const prefixPath = "User"

UserService.getUser = (userId) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `${AppSettings.apiUrl}/${prefixPath}/GetUser/${userId}`,
    })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

UserService.getUserAll = () => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `${AppSettings.apiUrl}/${prefixPath}/GetUserAll`,
    })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

UserService.createUser = (req) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${AppSettings.apiUrl}/${prefixPath}/createUser`,
      data: req,
    })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

UserService.updateUser = (req) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${AppSettings.apiUrl}/${prefixPath}/updateUser`,
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
        url: `${AppSettings.apiUrl}/${prefixPath}/deleteUser/${userId}`,
      })
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    });
};


UserService.uploadAttachedUser = (req) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${AppSettings.apiUrl}/${prefixPath}/uploadAttachedUser`,
      data: req,
    })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
};

UserService.getSearchUser = (req) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "post",
      url: `${AppSettings.apiUrl}/${prefixPath}/GetSearchUser`,
      data: req,
    })
      .then((response) => resolve(response.data))
      .catch((error) => reject(error));
  });
}

export default UserService;
