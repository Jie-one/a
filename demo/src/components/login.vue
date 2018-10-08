<template >  
    <div class="login">
        <div class="kong"></div>
        <h2>XXX后台管理系统</h2>
        <label for="username">账号</label><input type="text" id="username"><br>
        <label for="password">密码</label><input type="password" id="password"><br>
        <button class="btn-success btn-lg btn btn-success btn-block" @click="dl">登录</button><br>
        <span class="pull-left"><input type="checkbox" id="jizhu" ><label for="jizhu" >记住密码</label></span>
        <span class="pull-right"><a href="">忘记密码？</a></span>
    </div>
</template>
<script>
export default {
		data(){
			return {
			}
        },
        methods:{
            dl(){
                this.$router.push("main");
            }
        }
	}
    
</script>
<style>
    .login{width: 800px;height: 700px; margin:50px auto 0;padding:50px 80px; font-size: 24px;border:3px solid #ccc;text-align: center;}
    .kong{width: 200px;height: 200px;background-color: #999;margin: 0 auto 50px;}
    input{margin: 20px;}
</style>
