<template>
    <div>
        <!--顶部:注册-->
        <div class="header">
            <span  @click="$router.back(-1)">
                <img src="../../imgs/back.png" /> </span>
            <strong>登录</strong>
            <router-link tag="b" to="/regist">用户注册</router-link>
        </div>
        <!--内容部分-->
        <div class="register-content">
            <!--手机号-->
            <div class="phoneNumber register-input">
                <input type="text" placeholder="手机号" v-model="tel" />
            </div>
            <!--密码-->
            <div class="password register-input">
                <input type="text" placeholder="密码" v-model="passwo" />
            </div>
            <!--温馨提示-->
            <p>温馨提示：未注册饿了么账号的手机号，请先注册，且代表您已同意《用户服务协议》</p>
            <!--注册按钮-->
            <div class="registerBtn-box">
                <button @click="login" to="/home">登录</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dat: localStorage.userInfoArr,
            tel: '',
            passwo: '',
            path: ''
        }
    }, mounted() {
        console.log(this.dat);
    },
    methods: {
        //点击登录
        login: function () {
            this.checkIs();
        },
        //验证用户输入的信息是否存在
        checkIs: function (tel, passwo) {
            // this.dat.map(function (item) {
            //     if ((item.phone == tel) || (item.passw == passwo)) {
            //         console.log('pipei');
            //         this.$router.push({ path: '/home', params: {} });
            //     }
            // })
            // console.log(this.dat);

        }
    }
}
</script>
<style scope>
@import '../../assets/css/register.css'
</style>


