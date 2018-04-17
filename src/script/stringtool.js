class StringUtil {
    static cut(str, index, end) {
        if (str.length == 0) return str
        if (str.length < (index + end)) return str
        return str.substring(index, str.length - end)
    }
    static equalLength(str, lenth) {
        return str.length - lenth
    }
    static equalLenRange(str, from, end) {
        if (str.length - from < 0) return (str.length - from)
        if (str.length - end > 0) return (str.length - end)
        return 0
    }
}

export default StringUtil