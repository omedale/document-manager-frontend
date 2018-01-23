import axios from 'axios';
const baseUrl = "http://localhost:3000/";
export default {
  RegisterUser: (data) => {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:8080/register', data)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  LoginUser: (data) => {
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:3000/login', data)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  saveToken: (token) => {
    localStorage.removeItem('UserAccessToken');
    localStorage.setItem('UserAccessToken', token);
    localStorage.setItem('authenticated', true);
  },
  logUserOut: () => {
    localStorage.removeItem('UserAccessToken');
    localStorage.removeItem('authenticated', true);
  },
  getToken: () => {
    return localStorage.getItem('UserAccessToken');
  },
  verifyToken: (token) => {
    const data = { token };
    return new Promise((resolve, reject) => {
      axios.post('http://localhost:3000/verifyaccess', data)
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          console.log(error)
          reject(error.response);
        });
    });
  },
  getAllDocuments: () => {
    const AuthStr = localStorage.getItem('UserAccessToken');
    return new Promise((resolve, reject) => {
      axios.get(`${baseUrl}users/1/documents`, { headers: { Authorization: AuthStr } })
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error.response);
        });
    });
  },

  getDocument: (id) => {
    const AuthStr = localStorage.getItem('UserAccessToken');
    return new Promise((resolve, reject) => {
      axios.get(`${baseUrl}users/1/documents/${id}`, { headers: { Authorization: AuthStr } })
        .then(function (response) {
          resolve(response);
        })
        .catch(function (error) {
          reject(error.response);
        });
    });
  },

  deleteDocument: (id) => { 
    const AuthStr = localStorage.getItem('UserAccessToken');
      return axios.delete(`${baseUrl}users/1/documents/${id}`, { headers: { Authorization: AuthStr }})
        .then(function (response) {
         return response
        })
        .catch(function (error) {
          return error
        });
  },

  saveDocuments: (newDocument) => {
    const AuthStr = localStorage.getItem('UserAccessToken');
    var config = {
      headers: { 'Authorization': AuthStr }
    };
    return new Promise((resolve, reject) => {
      if (newDocument.id) {
        return axios.put(`http://localhost:3000/users/1/documents/${newDocument.id}`, newDocument, config)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            console.log(error)
            reject(error.response);
          });
      } else {
        return axios.post('http://localhost:3000/users/1/documents', newDocument, config)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            reject(error.response);
          });
      }
    });
  }
}