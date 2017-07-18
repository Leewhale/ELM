<template>
<!--评价-->
<div class="comments">
  <div class="zhpj">
    <div class="zhpj_L">
      <p>{{zongHePingJia.star_level}}</p>
      <p>综合评价</p>
      <p>高于周边商家{{parseFloat(zongHePingJia.compare_rating).toFixed(1)*100 }}%</p>
    </div>
    <table class="zhpj_R">
      <tr>
        <td>服务态度</td>
        <td>*****</td>
        <td>{{parseFloat(zongHePingJia.service_score).toFixed(1)}}</td>
      </tr>
      <tr>
        <td>菜品评价</td>
        <td>****</td>
        <td>{{parseFloat(zongHePingJia.food_score).toFixed(1)}}</td>
      </tr>
    </table>
  </div>
  <div class="ping_j">
    <div class="ping_j_type">
      <span :class="{typeactive:activeClass==index}" :key="index" v-for='(item,index) in manYi' @click="getPingJia(item.record_type);activeClass=index">{{item.name+'('+item.amount+')'}}</span>
    </div>
    <div class="ping_j_con">
      <div class="pJ" v-for='item in pingJia' :key="item">
        <div class="pj_un_icon">
          <img src="../imgs/others/headerElephant.png" alt="">
        </div>
        <div class="pj_con">
          <p><span>{{item.username}}</span><span class="pj_time">{{item.rated_at}}</span></p>
          <p><span>{{item.time_spent_desc}}</span></p>
          <p><span>{{item.rating_text}}</span></p>
          <p><img v-for='i in item.item_rating_list' :key="i" :src="i.image_hash | imgForm"></p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import imgFormat from '../utils/utils.js'
export default {
  props: ['id', 'latitude', 'longitude'],
  data: function() {
    return {
      activeClass: 0,
      zongHePingJia: {},
      manYi: [],
      pingJia: []
    }
  },
  methods: {
    // 评价
    getPingJia: function(type) {
      var type = type || 1;
      var $this = this;
      this.$http.get(`https://www.ele.me/restapi/ugc/v1/restaurant/${this.id}/ratings?limit=10&offset=0&record_type=${type}`).then(function(res) {
        $this.pingJia = res.data;
        console.log($this.pingJia);
      });
    },
    // 综合评价
    getZongHePingJia: function() {
      var $this = this;
      this.$http.get(`https://www.ele.me/restapi/ugc/v1/restaurants/${this.id}/rating_scores?latitude=${this.latitude}&longitude=${this.longitude}`).then(function(res) {
        // console.log(res.data);
        $this.zongHePingJia = res.data;
      })
    },
    // 满意度
    getManYi: function() {
      var $this = this;
      this.$http.get(`https://www.ele.me/restapi/ugc/v1/restaurant/${this.id}/rating_categories`).then(function(res) {
        // console.log(res.data);
        $this.manYi = res.data;
      })
    }
  },
  mounted() {
    this.getZongHePingJia();
    this.getPingJia();
    this.getManYi();
  },
  filters: {
    // 处理图片格式
    imgForm: function(i) {
      return imgFormat(i);
    }
  }
}
</script>

<style scoped>
/*评价*/

.comments {
  background-color: #e0e0e0;
}

.zhpj,
.ping_j {
  background-color: #fff;
  padding: 10px 0;
}

.zhpj_L {
  width: 40%;
  float: left;
  padding: 5px;
  box-sizing: border-box;
  text-align: center;
  border-right: 1px solid #ccc;
}

.zhpj_L p:nth-child(1) {
  font-size: 2rem;
  color: #f60;
}

.zhpj_L p:nth-child(3) {
  font-size: .8rem;
}

.zhpj_R {
  float: left;
  width: 60%;
  text-align: left;
  padding: 0 1rem;
  line-height: 1.5rem;
}

.zhpj_R tr td:nth-child(3) {
  color: #f60;
}

.ping_j {
  margin-top: 1rem;
}

.ping_j_type {
  line-height: 3rem;
  border-bottom: 1px solid #f1f1f1;
}

.ping_j_type span {
  background-color: #ebf5ff;
  margin: 0 .5rem;
  display: inline-block;
  height: 2rem;
  line-height: 2rem;
  border-radius: 5px;
  text-align: center;
  padding: 0 .5rem;
  color: #6d7885;
}

.ping_j_type .typeactive {
  background-color: #009cdc;
  color: #fff;
}

.pJ {
  border-bottom: 1px solid #e0e0e0;
}

.pj_un_icon {
  width: 15%;
  box-sizing: border-box;
  float: left;
}

.pj_un_icon img {
  width: 80%;
  margin: 1rem auto;
  display: block;
  border-radius: 50%;
}

.pj_con {
  width: 85%;
  float: left;
  box-sizing: border-box;
  padding: .2rem 1rem;
  line-height: 2rem;
}

.pj_con .pj_time {
  float: right;
  margin-right: 1rem;
}

.pj_con p:nth-child(2),
.pj_con p:nth-child(3) {
  color: #666;
  font-size: .8rem;
}

.pj_con p:nth-child(4) img {
  width: 30%;
  margin-right: 1rem;
}


/*清除浮动*/

.shop_info:after,
.list_right_con:after,
.zhpj:after,
.pJ:after {
  content: "";
  display: block;
  clear: both;
}
</style>
