<template >
	<div class="p3">
		<h3>修改密码</h3>	
		<div class="p3c">
			<label for="dq">当前密码</label><input type="text" id="dq"><br>
			<label for="newpwd1">新密码</label><input type="text" id="newpwd1"><span>6到16个字符</span><br>
			<label for="newpwd2">确认新密码</label><input type="text" id="newpwd2"><br>
			<button class="btn-lg btn btn-success">确认修改</button>
		</div>
	</div>  

</template>
<script>

</script>
<style>
	.p3{margin: 30px;font-size: 20px;}
	.p3c input{margin: 10px;padding: 5px;}
	label{width: 100px;text-align: right;}
</style>
