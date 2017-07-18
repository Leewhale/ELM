<template>
    <!--错误信息提示-->
    
    <div class="reminder">
        <span v-if="flag">手机号或密码格式不正确</span>
    </div>
</template>
<script>
export default {
    props: ['flag']
}
</script>
<style>

</style>


