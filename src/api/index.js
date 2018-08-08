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
    },
    getList(params) {
        return vm.$http.post(`${hostApi}/user/list/getData`, params)
    },
    delUrl(params) {
        return vm.$http.post(`${hostApi}/user/list/del`, params)
    }
}

export { Api }