import validator from '@Script/validator'
import stringUtil from '@Script/stringtool'

export default {
    methods: {
        filterMobile(input) {
            var out = input
            var exLen = stringUtil.equalLength(input, 11)
            var onlyNum = validator.isDigiOnly(input)

            if (exLen > 0) {
                out = stringUtil.cut(out, 0, exLen)
            }

            if (!onlyNum) {
                var trimmedString = stringUtil.cut(out, 0, 1)
                out = trimmedString
            }
            return out
        },
        filterPassword(input) {
            var out = input
            var exLen = stringUtil.equalLength(input, 8)

            if (exLen > 0) {
                out = stringUtil.cut(out, 0, exLen)
            }
            return out
        },

    }
}