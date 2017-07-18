<template>
<div>
    <!--顶部:注册-->
    <div class="header">
        <span @click="$router.back(-1)">
                <img src="../../imgs/back.png" /> </span>
        <strong>注册</strong>
        <router-link tag="b" to="/login">密码登录</router-link>
    </div>
    <!--内容部分-->
    <div class="register-content">
        <!--手机号-->
        <div class="phoneNumber register-input">
            <input type="text" placeholder="手机号" v-model="phoneNumber" />
        </div>
        <!--密码-->
        <div class=" password register-input ">
            <input type="password " placeholder="密码 " v-model="password" />
        </div>
        <!--温馨提示-->
        <p>温馨提示：未注册饿了么账号的手机号，请先注册，且代表您已同意《用户服务协议》</p>
        <!--注册按钮-->
        <div class="registerBtn-box ">
            <button tag="button" @click="checkUser">注册</button>
        </div>
        <!--错误信息提示-->

        <reminder :flag='flag'></reminder>
    </div>
</div>
</template>
<script>
import remind from '../../components/reminder'
export default {
    data() {
        return {
            phoneNumber: "",
            password: "",
            flag: false,
            userInfo: {},
            userInfoArr: [],
            path: ''
        }
    },
    methods: {
        //验证手机号
        checkPhone: function() {
            if (!(/^1[34578]\d{9}$/.test(this.phoneNumber))) {
                this.flag = true;
                return false;

            } else {
                this.flag = false;

            }

        },
        //验证密码
        checkPassword: function() {
            if (!(/^[0-9a-zA-Z]{0,18}$/.test(this.phonePassword))) {
                this.flag = true;
                return false;
                // console.log('passfalse');
            } else {
                this.flag = false;

            }

        },
        //点击注册按钮时，验证手机号和密码必须都合法
        checkUser: function() {

            if ((this.checkPhone() == false || this.checkPassword() == false)) {
                return false;

            } else {
                var info = {};
                info.name = this.phoneNumber;
                info.tel = this.phoneNumber;
                info.pwd = this.password;

                // var res = this.$store.dispatch('checkUser', info);
                var userInfo = this.$store.getters.getUserInfo;
                var res = userInfo[info.tel];
                console.log('res------' + res);
                if (res == undefined) {
                    this.$store.dispatch('setUserInfo', info);
                    console.log('注册成功');
                    this.$store.dispatch('setNowUser', info);
                    this.$router.push('/mine');
                } else {
                    alert('用户已经存才')
                }
            }
        },
    },
    components: {
        reminder: remind
    },
    created() {}

}
</script>
<style scope>
@import '../../assets/css/register.css'
</style>


