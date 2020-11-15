<template>
    <div class="btn">
        <div class="loginBtn" @click="registerClick">{{btnText}}</div>
    </div>
</template>

<script>
export default {
    props:['btnText'],
    methods:{
        registerClick(){
            this.$emit('registerClick');
        }
    }
}
</script>
<style lang="less" scoped>
    .btn{
        padding:15px 0;
        .loginBtn{
            height:12.5vw;
            color:#fff;
            font-size: 4.444vw;
            background-color: #ff9db5;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 22.5px;
        }
    }
</style>