import Vue from 'vue'

const vm = new Vue();
const hostApi = process.env.NODE_ENV == 'development' ? '/api' : ''

const Api = {
    getUserInfo() {
        return vm.$http.get(`${hostApi}/user/getInfo`)
    }
}

export { Api }