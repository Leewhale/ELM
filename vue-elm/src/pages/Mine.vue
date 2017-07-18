<template>
    <div>
        <div class="content">
            <div class="mine-head">
                <h3 class="bluehead">我的</h3>
                <div>
                    <div class="head-icon">
                        <img src="../assets/logo.png" alt="">
                    </div>
                    <div class="head-info">
                        <p class="name">{{userData.username}}</p>
                        <!--<p class="tel"><i class="iconfont" style="color:#fff; font-size:1.1rem;">&#xe600;</i>{{userData.mobile.substr(0,3)}}****{{userData.mobile.substr(-4,4)}}</p>-->
                         <p class="tel"><i class="iconfont" style="color:#fff; font-size:1.1rem;">&#xe600;</i>183****8416</p>
                    </div>
                    <div class="iconfont more"  @click="$router.push('/login')">&#xe6b0;</div>
                </div>
            </div>
            <div class="mine-mid">
                <div>
                    <p><span class="mine-mid-yh">{{userData.balance}}</span>个</p>
                    <p>优惠</p>
                </div>
                <div @click="$router.push('/jifen')">
                    <p><span class="mine-mid-jf">{{userData.point}}</span>分</p>
                    <p>积分</p>
                </div>
            </div>
            <div class="mine-mine">
                <div class="mine-mine-bar">
                    <i class="iconfont" style="color:#109eff">&#xe662;</i>
                    <span>我的订单</span>
                    <div class="btn iconfont">&#xe6b0;</div>
                </div>
                <div class="mine-mine-bar">
                    <i class="iconfont" style="color:#ff7b4d" >&#xe602;</i>
                    <span>积分商城</span>
                    <div class="btn iconfont">&#xe6b0;</div>
                </div>
                <div class="mine-mine-bar">
                    <i class="iconfont" style="color:#f4ea2a">&#xe601;</i>
                    <span>饿了么会员卡</span>
                    <div class="btn iconfont">&#xe6b0;</div>
                </div>
            </div>
            <div class="mine-mine">
                <div class="mine-mine-bar">
                    <i class="iconfont" style="color:#d4237a">&#xe629;</i>
                    <span>服务中心</span>
                    <div class="btn iconfont">&#xe6b0;</div>
                </div>
                <div class="mine-mine-bar">
                    <i class="iconfont" style="color:#f34442">&#xe62f;</i>
                    <span>下载饿了么APP</span>
                    <div class="btn iconfont">&#xe6b0;</div>
                </div>
            </div>
        </div>
        <foot-nav></foot-nav>
    </div>
    
</template>

<script>
import footNav from '../components/Footer_nav'
export default {
    name: 'Mine',
    data: function() {	
        return {
            userData: {}
        }
    },
    methods: {
        getUserData(){
            var $this = this;
            this.$http.get('../../static/userData.json').then(function(res){
                $this.userData = res.data;
            })
        }
    },
    components: {
        footNav
    },
    created() {
        this.getUserData()
    }

}
</script>

<style>
@font-face {
  font-family: 'iconfont';  /* project id 350955 */
  src: url('//at.alicdn.com/t/font_g9c808k2pisy8pvi.eot');
  src: url('//at.alicdn.com/t/font_g9c808k2pisy8pvi.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_g9c808k2pisy8pvi.woff') format('woff'),
  url('//at.alicdn.com/t/font_g9c808k2pisy8pvi.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_g9c808k2pisy8pvi.svg#iconfont') format('svg');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
.mine-head{
    width: 100%;
    height: 10.5rem;
    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
    background-image: linear-gradient(90deg,#0af,#0085ff);
}
.bluehead{
    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
    background-image: linear-gradient(90deg,#0af,#0085ff);
    height: 3rem;
    color: #fff;
    text-align: center;
    line-height: 3rem;
    font-size: 1.2rem;
}
.mine-head>div{
    height: 7.5rem;
    display: flex;
}
.mine-head>div .head-icon{
    width: 30%;
    height: 100%;
}
.mine-head>div .head-icon img{
    width: 5rem;
    background: #fff;
    border-radius: 50%;
    margin-top: 1rem;
    margin-left: 1rem;
}
.mine-head>div .head-info{
    width: 70%;
    height: 100%;
}
.mine-head>div .head-info p{
    padding-left: 1rem;
}
.mine-head>div .head-info .name{
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    font-size: 1.3rem;
    color: #fff;
    font-weight: 700;
    margin-top: 1rem;
}
.mine-head>div .head-info .tel{
    font-size: 1rem;
    color: #fff;
}
.mine-head .more{
    width: 17%;
    height: 100%;
    line-height: 7.5rem;
    text-align: center;
    color: #fff;
}
.mine-mid{
    display: flex;
    width:100%;
    height: 7rem;
    background: #fff;
}
.mine-mid>div{
    width: 50%;
    height: 100%;
    padding-top: 1.1rem;
    box-sizing: border-box;
}
.mine-mid>div:first-child{
    border-right: 1px solid #f5f5f5;
}
.mine-mid>div p{
    font-size: 1rem;
    color: grey;
    text-align: center;
}
.mine-mid .mine-mid-yh{
    color: rgb(255, 95, 62);
    font-size: 2rem;
    font-weight: 700;
}
.mine-mid .mine-mid-jf{
    color: rgb(106, 194, 11);
    font-size: 2rem;
    font-weight: 700;
}
.mine-mine{
    width: 100%;
    margin-top: 1rem;
}
.mine-mine-bar{
    background: #fff;
    border-bottom: 1px solid #f5f5f5;
    height: 3rem;
    line-height: 3rem;
    box-sizing: border-box;
    padding-left: 1rem;
    color: #333;
    font-size: 1.1rem;
}
.mine-mine-bar .btn{
    float: right;
    width: 4rem;
    height: 100%;
    text-align: center;
    color: #ccc;
}
.mine-mine-bar i{
    font-size: 1.2rem;
}
</style>