<template>
    <div>
        <!--轮播图  -->
        <swiper :options="swiperOption" class="siwp">
            <swiper-slide>
                <img src="../imgs/jifen/ban-1.jpg">
            </swiper-slide>
            <swiper-slide>
                <img src="../imgs/jifen/ban-2.jpg">
            </swiper-slide>
            <swiper-slide>
                <img src="../imgs/jifen/ban-3.jpg">
            </swiper-slide>
            <swiper-slide>
                <img src="../imgs/jifen/ban-4.jpg">
            </swiper-slide>
            <swiper-slide>
                <img src="../imgs/jifen/ban-5.jpg">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
        <!--两个小菜单-->
        <div class="jifen-order">
            <ul>
                <li>
                    <img src="../imgs/jifen/dim.png" />
                    <span>积分</span>
                    <span>0</span>
                </li>
                <li>
                    <img src="../imgs/jifen/dui.png" />
                    <span>兑换记录</span>
                </li>
            </ul>
        </div>
        <!--八个菜单-->
        <div class="floor-tab">
            <ul>
                <li>
                    <img src="../imgs/jifen/tab1.jpg" />
                    <span>红包专区</span>
                </li>
                <li>
                    <img src="../imgs/jifen/tab6.png" />
                    <span>红包专区</span>
                </li>
                <li>
                    <img src="../imgs/jifen/tab3.png" />
                    <span>红包专区</span>
                </li>
                <li>
                    <img src="../imgs/jifen/tab8.jpg" />
                    <span>红包专区</span>
                </li>
                <li>
                    <img src="../imgs/jifen/tab5.png" />
                    <span>红包专区</span>
                </li>
                <li>
                    <img src="../imgs/jifen/tab6.png" />
                    <span>红包专区</span>
                </li>
                <li>
                    <img src="../imgs/jifen/tab7.png" />
                    <span>0元专区</span>
                </li>
                <li>
                    <img src="../imgs/jifen/tab8.jpg" />
                    <span>红包专区</span>
                </li>
            </ul>
        </div>
        <!--三张图片-->
        <div class="three-img">
            <div class="three-img-left">
                <img src="../imgs/jifen/img_1.png" />
            </div>
            <div class="three-img-right">
                <img src="../imgs/jifen/img_2.jpg" />
                <img src="../imgs/jifen/img_3.jpg" />
            </div>
        </div>
        <!--大家都在兑-->
        <div class="main-list">
            <p>大家都在兑</p>
            <ul>
                <li v-for="(item,index) in list" :key="index">
                    <p>{{item.name}}</p>
                    <p>
                        <span>{{item.itemCredits}}</span>
                        <span>{{item.corner}}</span>
                    </p>
                    <div>
                        <img :src="item.imgSrc" v-lazy='item.imgSrc' />
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    data() {
        return {
            swiperOption: {
                autoplay: 3500,
                setWrapperSize: true,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                mousewheelControl: true,
                observeParents: true,
                loop: true
            },
            swiperSlides: [1, 2, 3, 4, 5],
            imgArr: [
                { src: '../imgs/jifen/ban-1.jpg' },
                { src: '../imgs/jifen/ban-2.jpg' },
                { src: '../imgs/jifen/ban-3.jpg' },
                { src: '../imgs/jifen/ban-4.jpg' },
                { src: '../imgs/jifen/ban-5.jpg' }
            ]
            , list: []
        }
    },
    methods: {
        //获取商品数据
        getData: function () {
            var $this = this;
            this.$http.get('../../static/Jifen.json').then(function (res) {
                console.log(res);
                $this.list = res.data;
            })
        }
    },
    created() {
        this.getData()
    },
    mounted() {

    },
    destroyed() {

    },
    components: {
        swiper,
        swiperSlide
    }
}
</script>
<style scoped>
/*轮播图*/

.siwp img {
  width: 100%;
}

.swiper-pagination-bullet {
  background-color: #fff;
  width: 0.5rem;
  height: 0.5rem;
}
/*懒加载  */
img[lazy=loading] {
  opacity: 0;
}
img[lazy=error] {
  
}
img[lazy=loaded] {
  opacity: 1;
}
/*两个菜单*/

.jifen-order {
  width: 100%;
  height: 2.7rem;
  line-height: 2.7rem;
  border-bottom: 0.7rem solid #eee;
}

.jifen-order ul {
  display: flex;
}

.jifen-order ul li {
  width: 50%;
  height: 1.8rem;
  line-height: 1.8rem;
  margin-top: 0.5rem;
  text-align: center;
  border-right: 0.01rem solid #eee;
}

.jifen-order ul li:last-of-type {
  border-right: 0;
}

.jifen-order ul li img {
  width: 11%;
  margin-top: 0.3rem;
}

.jifen-order ul li:first-of-type span:last-of-type {
  color: red;
}


/*八个菜单*/

.floor-tab {
  border-bottom: 0.6rem solid #eee;
  padding: 0.7rem 0.5rem 0 0.5rem;
}

.floor-tab ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.floor-tab ul li {
  display: flex;
  flex-direction: column;
  width: 25%;
  align-items: center;
  margin-bottom: 0.8rem;
}

.floor-tab ul li img {
  width: 50%;
  margin-bottom: 0.4rem;
}

.floor-tab ul li span {
  display: block;
  font-size: 0.9rem;
  color: #666;
}


/*三张图片*/

.three-img {
  border-bottom: 0.4rem solid #eee;
  width: 100%;
  display: flex;
}

.three-img .three-img-left,
.three-img .three-img-right {
  width: 50%;
}

.three-img img {
  width: 100%;
}

.three-img .three-img-left {
  border-right: 0.01rem solid #eee;
}

.three-img .three-img-right img:first-of-type {
  border-bottom: 0.01rem solid #eee;
}


/*商品列表*/

.main-list>p {
  line-height: 2.4rem;
  height: 2.4rem;
  border-bottom: 0.01rem solid #eee;
  color: #666;
  font-size: 0.9rem;
  text-indent: 1rem;
}

.main-list ul {
  display: flex;
  flex-wrap: wrap;
}

.main-list ul li {
  width: 49.4%;
  border-right: 0.01rem solid #eee;
  border-bottom: 0.01rem solid #eee;
  line-height: 1.4rem;
  padding: 0.6rem 0;
  font-size: 0.9rem;
  text-indent: 0.6rem;
}

.main-list ul li div {
  width: 10rem;
  height: 6rem;
  display: flex;
  margin: 0.5rem auto;
}

.main-list ul li div img {
  width: 100%;
}

</style>


