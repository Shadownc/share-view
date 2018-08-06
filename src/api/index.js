import Vue from 'vue'

const vm = new Vue();
const hostApi = process.env.NODE_ENV == 'development' ? '/api' : ''

const Api = {
    getUserInfo() {
        return vm.$http.get(`${hostApi}/user/getInfo`)
    },
    login(params) {
        return vm.$http.post(`${hostApi}/user/login`, params)
    },
    logOut() {
        return vm.$http.get(`${hostApi}/user/logout`)
    }
}

export { Api }