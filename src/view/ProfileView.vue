<template>
    <v-ons-page id="profile-page">
        <navi-toolbar-w :title="$t(pageProp.displyName)" @evtBack="onBack" :icons="icons"></navi-toolbar-w>
        <div class="tb marg-top">
            <state-title-input :edit="edit" :filter="filterMobile" tagid='reg_input_number' vuetype="text" :title="$t('STR_MOBILE')" :hint="$t('STR_MOBILE')" :value.sync="profile.mobile"></state-title-input>
        </div>
        <div class="tb">
            <state-title-input :edit="edit" :regLimit="{lenthMax:6}" tagid='prf_input_name' vuetype="text" :title="$t('STR_FULLNAME')" :hint="$t('STR_FULLNAME')" :value.sync="profile.name"></state-title-input>
        </div>
        <div class="tb">
            <state-title-input :edit="edit" tagid='prf_input_gender' ref="mInpGender" clickble @onInputClick="onGenderSelect" vuetype="text" :title="$t('STR_GENDER')" :hint="$t('STR_GENDER')" :value.sync="diaplyGender"></state-title-input>
        </div>
        <div class="tb">
            <state-title-input :edit="edit" tagid='prf_input_nickname' vuetype="text" :title="$t('STR_NICKNAME')" :hint="$t('STR_NICKNAME')" :value.sync="profile.nickname"></state-title-input>
        </div>
        <div class="tb">
            <state-title-input clickble @onInputClick="onAddrClick" tagid='prf_input_addr' vuetype="text" :title="$t('STR_ADDR')" :hint="$t('STR_ADDR')"></state-title-input>
        </div>
        <slide-up class="shadow" :active="showGenderTable" :duration="600">
            <option-panel @onMakeDecision="onGenderDecision" :title="$t('STR_GENDER')" :options="options"></option-panel>
        </slide-up>
    </v-ons-page>
</template>

<script>
import pageControl from '@Contrioller/page/pageControl'
import Profile from '@Models/member/profile'
import appDelegate from '@/delegate/appDelegate'
import mockDelegate from '@/delegate/mockDelegate'
import inputFilter from '@Script/inputFilter'

export default {
    name: 'RegisterPage',
    mixins: [pageControl, appDelegate, mockDelegate, inputFilter],
    components: {},

    data() {
        return {
            modelName: '',
            edit: false,
            profile: Profile.build(),
            showGenderTable: false,
            apiLoaded: false,
            options: [
                {
                    id: 1,
                    name: this.$t('STR_SEX_MALE')
                },
                {
                    id: 2,
                    name: this.$t('STR_SEX_FEMALE')
                }
            ],
            icons: {
                cmd1: {
                    iconId: 'icon-form-edit',
                    callback: this.onCmd
                }
            }
        }
    },
    watch: {
        'profile.mobile': function(val) {
            console.log('mobile', val)
        }
    },
    mounted() {
        this.fectch()
    },
    computed: {
        mobileVal() {
            return this.profile.mobile
        },
        submitName() {
            if (this.registerStep == 0) {
                return this.$t('STR_NEXT_STEP')
            } else if (this.registerStep == 1) {
                return this.$t('STR_DO_COMPLETE')
            }
        },
        diaplyGender: {
            get: function() {
                if (this.profile.gender == 1) {
                    return this.$t('STR_SEX_MALE')
                } else if (this.profile.gender == 2) {
                    return this.$t('STR_SEX_FEMALE')
                } else {
                    return ''
                }
            },
            set: function(newValue) {
                console.log('newValue', newValue)
                if (newValue == this.$t('STR_SEX_MALE')) {
                    this.profile.gender = '1'
                } else if (newValue == this.$t('STR_SEX_FEMALE')) {
                    this.profile.gender = '2'
                }
            }
        }
    },
    methods: {
        fectch() {
            var profile = this.userProfile
            if (profile != null) {
                console.log('profile', profile)
                this.profile.loadfromApi(profile)
            } else {
            }
            this.apiLoaded = true
        },
        pagedInit() {},
        onPageResult(result) {
            console.log('onPageResult', result)
        },
        onBack() {
            setTimeout(() => {
                this.navigateBack({
                    tag: 'my tag',
                    from: self,
                    mydata: 'my data'
                })
            }, 100)
        },
        onCmd() {
            this.edit = true
            this.icons.cmd1 = {
                iconId: 'icon-edit-save',
                callback: this.onCmdSave
            }
        },
        onCmdSave() {
            console.log('save')
            this.loading = true
            this.icons.cmd1 = {
                iconId: 'icon-form-edit',
                callback: this.onCmd
            }

            this.userProfile = this.profile.pack()
            setTimeout(() => {
                this.loading = false
            }, 2000)
        },
        onAddrClick() {
            this.navigatePage('SetAddrView', {})
        },
        onGenderSelect() {
            this.showGenderTable = true
        },
        onGenderDecision(result) {
            console.log('onGenderDecision', result)
            if (result.decision == 'confirm') {
                var text = result.data.name
                this.$refs.mInpGender.setTextValue(text.toString())
            }
            this.showGenderTable = false
        }
    }
}
</script>

<style lang="less">
@import 'global.less';
#profile-page {
    .page__background {
        &:extend(.form-bg-w);
    }
    .page__content {
        padding-top: 60px;
    }
    .tb {
        position: relative;
        margin: 10px 15px 0px 15px;
        background-color: white;
        width: auto;
    }

    .ud-line {
        width: auto;
        border-bottom: 2px solid @fofadon-pale-color;
    }
    .marg-top {
        margin-top: 15px;
    }
}
</style>
