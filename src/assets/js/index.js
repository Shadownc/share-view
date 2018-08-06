import { getUserInfo } from './getUserInfo'
import Vue from '../../../node_modules/vue';

const config = {};
config.install = (Vue, option) => {
    Vue.prototype.$getUserInfo = getUserInfo
}

export { config }