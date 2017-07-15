<template>
<div>
    <div class="content">
        <div class="find">
            <div class="bluehead">
                <span>发现</span>
            </div>
            <div class="find_T">
                <div class="find_T_left" @click="$router.push('/jifen')">
                    <p>积分商城</p>
                    <p>0元好物在这里！</p>
                    <div>
                        <img src="../imgs/others/m.jpg">
                    </div>
                </div>
                <div class="find_T_right">
                    <div class="ftr">
                        <div class="ftr_1">
                            <p>美味爆料</p>
                            <p>冰霜没事吃吃吃</p>
                        </div>
                        <div class="ftr_2">
                            <img src="../imgs/others/m.jpg">
                        </div>
                    </div>
                    <div class="ftr">
                        <div class="ftr_1">
                            <p class="tjyj">推荐有奖</p>
                            <p>冰霜没事吃吃吃</p>
                        </div>
                        <div class="ftr_2">
                            <img src="../imgs/others/m.jpg">
                        </div>
                    </div>
                </div>
            </div>
            <div class="find_M">
                <img src="../imgs/others/lingershiyuanhongbao.png">
            </div>
            <router-link tag="div" class="find_B1" :to='types[0].path'>
                <div class="find_B1_H">
                    <span>——</span>
                    <span>☞</span>
                    <span>美食热推</span>
                    <span>——</span>
                </div>
                <p>我的口味，我都懂得</p>
                <div class="foods_TJ">
                    <div>
                        <img src="../imgs/others/m.jpg">
                        <p>经典麦辣鸡腿汉堡</p>
                        <span>￥12</span>
                    </div>
                    <div>
                        <img src="../imgs/others/m.jpg">
                        <p>经典麦辣鸡腿汉堡</p>
                        <span>￥12</span>
                    </div>
                    <div>
                        <img src="../imgs/others/m.jpg">
                        <p>经典麦辣鸡腿汉堡</p>
                        <span>￥12</span>
                    </div>
                </div>
                <p>查看更多 ></p>
            </router-link>
            <router-link tag="div" class="find_B1" :to='types[1].path'>
                <div class="find_B1_H">
                    <span>——</span>
                    <span>☞</span>
                    <span>天天特价</span>
                    <span>——</span>
                </div>
                <p>我的口味，我都懂得</p>
                <div class="foods_TJ">
                    <div>
                        <img src="../imgs/others/m.jpg">
                        <p>经典麦辣鸡腿汉堡</p>
                        <span>￥12</span>
                    </div>

                    <div>
                        <img src="../imgs/others/m.jpg">
                        <p>经典麦辣鸡腿汉堡</p>
                        <span>￥12</span>
                    </div>
                    <div>
                        <img src="../imgs/others/m.jpg">
                        <p>经典麦辣鸡腿汉堡</p>
                        <span>￥12</span>
                    </div>
                </div>
                <p>查看更多 ></p>
            </router-link>
            <router-link tag="div" class="find_B1" :to='types[2].path'>
                <div class="find_B1_H">
                    <span>——</span>
                    <span>☞</span>
                    <span>美食热推</span>
                    <span>——</span>
                </div>
                <p>我的口味，我都懂得</p>
                <div class="foods_TJ">
                    <div>
                        <img src="../imgs/others/m.jpg">
                        <p>经典麦辣鸡腿汉堡</p>
                        <span>￥12</span>
                    </div>
                    <div>
                        <img src="../imgs/others/m.jpg">
                        <p>经典麦辣鸡腿汉堡</p>
                        <span>￥12</span>
                    </div>
                    <div>
                        <img src="../imgs/others/m.jpg">
                        <p>经典麦辣鸡腿汉堡</p>
                        <span>￥12</span>
                    </div>
                </div>
                <p>查看更多 ></p>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
    <foot-nav></foot-nav>
</div>
</template>

<script>
import footNav from '../components/Footer_nav'
export default {
    name: 'Find',
    data: function() {
        return {
            types: [{
                path: '/msrt'
            }, {
                path: '/tttj'
            }, {
                path: '/shopDetail'
            }]
        }
    },
    methods: {},
    components: {
        footNav
    }
}
</script>

<style scoped>
.find {
    background-color: #f5f5f5;
}

.find_header {
    height: 3rem;
    line-height: 3rem;
    color: #fff;
    background-color: #0085ff;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 600;
}

.find_header span:nth-child(1) {
    float: left;
    padding-left: 1rem;
}

.find_T {
    background-color: #fff;
}

.find_T_left {
    float: left;
    width: 50%;
    border-right: 1px solid #f1f1f1;
    padding: 1rem;
    box-sizing: border-box;
    line-height: 1.8rem;
}

.find_T_left p:nth-child(1) {
    font-size: 1.5rem;
    color: #f60;
}

.find_T_left p:nth-child(2) {
    font-size: .8rem;
    color: #666;
}

.find_T_left img {
    width: 50%;
    display: block;
    margin: 0 auto;
}

.find_T_right {
    width: 50%;
    float: left;
}

.ftr {
    box-sizing: border-box;
    padding: 1rem;
    line-height: 1.8rem;
}

.ftr:nth-child(1) {
    border-bottom: 1px solid #f1f1f1;
}

.ftr .ftr_1 {
    width: 70%;
    float: left;
}

.ftr .ftr_1 p:nth-child(1) {
    color: #f60;
    font-size: 1.2rem;
}

.ftr:nth-child(2) .ftr_1 p:nth-child(1) {
    color: skyblue;
}

.ftr .ftr_1 p:nth-child(2) {
    font-size: .9rem;
    color: #999;
}

.ftr .ftr_2 {
    width: 30%;
    float: left;
}

.ftr .ftr_2 img {
    width: 100%;
}


/*领取二十元红包*/

.find_M {
    margin-top: 1rem;
}

.find_M img {
    width: 100%;
}


/*美食推荐*/

.find_B1 {
    margin-top: 1rem;
    background-color: #fff;
}

.find_B1 .find_B1_H {
    text-align: center;
    margin-top: 1rem;
}

.find_B1 .find_B1_H span {
    font-size: 1.2rem;
    display: inline-block;
    line-height: 3rem;
    font-weight: bold;
}

.find_B1>p {
    font-size: .9rem;
    color: #666;
    text-align: center;
}

.foods_TJ {
    margin-top: 1rem;
}

.foods_TJ>div {
    width: 33.3%;
    float: left;
    line-height: 1.5rem;
}

.foods_TJ>div img {
    width: 90%;
    display: block;
    margin: 0 auto;
}

.foods_TJ>div p {
    color: #666;
    font-size: .9rem;
}

.foods_TJ>div span {
    color: #f60;
}

.find_B1>p:last-child {
    height: 3rem;
    line-height: 3rem;
    font-size: 1rem;
}


/*清除浮动*/

.find_T:after,
.ftr:after,
.foods_TJ:after {
    content: "";
    display: block;
    clear: both;
}
</style>