function submitForm(){
	//手动校验form的数据问题
	if($("#ff").form('validate')) {
		var data ={};
		data.cardId = $("#cardId").val();
		data.hodeCardName = $("#hodeCardName").val();
		data.cardTypeCode = $("#cardTypeCode").val();
		data.hodeCardPhone = $("#hodeCardPhone").val();
		data.cardBalance = $("#cardBalance").val();
		data.createTime = $("#createTime").val();
		data = JSON.stringify(data);
		jqueryAjaxData("CardManageController", "addMemberCard", data, finishAddMemberCard);
	}
	//$('#ff').form('submit');
}

function finishAddMemberCard(data) {
	var ret = eval(data);
	if(ret.state === 1) {
		showMessage("成功","新增会员卡成功","show",function(){
			$('#ff').form('clear');
		});
	}
}

function clearForm(){
	$('#ff').form('clear');
}