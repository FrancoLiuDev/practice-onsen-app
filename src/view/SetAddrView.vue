<template>
    <v-ons-page id="set-addr-page">
        <navi-toolbar-w :title="$t(pageProp.displyName)" @evtBack="onBack"></navi-toolbar-w>
        <div class="tb marg-top">
            <state-title-input tagid='adr_input_contry' clickble @onInputClick="showContryTable=true" :title="$t('STR_CONTRY')" :hint="$t('STR_CONTRY')" :value.sync="viewmodel.contry"></state-title-input>
        </div>
        <div class="tb">
            <state-title-input tagid='adr_input_locat' clickble @onInputClick="showAddrTable = true" :title="$t('STR_LIVING_LOCATION')" :hint="$t('STR_LIVING_LOCATION')+ $t('STR_LOCATION_FORMAT')" :value.sync="location"></state-title-input>
        </div>

        <div class="tb">
            <state-title-input tagid='adr_input_num' :filter="onFilterNum" vuetype="text" :title="$t('STR_LIVING_LOCATION_NO')" :hint="$t('STR_LIVING_LOCATION_NO')" :value.sync="viewmodel.number"></state-title-input>
        </div>

        <div id="adr_confirm" class="t-center">
            <v-ons-button class="bumit-bn" @click="onSave">{{$t('STR_SAVE')}}</v-ons-button>
        </div>

        <slide-up class="shadow" :active="showAddrTable" :duration="600">
            <select-area @onMakeDecision="onAddrDecision"></select-area>
        </slide-up>

        <slide-up class="shadow" :active="showContryTable" :duration="600">
            <option-panel @onMakeDecision="onContryDecision" :title="$t('STR_CONTRY')" :options="contrys"></option-panel>
        </slide-up>

    </v-ons-page>
</template>

<script>
import pageControl from '@Contrioller/page/pageControl'
import validator from '@Script/validator'
import stringUtil from '@Script/stringtool'

export default {
    name: 'RegisterPage',
    mixins: [pageControl],
    components: {},

    data() {
        return {
            viewmodel: {
                contry: '',
                number: ''
            },
            inpLocation: null,
            showAddrTable: false,
            showContryTable: false,
            contrys: [
                {
                    id: 1,
                    name: this.$t('STR_CN')
                }
            ]
        }
    },
    mounted() {
        var self = this
    },
    computed: {
        location: {
            get: function() {
                if (this.inpLocation == null) return ''
                return this.inpLocation.province.name + ' ' + this.inpLocation.city.name + ' ' + this.inpLocation.area.name
            },
            set: function(newValue) {}
        }
    },
    methods: {
        pagedInit() {},
        onBack() {
            setTimeout(() => {
                this.navigateBack({})
            }, 100)
        },
        onAddrDecision(result) {
            this.showAddrTable = false
            if (result.decision == 'confirm') {
                this.inpLocation = result.data
            }
        },
        onContryDecision(result) {
            if (result.decision == 'confirm') {
                this.viewmodel.contry = result.data.name
            }
            this.showContryTable = false
        },
        onFilterNum(input) {
            var out = input
            var exLen = stringUtil.equalLength(input, 6)
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
        onSave() {
            var self = this
            this.navigateBack({
                tag: 'setLocation',
                from: self,
                data: self.viewmodel
            })
        }
    }
}
</script>

<style lang="less">
@import 'global.less';
#set-addr-page {
    .page__background {
        &:extend(.form-bg-w);
    }
    .page__content {
        top: 60px;
    }
    #adr_confirm {
        position: absolute;
        bottom: 0px;
        right: 0px;
        left: 0px;
        height: 40px;
        margin: 15px;
        .bumit-bn {
            width: 100%;
            height: 100%;
        }
    }
    .tb {
        position: relative;
        margin: 10px 15px 0px 15px;
        background-color: white;
        width: auto;
    }
    .marg-top {
        margin-top: 15px;
    }
}
</style>
