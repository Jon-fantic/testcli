/*************************************
* http plus axios
*
* example:
*
* this.axios.get('/test').then((response) => {
*   console.log(response.data)
* }).catch((err) => console.log(err))
*
* post Content-Type application/json
*
* this.axios.post('/user', {'xxx': 123123, 'bbbb': 333333})
* .then((response) => {
*   console.log(this)
* })
* .catch(function (error) {
*   console.log(error)
* })
*
* postFrom Content-Type application/x-www-form-urlencoded
*
* this.axios.postFrom('/user', {'xxx': 123123, 'bbbb': 333333})
* .then((response) => {
*   console.log(this.test)
* })
* .catch(function (error) {
*   console.log(error)
* })
**************************************/
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
// axios.defaults.baseURL = '//' + document.domain + ':3000'
// axios.defaults.baseURL = 'http://www.mock.io:3000'
// axios.default.baseURL = 'http://192.168.26.50:3000'
// axios.defaults.baseURL = 'http://localhost:3000'
// axios.defaults.baseURL = 'http://192.168.2.1:3000'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// axios.defaults.headers.timeout = 6

