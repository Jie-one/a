<template >  
	<div class="p2">
		<div>
			<label for="gjz">关键字</label><input type="text" id="gjz">
			<label for="fenlei">商品分类</label><input type="text" id="fenlei">
			<button class="btn-lg btn btn-success">搜索</button>	
		</div>
		<p>
			<button class="btn-lg btn btn-success del" @click="del">删除</button>
			<button class="btn-lg btn btn-success add" @click="add">增加</button>
		</p>
		<table>
			<tr class="tr_first">
				<td><input type='checkbox'></td>
				<td v-for="(item,idx) in name1" :key="idx">{{item}}</td>
			</tr>
			<tr v-for="(item,idx) in p2data" :key="idx">
				<td><input type='checkbox' value="item.id"></td>
				<td>{{item.id}}</td>
				<td>{{item.lei}}</td>
				<td>{{item.name}}</td>
				<td>{{item.price}}</td>
				<td>{{item.time}}</td>
			</tr>
		</table>
		
	</div>
</template>
<script>
	export default {
		data(){
			return {
				aa:["a"],
				checkedNames: "2",
				name1:[
					'ID','商品分类','商品名称','价格','上传时间'
				],
				p2data:[
						{
							id:"001",
							lei:'美食',
							name:'舌尖上的中国',
							price:'79',
							time:'20121204'
						},
						{
							id:"002",
							lei:'美食',
							name:'舌尖上的中国',
							price:'179',
							time:'20121204'
						},
						{
							id:"003",
							lei:'美食',
							name:'舌尖上的中国',
							price:'109',
							time:'20121204'
						},
				]
			}
		},
		methods:{
			del(){
				console.log(111);
			},
			add(){

			}
		}
	}
</script>
<style>
	.p2{margin: 30px;}
	input{padding: 10px;}
	table{margin-top: 10px;}
	td{width: 200px;height: 50px;text-align: center;border:1px solid #ccc;font-size: 20px;padding: 10px;}
	.tr_first{background-color: #eee;}
</style>
