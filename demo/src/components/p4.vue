<template >  
	<div class="p4">
		<h3>设置我的资料</h3>
		<div class="p4c">
			<label for="">我的角色</label><input type="text"><span>当前角色不可更改为其他角色</span><br>
			<label for="">用户名</label><input type="text"><span>不可修改，一般用于后台登入名</span><br>
			<label for="">昵称</label><input type="text"><br>
			<p style="padding-left:60px;">性别
				<input type="radio" id="nan" name="xb"><label for="nan" class="nn">男</label>
				<input type="radio" id="nv" name="xb"><label for="nv" class="nn">女</label>
			</p>
			<label for="">头像</label><input type="text"><button class="btn-lg btn btn-info">上传图片</button><button class="btn-lg btn btn-info">查看图片</button><br>
			<label for="">手机</label><input type="text"><br>
			<label for="">邮箱</label><input type="text"><br>
			<label for="dd">备注</label><textarea name="dd" id="dd" cols="30" rows="5"></textarea>

		</div>		
	</div>


</template>
<script>

</script>
<style>
	.p4{font-size: 20px;margin: 30px;}
	label{width: 100px;text-align: right;padding: 10px 10px;margin: 10px;}
	.nn{width: 40px;margin-right: 20px;}
	/* button{margin: 0 10px;} */
</style>
