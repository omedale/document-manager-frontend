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

  deleteDocument: function deleteDocument(id) {

    var AuthStr = localStorage.getItem('UserAccessToken');

    console.log(id);
    return _axios2.default.delete(baseUrl + 'users/1/documents/' + id, { headers: { Authorization: AuthStr } }).then(function (response) {
      retun;
    }).catch(function (error) {
      reject(error.response);
    });
  },

  saveDocuments: function saveDocuments(newDocument) {
    var AuthStr = localStorage.getItem('UserAccessToken');
    var config = {
      headers: { 'Authorization': AuthStr }
    };
    return new Promise(function (resolve, reject) {
      if (newDocument.id) {
        console.log('update');
        return _axios2.default.put('http://localhost:3000/users/1/documents/' + newDocument.id, newDocument, config).then(function (response) {
          resolve(response);
        }).catch(function (error) {
          console.log(error);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbC9BcGlDYWxscy5qcz8zOWRjIl0sIm5hbWVzIjpbImJhc2VVcmwiLCJSZWdpc3RlclVzZXIiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwb3N0IiwidGhlbiIsInJlcyIsImNhdGNoIiwiZXJyb3IiLCJyZXNwb25zZSIsIkxvZ2luVXNlciIsInNhdmVUb2tlbiIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInNldEl0ZW0iLCJsb2dVc2VyT3V0IiwiZ2V0VG9rZW4iLCJnZXRJdGVtIiwidmVyaWZ5VG9rZW4iLCJjb25zb2xlIiwibG9nIiwiZ2V0QWxsRG9jdW1lbnRzIiwiQXV0aFN0ciIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiZ2V0RG9jdW1lbnQiLCJpZCIsImRlbGV0ZURvY3VtZW50IiwiZGVsZXRlIiwicmV0dW4iLCJzYXZlRG9jdW1lbnRzIiwibmV3RG9jdW1lbnQiLCJjb25maWciLCJwdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBQ0EsSUFBTUEsVUFBVSx3QkFBaEI7a0JBQ2U7QUFDYkMsZ0JBQWMsc0JBQUNDLElBQUQsRUFBVTtBQUN0QixXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsc0JBQU1DLElBQU4sQ0FBVyxnQ0FBWCxFQUE2Q0osSUFBN0MsRUFDR0ssSUFESCxDQUNRLFVBQUNDLEdBQUQsRUFBUztBQUNiSixnQkFBUUksR0FBUjtBQUNELE9BSEgsRUFJR0MsS0FKSCxDQUlTLFVBQUNDLEtBQUQsRUFBVztBQUNoQkwsZUFBT0ssTUFBTUMsUUFBYjtBQUNELE9BTkg7QUFPRCxLQVJNLENBQVA7QUFTRCxHQVhZO0FBWWJDLGFBQVcsbUJBQUNWLElBQUQsRUFBVTtBQUNuQixXQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFB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ZDQxMWY0MDY5ODlhOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmNvbnN0IGJhc2VVcmwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9cIjtcbmV4cG9ydCBkZWZhdWx0IHtcbiAgUmVnaXN0ZXJVc2VyOiAoZGF0YSkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvcmVnaXN0ZXInLCBkYXRhKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIExvZ2luVXNlcjogKGRhdGEpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL2xvZ2luJywgZGF0YSlcbiAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBzYXZlVG9rZW46ICh0b2tlbikgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdVc2VyQWNjZXNzVG9rZW4nKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVXNlckFjY2Vzc1Rva2VuJywgdG9rZW4pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoZW50aWNhdGVkJywgdHJ1ZSk7XG4gIH0sXG4gIGxvZ1VzZXJPdXQ6ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnVXNlckFjY2Vzc1Rva2VuJyk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2F1dGhlbnRpY2F0ZWQnLCB0cnVlKTtcbiAgfSxcbiAgZ2V0VG9rZW46ICgpID0+IHtcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VzZXJBY2Nlc3NUb2tlbicpO1xuICB9LFxuICB2ZXJpZnlUb2tlbjogKHRva2VuKSA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHsgdG9rZW4gfTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3ZlcmlmeWFjY2VzcycsIGRhdGEpXG4gICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgZ2V0QWxsRG9jdW1lbnRzOiAoKSA9PiB7XG4gICAgY29uc3QgQXV0aFN0ciA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdVc2VyQWNjZXNzVG9rZW4nKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9dXNlcnMvMS9kb2N1bWVudHNgLCB7IGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogQXV0aFN0ciB9IH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG5cbiAgZ2V0RG9jdW1lbnQ6IChpZCkgPT4ge1xuICAgIGNvbnN0IEF1dGhTdHIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVXNlckFjY2Vzc1Rva2VuJyk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zLmdldChgJHtiYXNlVXJsfXVzZXJzLzEvZG9jdW1lbnRzLyR7aWR9YCwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IEF1dGhTdHIgfSB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuXG4gIGRlbGV0ZURvY3VtZW50OiAoaWQpID0+IHtcbiAgICBcbiAgICBjb25zdCBBdXRoU3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VzZXJBY2Nlc3NUb2tlbicpO1xuICAgICBcbiAgICAgIGNvbnNvbGUubG9nKGlkKVxuICAgICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgJHtiYXNlVXJsfXVzZXJzLzEvZG9jdW1lbnRzLyR7aWR9YCwgeyBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IEF1dGhTdHIgfSB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgIHJldHVuXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgICB9KTtcbiAgfSxcblxuICBzYXZlRG9jdW1lbnRzOiAobmV3RG9jdW1lbnQpID0+IHtcbiAgICBjb25zdCBBdXRoU3RyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1VzZXJBY2Nlc3NUb2tlbicpO1xuICAgIHZhciBjb25maWcgPSB7XG4gICAgICBoZWFkZXJzOiB7ICdBdXRob3JpemF0aW9uJzogQXV0aFN0ciB9XG4gICAgfTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKG5ld0RvY3VtZW50LmlkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGUnKVxuICAgICAgICByZXR1cm4gYXhpb3MucHV0KGBodHRwOi8vbG9jYWxob3N0OjMwMDAvdXNlcnMvMS9kb2N1bWVudHMvJHtuZXdEb2N1bWVudC5pZH1gLCBuZXdEb2N1bWVudCwgY29uZmlnKVxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL3VzZXJzLzEvZG9jdW1lbnRzJywgbmV3RG9jdW1lbnQsIGNvbmZpZylcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC91dGlsL0FwaUNhbGxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==