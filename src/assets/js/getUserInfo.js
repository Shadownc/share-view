const hostApi = process.env.NODE_ENV == 'development' ? '/api' : ''
function getUserInfo() {
    return new Promise((resolve, rejects) => {
        this.$http.get(`${hostApi}/user/getInfo`).then(res => {
            if (res.data.code == '00') {
                resolve(res.data.userInfo)
            } else {
                resolve(null)
            }
        }, res => {
            rejects(res)
        });
    })
}

export { getUserInfo }