<template >  
    <div class="main">
        <div  class="div1">
            <img src="" alt="" class="logo pull-left">
            <h2 class=" pull-left" style="padding:30px;">XXX后台管理系统</h2>
            <p class=" pull-right" style="padding:80px 30px 0;">欢迎<span>XX</span>登录我们的XX系统，在这里你可以为所欲为</p> 
        </div>
        <div class="div2 pull-left">
               <router-link v-for="(tab,idx) in tabs" :to="tab.to" tag="button" class="list" :key="idx" @click="shou">{{tab.text}}</router-link> 
        </div>
        <div  class="div3 pull-left">
            <router-view>
            </router-view>
        </div>
    </div>
</template>
<script>
import p1 from '@/components/p1'
    export default {
		data(){
			return {
				shounum:[true,true,true],
				tabs:[{
					text:'商品管理',
					to:'/main'
				},
				{
					text:'商品分类',
                    to:'/main/p1',
				    component:p1
				},
				{
					text:'商品列表',
					to:'/main/p2'
				},
				{
					text:'用户管理',
					to:'/main'
				},
				{
					text:'修改密码',
					to:'/main/p3'
				},
				{
					text:'资料修改',
					to:'/main/p4'
				},
				{
					text:'交易管理',
					to:'/main'
				},
				{
					text:'订单列表',
					to:'/main/p5'
				}]
			}
		},
		methods:{
			shou:function(){
				alert("666")
				console.log(66);
				if(idx==0||idx==3||idx==6){
					console.log(66)
				};
			}
		}

	}
</script>
<style>
    .div1{height: 150px;padding: 20px;border:1px solid #ccc;}
	.logo{width: 200px;height: 100px;background-color: #000;display: block;}
    .div2{width: 300px;height:880px;}
    .list{display: block;border:1px solid #ccc;width: 100%;height: 50px;font-size: 24px;text-align: center;background-color: #fff;}
	.list:nth-child(1){text-align: left;padding-left: 70px;background-color: #eee;}
	.list:nth-child(4){text-align: left;padding-left: 70px;background-color: #eee;}
	.list:nth-child(7){text-align: left;padding-left: 70px;background-color: #eee;}
</style>
