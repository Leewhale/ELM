<template>
<div>
    <!--搜索框-->
    <div class="header-search">
        <div class="back-box" @click="$router.back(-1)">
            <img src="../imgs/back2.png" />
        </div>
        <input type="text" placeholder="请输入商品名称" v-model="inpValue" @keyup.enter="searchShop"/>
    </div>
    <div v-show="serchFlag">
        <!--历史搜索-->
        <div class="history-search search">
            <span>历史搜索</span>
            <span>
                <img src="../imgs/delete.png" />
            </span>

        </div>
        <!--历史搜索项-->
        <div class="history-items">
            <a>红薯粉</a>
        </div>
        <!--热门搜索-->
        <div class="hot-search search">
            <span>热门搜索</span>
            <span>
                <img src="../imgs/delete.png" />
            </span>

        </div>
        <!--历史搜索项-->
        <div class="history-items">
            <a>肉串</a>
            <a>蜗牛</a>
            <a>全聚德</a>
            <a>烤肉</a>
            <a>红薯粉</a>
            <a>肉串</a>
            <a>蜗牛</a>
            <a>全聚德</a>
            <a>皮蛋瘦肉粥</a>
            <a>红薯粉</a>
        </div>
    </div>
    <div v-show="!serchFlag">
        <div class="sort-bar">
            <div><span>分类</span><i class="d-snajiao"></i></div>
            <div><span>排序</span><i class="d-snajiao"></i></div>
            <div><span>筛选</span><i class="d-snajiao"></i></div>
        </div>
        <div class="sort-result-box">
            <div class="shop-info-box" v-for="(item,index) in shopList" :key="item.id">
                <div class="shop-logo">
                    <img :src="item.restaurant.image_path | picFormat">
                </div>
                <div class="shop-main">
                    <div class="shop-main-name">
                        <span class="pplogo">品牌</span>
                        <span class="shop-name text_ellipsis">{{item.restaurant.name}}</span>
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
                        <span class="level-count">{{item.restaurant.rating}}</span>
                        <span class="level-sale">月售{{item.restaurant.recent_order_num}}单</span>
                        <div class="float-right">
                            <span class="zsd">准时达</span>
                            <span class="fnzs">蜂鸟专送</span>
                        </div>
                    </div>
                    <div class="shop-main-time">
                        <span>￥{{item.restaurant.piecewise_agent_fee.rules[0].price}}起送/</span>
                        <span>{{item.restaurant.piecewise_agent_fee.description}}/</span>
                        <span>{{item.restaurant.average_cost}}</span>
                        <div class="float-right">
                            <span>{{item.restaurant.distance}}m/</span>
                            <span class="wite-time">{{item.restaurant.order_lead_time}}分钟</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import Utils from '../utils/utils'
export default {
    name: 'SearchShop',
    data: function() {
        return {
            serchFlag: true,
            inpValue: '',
            shopList: []
        }
    },
    methods: {
        searchShop(){
            this.inpValue === '' ? this.serchFlag = true : this.serchFlag = false;
            var baseInfo = this.$store.getters.getBaseInfo,
            $this = this,
            url = `https://www.ele.me/restapi/shopping/restaurants/search?extras%5B%5D=activity&keyword=${this.inpValue}&latitude=${baseInfo.latitude}&limit=100&longitude=${baseInfo.longitude}&offset=0&terminal=web`;
            this.$http.get(url).then(function(res){
                console.log(res)
                $this.shopList = res.data.restaurant_with_foods;
            })
        }
    },
    filters: {
        picFormat(path){
            return Utils(path);
        }
    },
    components: {}
}
</script>

<style scoped>
.header-search {
    height: 3.7rem;
    display: flex;
    align-items: center;
}

.header-search .back-box {
    width: 8%;
    height: 1rem;
    margin-left: 1rem;
}

.header-search input {
    width: 78%;
    height: 2.3rem;
    border: 0;
    background-color: #f8f8f8;
    border-radius: 1rem;
    color: #666;
    padding: 0 0.8rem;
    outline: none;
    margin-top: 0.3rem;
}

.search {
    height: 2.5rem;
    line-height: 2.5rem;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    color: #666;
    font-weight: bold;
}

.history-items a {
    color: #666;
    font-size: 0.9rem;
}

.search span:last-of-type {
    width: 0.7rem;
    height: 0.7rem;
}

.search span:last-of-type img {
    width: 100%;
}

.history-items {
    padding: 0 0.8rem;
    display: flex;
    flex-wrap: wrap;
}

.history-items a {
    background-color: #f8f8f8;
    padding: 0.4rem 0.6rem;
    margin: 0.4rem 0.6rem;
}

.hot-search {
    margin: 0.4rem 0;
}

.history-search {
    margin-bottom: 0.3rem;
}


/*shaixuanlan  */

.d-snajiao {
    font-size: 0;
    /*display: inline-block;*/
    border: 6px solid transparent;
    border-top: 6px solid #666;
    margin-left: 0.2rem;
    margin-top: -0.2rem;
}

.sort-bar {
    width: 100%;
    height: 3rem;
    display: flex;
    border-bottom: 1px solid #eee;
}

.sort-bar>div {
    width: 33.333%;
    height: 100%;
    text-align: center;
    line-height: 3rem;
    font-size: 1rem;
    color: #666;
}

.sort-result-box {
    width: 100%;
    position: fixed;
    top: 7rem;
    bottom: 0;
    overflow-y: auto;
}
</style>

