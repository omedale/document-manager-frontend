webpackHotUpdate(0,{

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(10), RootInstanceProvider = __webpack_require__(8), ReactMount = __webpack_require__(6), React = __webpack_require__(1); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(50);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var baseUrl = "http://localhost:3000/";
exports.default = {
  RegisterUser: function RegisterUser(data) {
    return new Promise(function (resolve, reject) {
      _axios2.default.post('http://localhost:8080/register', data).then(function (res) {
        resolve(res);
      }).catch(function (error) {
        reject(error.response);
      });
    });
  },
  LoginUser: function LoginUser(data) {
    return new Promise(function (resolve, reject) {
      _axios2.default.post('http://localhost:3000/login', data).then(function (res) {
        resolve(res);
      }).catch(function (error) {
        reject(error.response);
      });
    });
  },
  saveToken: function saveToken(token) {
    localStorage.removeItem('UserAccessToken');
    localStorage.setItem('UserAccessToken', token);
    localStorage.setItem('authenticated', true);
  },
  logUserOut: function logUserOut() {
    localStorage.removeItem('UserAccessToken');
    localStorage.removeItem('authenticated', true);
  },
  getToken: function getToken() {
    return localStorage.getItem('UserAccessToken');
  },
  verifyToken: function verifyToken(token) {
    var data = { token: token };
    return new Promise(function (resolve, reject) {
      _axios2.default.post('http://localhost:3000/verifyaccess', data).then(function (res) {
        resolve(res);
      }).catch(function (error) {
        console.log(error);
        reject(error.response);
      });
    });
  },
  getAllDocuments: function getAllDocuments() {
    var AuthStr = localStorage.getItem('UserAccessToken');
    return new Promise(function (resolve, reject) {
      _axios2.default.get(baseUrl + 'users/1/documents', { headers: { Authorization: AuthStr } }).then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error.response);
      });
    });
  },

  getDocument: function getDocument(id) {
    var AuthStr = localStorage.getItem('UserAccessToken');
    return new Promise(function (resolve, reject) {
      _axios2.default.get(baseUrl + 'users/1/documents/' + id, { headers: { Authorization: AuthStr } }).then(function (response) {
        resolve(response);
      }).catch(function (error) {
        reject(error.response);
      });
    });
  },
  saveDocuments: function saveDocuments(newDocument) {
    var AuthStr = localStorage.getItem('UserAccessToken');
    var config = {
      headers: { 'Authorization': AuthStr }
    };
    return new Promise(function (resolve, reject) {
      if (newDocument.id) {
        return _axios2.default.post('http://localhost:3000/users/1/documents', newDocument, config).then(function (response) {
          resolve(response);
        }).catch(function (error) {
          reject(error.response);
        });
      } else {
        return _axios2.default.post('http://localhost:3000/users/1/documents', newDocument, config).then(function (response) {
          resolve(response);
        }).catch(function (error) {
          reject(error.response);
        });
      }
    });
  }
};

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(9); if (makeExportsHot(module, __webpack_require__(1))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ApiCalls.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module), __webpack_require__(2)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbC9BcGlDYWxscy5qcz8zOWRjIl0sIm5hbWVzIjpbImJhc2VVcmwiLCJSZWdpc3RlclVzZXIiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwb3N0IiwidGhlbiIsInJlcyIsImNhdGNoIiwiZXJyb3IiLCJyZXNwb25zZSIsIkxvZ2luVXNlciIsInNhdmVUb2tlbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJsb2dVc2VyT3V0IiwiZ2V0VG9rZW4iLCJnZXRJdGVtIiwidmVyaWZ5VG9rZW4iLCJjb25zb2xlIiwibG9nIiwiZ2V0QWxsRG9jdW1lbnRzIiwiQXV0aFN0ciIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0RG9jdW1lbnQiLCJpZCIsInNhdmVEb2N1bWVudHMiLCJuZXdEb2N1bWVudCIsImNvbmZpZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFDQSxJQUFNQSxVQUFVLHdCQUFoQjtrQkFDZTtBQUNiQyxnQkFBYyxzQkFBQ0MsSUFBRCxFQUFVO0FBQ3RCLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxzQkFBTUMsSUFBTixDQUFXLGdDQUFYLEVBQTZDSixJQUE3QyxFQUNHSyxJQURILENBQ1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2JKLGdCQUFRSSxHQUFSO0FBQ0QsT0FISCxFQUlHQyxLQUpILENBSVMsVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCTCxlQUFPSyxNQUFNQyxRQUFiO0FBQ0QsT0FOSDtBQU9ELEtBUk0sQ0FBUDtBQVNELEdBWFk7QUFZYkMsYUFBVyxtQkFBQ1YsSUFBRCxFQUFVO0FBQ25CLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxzQkFBTUMsSUFBTixDQUFXLDZCQUFYLEVBQTBDSixJ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QkFBTXhCLElBQU4sQ0FBVyx5Q0FBWCxFQUFzRDBCLFdBQXRELEVBQW1FQyxNQUFuRSxFQUNOMUIsSUFETSxDQUNELFVBQVVJLFFBQVYsRUFBb0I7QUFDeEJQLGtCQUFRTyxRQUFSO0FBQ0QsU0FITSxFQUlORixLQUpNLENBSUEsVUFBVUMsS0FBVixFQUFpQjtBQUN0QkwsaUJBQU9LLE1BQU1DLFFBQWI7QUFDRCxTQU5NLENBQVA7QUFPRCxPQVJELE1BUU87QUFDTCxlQUFPLGdCQUFNTCxJQUFOLENBQVcseUNBQVgsRUFBc0QwQixXQUF0RCxFQUFtRUMsTUFBbkUsRUFDTjFCLElBRE0sQ0FDRCxVQUFVSSxRQUFWLEVBQW9CO0FBQ3hCUCxrQkFBUU8sUUFBUjtBQUNELFNBSE0sRUFJTkYsS0FKTSxDQUlBLFVBQVVDLEtBQVYsRUFBaUI7QUFDckJMLGlCQUFPSyxNQUFNQyxRQUFiO0FBQ0YsU0FOTSxDQUFQO0FBT0Q7QUFDRixLQWxCTSxDQUFQO0FBbUJEO0FBakdZLEMiLCJmaWxlIjoiMC42MGUwZDMxMWMwYzY1MjQyOGQ0OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmNvbnN0IGJhc2VVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgUmVnaXN0ZXJVc2VyOiAoZGF0YSkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvcmVnaXN0ZXInLCBkYXRhKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIExvZ2luVXNlcjogKGRhdGEpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luJywgZGF0YSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBzYXZlVG9rZW46ICh0b2tlbikgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdVc2VyQWNjZXNzVG9rZW4nKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVXNlckFjY2Vzc1Rva2VuJywgdG9rZW4pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoZW50aWNhdGVkJywgdHJ1ZSk7XG4gIH0sXG4gIGxvZ1VzZXJPdXQ6ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnVXNlckFjY2Vzc1Rva2VuJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGhlbnRpY2F0ZWQnLCB0cnVlKTtcbiAgfSxcbiAgZ2V0VG9rZW46ICgpID0+IHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VzZXJBY2Nlc3NUb2tlbicpO1xuICB9LFxuICB2ZXJpZnlUb2tlbjogKHRva2VuKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHsgdG9rZW4gfTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3ZlcmlmeWFjY2VzcycsIGRhdGEpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0QWxsRG9jdW1lbnRzOiAoKSA9PiB7XG4gICAgY29uc3QgQXV0aFN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdVc2VyQWNjZXNzVG9rZW4nKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9dXNlcnMvMS9kb2N1bWVudHNgLCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogQXV0aFN0ciB9IH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIGdldERvY3VtZW50OiAoaWQpID0+IHtcbiAgICBjb25zdCBBdXRoU3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VzZXJBY2Nlc3NUb2tlbicpO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvcy5nZXQoYCR7YmFzZVVybH11c2Vycy8xL2RvY3VtZW50cy8ke2lkfWAsIHsgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBBdXRoU3RyIH0gfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIHNhdmVEb2N1bWVudHM6IChuZXdEb2N1bWVudCkgPT4ge1xuICAgIGNvbnN0IEF1dGhTdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVXNlckFjY2Vzc1Rva2VuJyk7XG4gICAgdmFyIGNvbmZpZyA9IHtcbiAgICAgIGhlYWRlcnM6IHsnQXV0aG9yaXphdGlvbic6IEF1dGhTdHIgfVxuICAgIH07XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChuZXdEb2N1bWVudC5pZCkge1xuICAgICAgICByZXR1cm4gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXJzLzEvZG9jdW1lbnRzJywgbmV3RG9jdW1lbnQsIGNvbmZpZylcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICB9KTsgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXJzLzEvZG9jdW1lbnRzJywgbmV3RG9jdW1lbnQsIGNvbmZpZylcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jbGllbnQvdXRpbC9BcGlDYWxscy5qcyJdLCJzb3VyY2VSb290IjoiIn0=