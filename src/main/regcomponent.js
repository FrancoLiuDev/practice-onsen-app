import Vue from 'vue'
import AppIcon from '@Components/AppIcon.vue'
import StateInput from '@Components/input/StateInputBox.vue'
import StateTitleInputBox from '@Components/input/StateTitleInputBox.vue'
import NaviToolBar from '@Components/toolbar/NaviToolBar'
import SlideUp from '@Components/SlideUpDown'
import NaviToolBarWhite from '@Components/toolbar/NaviToolBarWhite'
import SignAgreement from '@Components/inner/SignAgreement'
import OneTimePwdDisc from '@Components/inner/OneTimePwdDisc'
import SelectAreaTable from '@Components/inner/SelectAreaTable'
import SelectDayTable from '@Components/inner/SelectDayTable'
import OptionPanel from '@Components/option/OptionPanel'

Vue.component('app-icon', AppIcon)
Vue.component('state-input', StateInput)
Vue.component('state-title-input', StateTitleInputBox)
Vue.component('navi-toolbar', NaviToolBar)
Vue.component('navi-toolbar-w', NaviToolBarWhite)
Vue.component('slide-up', SlideUp)
Vue.component('otp-discription', OneTimePwdDisc)
Vue.component('sign-agreement', SignAgreement)
Vue.component('select-date', SelectDayTable)
Vue.component('select-area', SelectAreaTable)
Vue.component('option-panel', OptionPanel)
