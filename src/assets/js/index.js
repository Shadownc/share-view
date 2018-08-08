import { getUserInfo, getUserData } from './getUserInfo'

const config = {};
config.install = (Vue, option) => {
    Vue.prototype.$getUserInfo = getUserInfo;
    Vue.prototype.$getUserData = getUserData;
}

export { config }