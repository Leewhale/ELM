<template>
<div>
    <div class="content">
        <!--顶部:订单-->
        <h3 class="bluehead">订单</h3>
        <!--订单内容项-->
        <div class="order-list">
            <!-- <dl> -->
            <dl v-for='item in order'>
                <dt>
                        <img :src="item.orderL[0].image_path | imgForm" />
                    </dt>
                <dd>
                    <div class="top-div">
                        <div class="line-one">
                            <p>
                                <span>{{item.orderL[0].name}}</span>
                                <span>></span>
                            </p>
                            <p>订单已完成</p>
                        </div>
                        <p>{{item.orderTime}}</p>
                    </div>
                    <div class="bot-div">
                        <span>共{{item.total[0]}}件商品</span>
                        <span>￥{{item.total[1]}}</span>
                    </div>
                </dd>
                <!-- </dl> -->
            </dl>

        </div>

    </div>
    <foot-nav></foot-nav>
</div>
</template>

<script>
import footNav from '../components/Footer_nav'
import imgFormat from '../utils/utils.js'
export default {
    name: 'Order',
    data: function() {
        return {
            order: this.$store.state.allOrderList
        }
    },
    methods: {},
    components: {
        footNav
    },
    mounted() {
        if (this.$route.params.total != undefined) {
            this.$store.dispatch('orderList', this.$route.params);
        }
        this.order = this.$store.state.allOrderList;
    },
    filters: {
        imgForm(i) {
            return imgFormat(i);
        }
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
    width: 7rem;
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