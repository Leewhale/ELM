<template>
    <div>
        <div class="content">
            <div class="home-head">
                <div class="address">
                    <div class="ads-left" @click="toAddress">
                        <img src="../imgs/dw.png" width="30">
                        <span class="text_ellipsis">{{baseInfo.name}}</span>
                    </div>
                    <div class="ads-right">
                        <p>{{weather.temperature}}°</p>
                        <p>{{weather.description}}</p>
                        <img :src="weather.image_hash | picFormat">
                    </div>
                </div>
                <router-link tag="div" class="search" to="/searchShop">
                    <span>搜索商家、商品</span>
                </router-link>
                <div class="small-nav">
                    <span v-for="item in hotSearch" :key="item.word" @click="$router.push('/shopSort')">{{item.word}}</span>
                </div>
            </div>
            <swiper :options="swiperOption" class="lunbo-box">
                <swiper-slide>
                     <div class="home-nav">
                        <div v-for="(item, index) in navList" :key="item.id" v-if="index<8" @click="$router.push('/shopSort')">
                            <img :src="item.image_hash | picFormat">
                            <p>{{item.name}}</p>
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                     <div class="home-nav">
                        <div v-for="(item, index) in navList" :key="item.id" v-if="index>8" @click="$router.push('/shopSort')">
                            <img :src="item.image_hash | picFormat">
                            <p>{{item.name}}</p>
                        </div>
                    </div>
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>

            <div class="home-show">
                <h3>推荐商家</h3>
                <div class="home-show-content">
                    <div class="shop-info-box" v-for="(item,index) in shopList" :key="item.id" @click="$router.push('/shopDetail')">
                        <div class="shop-logo">
                            <img :src="item.image_path | picFormat">
                        </div>
                        <div class="shop-main">
                            <div class="shop-main-name">
                                <span class="pplogo">品牌</span>
                                <span class="shop-name text_ellipsis">{{item.name}}</span>
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
                                <span class="level-count">{{item.rating}}</span>
                                <span class="level-sale">月售{{item.recent_order_num}}单</span>
                                <div class="float-right">
                                    <span class="zsd">准时达</span>
                                    <span class="fnzs">蜂鸟专送</span>
                                </div>
                            </div>
                            <div class="shop-main-time">
                                <span>￥{{item.piecewise_agent_fee.rules[0].price}}起送/</span>
                                <span>{{item.piecewise_agent_fee.description}}/</span>
                                <span>{{item.average_cost}}</span>
                                <div class="float-right">
                                    <span>{{item.distance}}m/</span>
                                    <span class="wite-time">{{item.order_lead_time}}分钟</span>
                                </div>
                            </div>
                            <div class="shop-main-info">
                                <div class="info-show" @click="showAllAct(index,$event)" v-if="item.activities.length>2">
                                    <span>{{item.activities.length}}个活动</span>
                                    <img src="../imgs/upr.png">
                                </div>
                                <div>
                                    <p v-for="(act,index) in item.activities" :key="act.id" v-show="index<2">
                                        <i :style="{ backgroundColor: '#'+ act.icon_color }">{{act.icon_name}}</i>
                                        <span>{{act.name}}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <foot-nav></foot-nav>
    </div>
</template>

<script>
import footNav from '../components/Footer_nav'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import Utils from '../utils/utils.js'

