//qq 資訊
export default {
    namespaced: true,
    state: {
        loginQQState: 'none', //qq登入狀態 none post err
        qqErrCode: 0, //qq錯誤 0 1沒有安裝qq 2 qq登入失敗
        qqSsoLoginErr: null, //qq登入失敗訊息
        qqSsoLoginInfo: null //qq登入訊息
    }
}
