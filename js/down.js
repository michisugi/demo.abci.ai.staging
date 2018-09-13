jQuery(document).ready(function($){
  htmlobj=$.ajax({url:"./file/memo.txt",async:false});
  var p_u = htmlobj.responseText;
  var lineArray = p_u.split('\n');
  for(var i = 0; i<lineArray.length;i++){
    var line = lineArray[i];
  }
 var a = new Base64();
/*var str = a.encode("./file/syonai_shinsei.zip");
alert(str);*/
 　var p = a.decode(lineArray[0]);
  var u = a.decode(lineArray[1]);
  var w = a.decode(lineArray[2]);
 $("#pass_submit").click(function(){
	var temp_pass = $('input[name=temp_pass]').val();
	if(temp_pass == p){
		//window.open(u);
		$("#use_guide").fadeIn("fast");
		}else{
		alert("正しいパスワードを入力してください。");	
		}
 });
 $("#use_guide_down1").click(function(){
	window.open(u);
	});
	$("#use_guide_down2").click(function(){
	window.open(w);
	});
});