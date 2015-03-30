console.log('123')
$(function(){
	var currentText="";
	var currentText1="";
	var operator = "";
    
$('#btn1').on('click',function(){
	setnumber(1);
});
$('#btn2').on('click',function(){
	setnumber(2);
});
$('#btn3').on('click',function(){
	setnumber(3);
});
$('#btn4').on('click',function(){
	setnumber(4);
});
$('#btn5').on('click',function(){
	setnumber(5);
});
$('#btn6').on('click',function(){
	setnumber(6);
});
$('#btn7').on('click',function(){
	setnumber(7);
});
$('#btn8').on('click',function(){
	setnumber(8);
});
$('#btn9').on('click',function(){
	setnumber(9);
});
$('#btn0').on('click',function(){
	setnumber(0);
});
$('#btnplus').on('click', function(){
	setoperator("+");
});
$('#btnminus').on('click', function(){
	if(currentText==""){
		currentText = "-"
		render(currentText);
	}
	else{
		setoperator("-");
	}
});
$('#btnmutiple').on('click', function(){
	setoperator("*");
});
$('#btndivision').on('click', function(){
	setoperator("/");
});
$('#btnequal').on('click',function(){
	if(operator==""){
		render(currentText);
	}
	else {
	caculate();
	}

});
$('#btnclear').on('click', function(){
	operator = "";
	currentText = "";
	currentText1 = "";
	render(currentText);
});
$
function render(text){
	$('#message').text(text);
}
$
function caculate(){
	if(currentText1==""){

	}
	else{
		switch(operator){
		case "+" :
			var ans = parseInt(currentText)+parseInt(currentText1);
			currentText = ans;
			currentText1 = "";
			operator = "";
			render(ans);
			break;
		case "-" :
			var ans = parseInt(currentText)-parseInt(currentText1);
			currentText = ans;
			currentText1 = "";
			operator = "";
			render(ans);
			break;
		case "*" :
			var ans = parseInt(currentText)*parseInt(currentText1);
			currentText = ans;
			currentText1 = "";
			operator = "";
			render(ans);
			break;
		case "/" :
			var ans = parseInt(currentText)/parseInt(currentText1);
			currentText = ans;
			currentText1 = "";
			operator = "";
			render(ans);
			break;}
		}
}
$
function setnumber(num){
	if(operator==""){
	currentText = currentText+num;
	render(currentText);
	}
	else{
	currentText1 = currentText1+num;
	render(currentText1);
	}
}
$
function setoperator(oper){
	if(operator==""){
	operator = oper;
	}
	else{
	caculate();
	operator = oper;
	}
	
}


});