export default {
    name: 'Home',
    data: function () {
        return {
            // 商品列表
            shopList: [],
            // 轮播配置项
            swiperOption: {
                autoplay: false,
                loop: true,
                setWrapperSize :true,
                pagination : '.swiper-pagination',
                paginationClickable :true,
                // mousewheelControl : true,
                observeParents:true,
            },
            // swiperSlides: [1, 2, 3, 4, 5]

            // 基础信息
            baseInfo:{},
            // 天气信息
            weather:{},
            // 导航图标列表
            navList: [],
            // 热门搜索-上部小导航
            hotSearch: []
        }
    },
    methods: {
        // 获取商品列表数据
        getShopList:function(){
            var $this = this;
            var url = `https://mainsite-restapi.ele.me/shopping/restaurants?latitude=${this.baseInfo.latitude}&longitude=${this.baseInfo.longitude}&offset=0&limit=20&extras[]=activities&terminal=h5`
            this.$http.get(url).then(function(res){
                $this.shopList = res.data;
            })
        },
        // 获取导航信息
        getNavList(){
            var $this = this;
            var url = `https://mainsite-restapi.ele.me/shopping/v2/entries?latitude=${this.baseInfo.latitude}&longitude=${this.baseInfo.longitude}&templates[]=main_template`;
            this.$http.get(url).then(function(res){
                $this.navList = res.data[0].entries;
            });
        },
        // 获取天气信息
        getWeather(){
            var $this = this;
            var url = `https://mainsite-restapi.ele.me/bgs/weather/current?latitude=${this.baseInfo.latitude}&longitude=${this.baseInfo.longitude}`;
            this.$http.get(url).then(function(res){
                console.log(res);
                $this.weather = res.data;
            });
        },
        // 获取热门搜索
        getHotSearch(){
            var $this = this;
            var url = `https://mainsite-restapi.ele.me/shopping/v3/hot_search_words?latitude=${this.baseInfo.latitude}&longitude=${this.baseInfo.longitude}`;
            this.$http.get(url).then(function(res){
                $this.hotSearch = res.data;
            });
        },
        // 点击显示所有活动
        showAllAct(index,$event){
            var n = this.shopList[index].activities.actShowNum;
            
            // let n = item.activities.actShowNum;
            if(n==undefined || n==2){
                this.shopList[index].activities.actShowNum = 20;
            }else{
                this.shopList[index].activities.actShowNum = 2;
            }
        },
        // 点击地址去地址页
        toAddress(){
            this.$router.push('/address');
        },
        // 从store中获取基础信息
        getBaseInfo(){
            this.baseInfo = this.$store.getters.getBaseInfo;
        } 
    },
    components: {
        footNav,
        swiper,
        swiperSlide
    },
    filters: {
        picFormat(image_path){
            return Utils(image_path);
        }
    },
    created(){
        this.getBaseInfo();
        this.getShopList();
        this.getNavList();
        this.getWeather();
        this.getHotSearch();
    }
}
</script>

<style scoped>
.home-head {
    width: 100%;
    height: 8.3rem;
    background-image: -webkit-linear-gradient(left, #0af, #0085ff);
    background-image: linear-gradient(90deg, #0af, #0085ff);
    color: #fff;
    padding: 0.7rem 0;
    box-sizing: border-box;
}

.home-head .address {
    width: 100%;
    height: 2.6rem;
    line-height: 2.6rem;
    padding: 0 0.5rem;
    box-sizing: border-box;
}

.home-head .address .ads-left {
    float: left;
    width: 70%;
    height: 100%;
}

.home-head .address .ads-left img {
    margin-top: 0.25rem;
    width: 2rem;
    vertical-align: top;
}

.home-head .address .ads-left span {
    display: inline-block;
    width: 12rem;
    font-size: 1.2rem;
}

.home-head .address .ads-right {
    float: right;
    width: 18%;
    height: 100%;
    position: relative;
}

.home-head .address .ads-right p {
    height: 50%;
    font-size: 0.9rem;
    line-height: 1rem;
    padding-left: 0.3rem;
}

.home-head .address .ads-right img {
    width: 2rem;
    position: absolute;
    top: 0.3rem;
    right: 0;
}

.home-head .search {
    width: 100%;
    height: 2.6rem;
    line-height: 2.6rem;
    text-align: center;
    margin-top: 0.2rem;
    font-size: 0;
}

.home-head .search span {
    display: inline-block;
    width: 93%;
    height: 2.6rem;
    line-height: 2.6rem;
    border-radius: 2rem;
    background: #fff;
    color: #333;
    text-align: center;
    font-size: 0.8rem;
}

.home-head .small-nav {
    width: 93%;
    margin-left: 0.85rem;
    height: 1.5rem;
    overflow-x: auto;
    white-space: nowrap;
    margin-top: 0.2rem;
}

.home-head .small-nav span {
    text-decoration: none;
    color: #fff;
    margin-right: 1rem;
    font-size: 0.7rem;
}
.home-nav {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    padding-bottom: 0.8rem;
}

.home-nav div {
    width: 25%;
    text-align: center;
    padding-top: 0.8rem;
}

.home-nav div img {
    width: 50%;
}

.home-nav div p {
    font-size: 0.8rem;
    color: #666;
}


.home-show {
    margin-top: 0.6rem;
    width: 100%;
    background: #fff;
}

.home-show>h3 {
    box-sizing: border-box;
    width: 100%;
    height: 2.8rem;
    line-height: 2.8rem;
    padding-left: 0.8rem;
    font-size: 1rem;
}

.home-show .home-show-content {
    width: 100%;
}

.lunbo-box{
    padding-bottom: 1.2rem;
    background: #fff;
}
</style>