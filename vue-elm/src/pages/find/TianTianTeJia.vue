<template>
<div class="tttj">
        <div class="tttj_img">
            <img src="../../../static/imgs/find/tttj.png" alt="">
        </div>
        <div class="tttj_type">
            <span>全部</span>
            <span>大牌特惠</span>
            <span>大牌特惠</span>
            <span>大牌特惠</span>
            <span>大牌特惠</span>
            <span>大牌特惠</span>
            <span>大牌特惠</span>
        </div>
        <div class="tttj_con">
            <div class="tttj_1w" v-for='item in tttj'>
                <div class="tttj_1w_img">
                    <span>{{item.zhekou}}</span>
                    <img :src="item.imgSrc" alt="">
                    <p>{{item.DiscountFood3teNW}}</p>
                </div>
                <p class="tttj_1W_name">{{item.DiscountFood30HRb}}</p>
                <p class="tttj_1w_price">
                    <span>￥{{item.zheKouPrice}}</span>
                    <span>￥{{item.oldPrice}}</span>
                    <span>抢</span>
                </p>
            </div>            
        </div>
    </div>
</template>

<script>
export default {
  name: 'name',
  data: function() {	
    return {
        tttj:[]
    }
  },
  methods: {
    getShopData: function() {
      var $this =this;
      this.$http.get('../../../static/data/TTTJ.json').then(function(res) {
        $this.tttj = res.data;
        console.log(res);
      })
    }
  },
  created() {
    this.getShopData();
  }
}
</script>

<style scoped>
.tttj_img {
    width: 100%;
}

.tttj_img img {
    width: 100%;
}

.tttj_type {
    height: 3rem;
    line-height: 3rem;
    white-space: nowrap;
    overflow-x: auto;
}

.tttj_type span {
    border: 1px solid #e0e0e0;
    border-radius: 1rem;
    color: #666;
    margin-left: .5rem;
    padding: 0 .5rem;
}

.tttj_type span:nth-child(1) {
    border: 1px solid #2395ff;
    color: #2395ff;
    font-weight: bold;
    background-color: #edfaff
}

.tttj_con {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
}

.tttj_1w {
    box-sizing: border-box;
    width: 50%;
    padding: .5rem;
}

.tttj_1w_img {
    position: relative;
}

.tttj_1w_img span:nth-child(1) {
    position: absolute;
    background: rgba(0, 0, 0, .7);
    color: #fff;
    font-size: .8rem;
}

.tttj_1w_img p:nth-child(3) {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 2rem;
    box-sizing: border-box;
    padding: 0 .5rem;
    line-height: 2rem;
    background: rgba(0, 0, 0, .7);
    color: #fff;
    font-size: .8rem;
}

.tttj_1w img {
    width: 100%;
}

.tttj_1w_name {
    font-weight: bold;
}

.tttj_1w .tttj_1w_price span:nth-child(1) {
    color: #f60
}

.tttj_1w .tttj_1w_price span:nth-child(2) {
    color: #666;
    font-size: .8rem;
    text-decoration: line-through;
}

.tttj_1w .tttj_1w_price span:nth-child(3) {
    background-color: #f94843;
    color: #fff;
    width: 2.5rem;
    text-align: center;
    float: right;
}
</style>