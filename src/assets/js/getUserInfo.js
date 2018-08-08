const hostApi = process.env.NODE_ENV == 'development' ? '/api' : '';
let userInfo;

function getUserInfo() {
    return new Promise((resolve, rejects) => {
        this.$http.get(`${hostApi}/user/getInfo`).then(res => {
            if (res.data.code == '00') {
                userInfo = res.data.userInfo;
                resolve(res.data.userInfo)
            } else {
                resolve(null)
            }
        }, res => {
            rejects(res)
        });
    })
}
function getUserData() {
    return userInfo;
}

export { getUserInfo, getUserData }