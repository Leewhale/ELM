<template>
    <div class="address-box">
        <div class="ads-box-head">
            <h3 class="bluehead"><i @click="goback"></i>选择地址</h3>
            <div class="blue-inp">
                <input type="text" placeholder="请输入地址" @keyup.enter="searchAdd" v-model="addValue">
            </div>
        </div>
        <div class="ads-box-main" v-show="shdzFlag">
            <div class="ads-box-main-tit">收货地址</div>
            <div>
                <div class="ads-info-box">
                    <p>
                        <span class="ads-info-name">李晶</span>
                        <span class="ads-info-sex">先生</span>
                        <span class="ads-info-tel">18330118416</span>
                    </p>
                    <p class="ads-info-add">师大二期九号楼</p>
                </div>
            </div>
        </div>
        <div v-show="!shdzFlag">
            <div class="search_res" v-for="item in addressList" :key="item.name" @click="chooseAdd(item)">
                <p>{{item.name}}</p>
                <p>{{item.address}}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SearchAdd',
    data: function() {	
        return {
            shdzFlag: true,
            addValue: '',
            addressList: []
        }
    },
    methods: {
        goback(){
            this.$router.go(-1);
        },
        searchAdd(){
            var $this = this;
            var a = this.addValue;
            a === '' ? this.shdzFlag = true : this.shdzFlag = false;
            // 默认北京
            var url = `https://mainsite-restapi.ele.me/bgs/poi/search_poi_nearby?keyword=${a}&offset=0&limit=20&longitude=116.31358&latitude=40.08009`;
            this.$http.get(url).then(function(res){
                $this.addressList = res.data;
            })
        },
        chooseAdd(item){
            var infoObj = {};
            infoObj.name = item.name;
            infoObj.latitude = item.latitude;
            infoObj.longitude = item.longitude;
            this.$store.dispatch('setBaseInfo', infoObj);
            this.$router.push('/home');
        }
    }
}
</script>

<style scoped>
.address-box{
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: #f4f4f4;
    overflow-y: auto;
}
.ads-box-head{
    background-image: linear-gradient(90deg,#0af,#0085ff);
}
.blue-inp{
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    background-image: -webkit-linear-gradient(left,#0af,#0085ff);
    background-image: linear-gradient(90deg,#0af,#0085ff);
    text-align: center;
    color: #fff;
    position: relative;
}
.blue-inp{
    line-height: 2.5rem;
}
.blue-inp input{
    box-sizing: border-box;
    border: none;
    width: 90%;
    height: 1.8rem;
    border-radius: 0.9rem;
    outline: none;
    padding: 0 2rem;
}
.ads-box-main{
    width: 100%;
}
.ads-box-main-tit{
    box-sizing: border-box;
    width: 100%;
    height: 2.5rem;
    line-height: 2.5rem;
    padding-left: 1rem;
    font-size: 1rem;
    color: #333;
    background: #f4f4f4;
}
.ads-info-box{
    box-sizing: border-box;
    width: 100%;
    height: 4rem;
    background: #fff;
    padding: 0.8rem;
    border-bottom: 1px solid #f4f4f4;
}
.ads-info-box p{
    margin: 0;
    font-size: 0.9rem;
    color: #333;
}
.ads-info-name{
    font-size: 1.1rem;
    color: #000;
    font-weight: 700;
}
.ads-info-sex{
   
    margin-left: 0.4rem;
}
.ads-info-tel{
    margin-left: 0.6rem;
}
.ads-info-box .ads-info-add{
    font-size: 0.7rem;
    color: #999;
}
.search_res{
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #ddd;
    padding: 0.5rem 0.8rem;
    box-sizing: border-box;

}
.search_res p:first-child{
    font-size: 1rem;
    font-weight: 700;
}
.search_res p:last-child{
    font-size: 0.9rem;
    color: grey;
}
</style>