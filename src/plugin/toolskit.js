const crypto = require('crypto')
function md5(string) {
    const md5 = crypto.createHash('md5')
    return md5.update(string, 'utf8').digest('hex')
}
exports.md5 = md5

/**
 * 加密
 * @memberof  ToolsKit
 * @param  {String} str   要加密的字串
 * @param  {String} dsKey key，自己定一個
 * @return {String}       加密結果
 */
function getEncrypt(str, dsKey) {
    const cipher = crypto.createCipheriv(
        'des-ede3',
        new Buffer(dsKey),
        new Buffer(0)
    )
    let encrypted = cipher.update(str, 'utf8', 'base64')
    encrypted += cipher.final('base64')
    return encrypted
}
exports.getEncrypt = getEncrypt
