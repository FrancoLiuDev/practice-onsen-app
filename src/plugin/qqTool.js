import axios from 'axios'
/**
 * 检查客户端是否安装QQ
 */
export const hasQQApp = () => {
    return new Promise((resolve, reject) => {
        QQSDK.checkClientInstalled(resolve, err => reject('no_qq'), {
            client: QQSDK.ClientType.QQ
        })
    })
}

/**
 * qq登入
 */
export const qqSsologin = () => {
    return new Promise((resolve, reject) => {
        QQSDK.ssoLogin(resolve, reject, {
            client: QQSDK.ClientType.QQ
        })
    })
}

export const getQqUser = (qqInfo, QQ_APP_ID) => {
    let url =
        'https://graph.qq.com/user/get_user_info?access_token=' +
        qqInfo.access_token +
        '&oauth_consumer_key=' +
        QQ_APP_ID +
        '&openid=' +
        qqInfo.userid

    return new Promise((resolve, reject) => {
        axios
            .get(url)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject('getQqUserInfo_err')
            })
    })
}
