<template>
    <div>
        <div class="content">
            <!--顶部:订单-->
            <h3 class="bluehead">订单</h3>
            <!--订单内容项-->
            <div class="order-list">
    
                <!-- <dl> -->
                <router-link tag="dl" to="/search">
                    <dt>
                        <img src="../assets/logo.png" />
                    </dt>
                    <dd>
                        <div class="top-div">
                            <div class="line-one">
                                <p>
                                    <span>第1佳大鸡排（三旗百汇）</span>
                                    <span>></span>
                                </p>
                                <p>订单已完成</p>
                            </div>
                            <p>2017-07-09&nbsp;10:46</p>
                        </div>
                        <div class="bot-div">
                            <span>盐酥杏鲍菇等2件商品</span>
                            <span>￥21.00</span>
                        </div>
                    </dd>
                    <!-- </dl> -->
                </router-link>
    
            </div>
    
        </div>
        <foot-nav></foot-nav>
    </div>
</template>

<script>
import footNav from '../components/Footer_nav'
export default {
    name: 'Order',
    data: function () {
        return {}
    },
    methods: {},
    components: {
        footNav
    }
}
</script>

<style scoped>
.order-list {
    background-color: #fff;
}

.order-list dl {
    border-bottom: 0.7rem solid #f5f5f5;
    padding: 1rem 0.8rem 0 1.4rem;
    display: flex;
    justify-content: space-between;
}

.order-list dl:first-of-type {
    border-top: 0.7rem solid #f5f5f5;
}

.order-list dl dt {
    width: 2.1rem;
    height: 2.1rem;
    margin-right: 1rem;
}

.order-list dl dt img {
    width: 100%;
}

.order-list dl dd {
    width: 100%;
    line-height: 1.5rem;
    color: #666;
}

.order-list dl dd .top-div {
    border-bottom: 0.01rem solid #f5f5f5;
}

.order-list dl dd .top-div .line-one {
    display: flex;
    justify-content: space-between;
    font-size: 1.1rem;
}

.order-list dl dd .top-div .line-one p {
    display: flex;
    justify-content: space-between;
}

.order-list dl dd .top-div .line-one p span:first-of-type {
    width: 85%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.order-list dl dd .top-div .line-one p:last-of-type {
    font-size: 0.4rem;
}

.order-list dl dd .top-div .line-one p span:last-of-type {
    color: #999;
}

.order-list dl dd .top-div>p {
    font-size: 0.4rem;
    color: #969696;
    margin-bottom: 0.3rem;
}

.order-list dl dd .bot-div {
    height: 3rem;
    line-height: 3rem;
    font-size: 0.9rem;
    display: flex;
    justify-content: space-between;
}

.order-list dl dd .bot-div span:last-of-type {
    font-weight: bold;
}
</style>