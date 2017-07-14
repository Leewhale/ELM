<template>
    <div>
        <h3 class="bluehead">
            <i @click="$router.back(-1)"></i>
            <span>汉堡薯条</span>
        </h3>
        <div class="sort-bar">
            <div><span>分类</span><i class="d-snajiao"></i></div>
            <div><span>排序</span><i class="d-snajiao"></i></div>
            <div><span>筛选</span><i class="d-snajiao"></i></div>
        </div>
        <div class="sort-result-box">
            <div class="shop-info-box">
                <div class="shop-logo">
                    <img src="../imgs/logo.png">
                </div>
                <div class="shop-main">
                    <div class="shop-main-name">
                        <span class="pplogo">品牌</span>
                        <span class="shop-name text_ellipsis">吉野家(回龙观永辉店)</span>
                        <div class="float-right">
                            <span>保</span>
                            <span>票</span>
                            <span>准</span>
                        </div>
                    </div>
                    <div class="shop-main-level">
                        <div class="level-star">
                            <img src="../imgs/star.png">
                            <img src="../imgs/star.png">
                            <img src="../imgs/star.png">
                            <img src="../imgs/star.png">
                        </div>
                        <span class="level-count">4.6</span>
                        <span class="level-sale">月售1920单</span>
                        <div class="float-right">
                            <span class="zsd">准时达</span>
                            <span class="fnzs">蜂鸟专送</span>
                        </div>
                    </div>
                    <div class="shop-main-time">
                        <span>￥20起送/</span>
                        <span>配送费5￥/</span>
                        <span>￥34/人</span>
                        <div class="float-right">
                            <span>2.19km/</span>
                            <span class="wite-time">40分钟</span>
                        </div>
                    </div>
                    <div class="shop-main-info">
                        <div class="info-show">
                            <span>3个活动</span>
                            <img src="../imgs/upr.png">
                        </div>
                        <div>
                            <p><i>减</i><span>满39减6，满65减15</span></p>
                            <p><i>减</i><span>满39减6，满65减15</span></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ShopSort',
    data: function() {	
        return {}
    },
    methods: {}
}
</script>

<style scoped>
.d-snajiao{
    font-size: 0;
    /*display: inline-block;*/
    border: 6px solid transparent;
    border-top: 6px solid #666;
    margin-left: 0.2rem;
    margin-top: -0.2rem;
}
.sort-bar{
    width: 100%;
    height: 3rem;
    display: flex;
    border-bottom: 1px solid #ddd;
}
.sort-bar>div{
    width: 33.333%;
    height: 100%;
    text-align: center;
    line-height: 3rem;
    font-size: 1rem;
    color: #666;
}
.sort-result-box{
    width: 100%;
    position: fixed;
    top: 6rem;
    bottom: 0;
    overflow-y: auto;
}
</style>