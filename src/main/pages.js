import RegisterView from '@/view/RegisterView'
import AppHome from '@/App'
import LoginView from '@View/LoginView'
import MainView from '@View/MainView'
import AppMoreView from '@View/AppMoreView'
import ProfileView from '@View/ProfileView'
import SetAddrView from '@View/SetAddrView'
import ApiTestView from '@View/ApiTestView'
import SettingView from '@View/SettingView'

export default {
    AppHome: {
        view: AppHome,
        pageProp: {
            displyName: 'Home',
            id: '#app',
            pageListen: []
        }
    },
    RegisterView: {
        view: RegisterView,
        pageProp: {
            displyName: 'STR_REGISTER',
            id: '#register-page',
            pageListen: [],
            type: 'sign'
        }
    },
    RegisterBindView: {
        view: RegisterView,
        pageProp: {
            displyName: 'STR_REGISTER_BIND',
            id: '#register-page',
            pageListen: [],
            type: 'bind'
        }
    },
    ResetPwdView: {
        view: RegisterView,
        pageProp: {
            displyName: 'STR_FORGETPWD',
            id: '#register-page',
            pageListen: [],
            type: 'password'
        }
    },
    LoginView: {
        view: LoginView,
        pageProp: {
            displyName: 'STR_LOGIN',
            id: '#login-view',
            pageListen: []
        }
    },
    MainView: {
        view: MainView,
        pageProp: {
            displyName: 'STR_ME_PAGE',
            id: '#main-view',
            pageListen: []
        }
    },
    AppMoreView: {
        view: AppMoreView,
        pageProp: {
            displyName: 'STR_PAGE_MORE',
            id: '#app-more-page',
            pageListen: []
        }
    },
    ProfileView: {
        view: ProfileView,
        pageProp: {
            displyName: 'STR_MY_PROFILE',
            id: '#profile-page',
            pageListen: [],
            pageListen: ['setLocation']
        }
    },
    SetAddrView: {
        view: SetAddrView,
        pageProp: {
            displyName: 'STR_ADDR',
            id: '#set-addr-page',
            pageListen: []
        }
    },
    ApiTestView: {
        view: ApiTestView,
        pageProp: {
            displyName: 'API_TEST',
            id: '#api-test-page',
            pageListen: []
        }
    },
    SettingView: {
        view: SettingView,
        pageProp: {
            displyName: 'SETTING',
            id: '#app-setting-page',
            pageListen: []
        }
    }
}