webpackHotUpdate(0,{

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(20), RootInstanceProvider = __webpack_require__(21), ReactMount = __webpack_require__(14), React = __webpack_require__(3); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(273);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  RegisterUser: function RegisterUser(data) {
    return new Promise(function (resolve, reject) {
      _axios2.default.post('http://localhost:8080/api/v1/users/auth/register', data).then(function (res) {
        resolve(res);
      }).catch(function (error) {
        reject(error.response);
      });
    });
  },
  LoginUser: function LoginUser(data) {
    return new Promise(function (resolve, reject) {
      _axios2.default.post('http://localhost:8080/api/v1/users/auth/login', data).then(function (res) {
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
  authenticated: function authenticated() {
    console.log();
    var token = undefined.getToken();
    undefined.verifyToken(token).then(function (res) {
      if (res.data.message === 'Valid Token') {
        console.log('valid token');
        return true;
      } else {
        return false;
      }
    });
  },
  getToken: function getToken(token) {
    return localStorage.getItem('UserAccessToken');
  },
  verifyToken: function verifyToken(token) {
    var data = { token: token };
    return new Promise(function (resolve, reject) {
      _axios2.default.post('http://localhost:8080/api/v1/users/auth/verifyaccess', data).then(function (res) {
        resolve(res);
      }).catch(function (error) {
        reject(error.response);
      });
    });
  }
};

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(22); if (makeExportsHot(module, __webpack_require__(3))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ApiCalls.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(18)(module), __webpack_require__(5)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvdXRpbC9BcGlDYWxscy5qcz8zOWRjIl0sIm5hbWVzIjpbIlJlZ2lzdGVyVXNlciIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBvc3QiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlcnJvciIsInJlc3BvbnNlIiwiTG9naW5Vc2VyIiwic2F2ZVRva2VuIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwic2V0SXRlbSIsImF1dGhlbnRpY2F0ZWQiLCJjb25zb2xlIiwibG9nIiwiZ2V0VG9rZW4iLCJ2ZXJpZnlUb2tlbiIsIm1lc3NhZ2UiLCJnZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztrQkFFZTtBQUNiQSxnQkFBYyxzQkFBQ0MsSUFBRCxFQUFVO0FBQ3RCLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxzQkFBTUMsSUFBTixDQUFXLGtEQUFYLEVBQStESixJQUEvRCxFQUNDSyxJQURELENBQ00sVUFBQ0MsR0FBRCxFQUFTO0FBQ2JKLGdCQUFRSSxHQUFSO0FBQ0QsT0FIRCxFQUlDQyxLQUpELENBSU8sVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCTCxlQUFPSyxNQUFNQyxRQUFiO0FBQ0QsT0FORDtBQU9ELEtBUk0sQ0FBUDtBQVNELEdBWFk7QUFZYkMsYUFBVyxtQkFBQ1YsSUFBRCxFQUFVO0FBQ25CLFdBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0QyxzQkFBTUMsSUFBTixDQUFXLCtDQUFYLEVBQTRESixJQUE1RCxFQUNDSyxJQURELENBQ00sVUFBQ0MsR0FBRCxFQUFTO0FBQ2JKLGdCQUFRSSxHQUFSO0FBQ0QsT0FIRCxFQUlDQyxLQUpELENBSU8sVUFBQ0MsS0FBRCxFQUFXO0FBQ2hCTCxlQUFPSyxNQUFNQyxRQUFiO0FBQ0QsT0FORDtBQU9ELEtBUk0sQ0FBUDtBQVNELEdBdEJZO0FBdUJiRSxhQUFXLG1CQUFDQyxLQUFELEVBQVc7QUFDcEJDLGlCQUFhQyxVQUFiLENBQXdCLGlCQUF4QjtBQUNBRCxpQkFBYUUsT0FBYixDQUFxQixpQkFBckIsRUFBd0NILEtBQXhDO0FBQ0FDLGlCQUFhRSxPQUFiLENBQXFCLGVBQXJCLEVBQXNDLElBQXRDO0FBQ0QsR0EzQlk7QUE0QmJDLGlCQUFlLHlCQUFNO0FBQ25CQyxZQUFRQyxHQUFSO0FBQ0EsUUFBTU4sUUFBUSxVQUFLTyxRQUFMLEVBQWQ7QUFDQSxjQUFLQyxXQUFMLENBQWlCUixLQUFqQixFQUF3QlAsSUFBeEIsQ0FBNkIsVUFBQ0MsR0FBRCxFQUFTO0FBQ3BDLFVBQUlBLElBQUlOLElBQUosQ0FBU3FCLE9BQVQsS0FBcUIsYUFBekIsRUFBd0M7QUFDdENKLGdCQUFRQyxHQUFSLENBQVksYUFBWjtBQUNELGVBQU8sSUFBUDtBQUNBLE9BSEQsTUFHTztBQUNMLGVBQU8sS0FBUDtBQUNEO0FBQ0YsS0FQRDtBQVFELEdBdkNZO0FBd0NiQyxZQUFVLGtCQUFDUCxLQUFELEVBQVc7QUFDbkIsV0FBT0MsYUFBYVMsT0FBYixDQUFxQixpQkFBckIsQ0FBUDtBQUNELEdBMUNZO0FBMkNiRixlQUFhLHFCQUFDUixLQUFELEVBQVc7QUFDdEIsUUFBTVosT0FBTyxFQUFDWSxZQUFELEVBQWI7QUFDQSxXQUFPLElBQUlYLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDdEMsc0JBQU1DLElBQU4sQ0FBVyxzREFBWCxFQUFtRUosSUFBbkUsRUFDQ0ssSUFERCxDQUNNLFVBQUNDLEdBQUQsRUFBUztBQUNiSixnQkFBUUksR0FBUjtBQUNELE9BSEQsRUFJQ0MsS0FKRCxDQUlPLFVBQUNDLEtBQUQsRUFBVztBQUNoQkwsZUFBT0ssTUFBTUMsUUFBYjtBQUNELE9BTkQ7QUFPRCxLQVJNLENBQVA7QUFTRDtBQXREWSxDIiwiZmlsZSI6IjAuM2M0ZmEwYmM3NjY5OWEyYTE4OWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgUmVnaXN0ZXJVc2VyOiAoZGF0YSkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3YxL3VzZXJzL2F1dGgvcmVnaXN0ZXInLCBkYXRhKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IucmVzcG9uc2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIExvZ2luVXNlcjogKGRhdGEpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS91c2Vycy9hdXRoL2xvZ2luJywgZGF0YSlcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yLnJlc3BvbnNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICBzYXZlVG9rZW46ICh0b2tlbikgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdVc2VyQWNjZXNzVG9rZW4nKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnVXNlckFjY2Vzc1Rva2VuJywgdG9rZW4pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhdXRoZW50aWNhdGVkJywgdHJ1ZSk7XG4gIH0sXG4gIGF1dGhlbnRpY2F0ZWQ6ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygpXG4gICAgY29uc3QgdG9rZW4gPSB0aGlzLmdldFRva2VuKCk7XG4gICAgdGhpcy52ZXJpZnlUb2tlbih0b2tlbikudGhlbigocmVzKSA9PiB7XG4gICAgICBpZiAocmVzLmRhdGEubWVzc2FnZSA9PT0gJ1ZhbGlkIFRva2VuJykge1xuICAgICAgICBjb25zb2xlLmxvZygndmFsaWQgdG9rZW4nKTtcbiAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgZ2V0VG9rZW46ICh0b2tlbikgPT4ge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnVXNlckFjY2Vzc1Rva2VuJyk7XG4gIH0sXG4gIHZlcmlmeVRva2VuOiAodG9rZW4pID0+IHtcbiAgICBjb25zdCBkYXRhID0ge3Rva2VufTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS92MS91c2Vycy9hdXRoL3ZlcmlmeWFjY2VzcycsIGRhdGEpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIHJlamVjdChlcnJvci5yZXNwb25zZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NsaWVudC91dGlsL0FwaUNhbGxzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==