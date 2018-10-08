<template >
	<div class="p1">
		<h3>主页/商品管理/商品分类</h3>
		<button class="btn-lg btn btn-success">添加</button>
		<table>
			<tr class='tr_first'>
				<td>{{''}}</td>
				<td>{{"ID"}}</td>
				<td>{{"美食"}}</td>
			</tr>
			<tr v-for="(item,idx) in p1data" :key="idx">
				<td>{{item.num}} </td>
				<td>{{item.id}} </td>
				<td>{{item.text}} </td>
			</tr>
		</table>	
	</div>  

</template>
<script>
	export default {
		data(){
			return {
				p1data:[
					{
						num:1,
						id:"001",
						text:'美食'
					},
					{
						num:2,
						id:'002',
						text:'新闻'
					},
					{
						num:3,
						id:'003',
						text:'八卦'
					}
				]
			}
        }
	}

</script>
<style>
	.p1{margin: 30px;}
	table{margin-top: 30px;}
	td{width: 300px;height: 50px;text-align: center;border:1px solid #ccc;font-size: 20px;padding: 20px;}
	.tr_first{background-color: #eee;}
</style>
