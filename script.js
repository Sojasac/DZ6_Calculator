

function okr (){
    var exp = document.form.textview.value;
    document.form.textview.value = Math.ceil(exp)
}

function insert(num){
    document.form.textview.value = 
    document.form.textview.value + num;
}

function clean(){
    document.form.textview.value = "";
}

function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0, 
    exp.length-1);
}


function equal(){
    var exp = document.form.textview.value;
    if(exp){
        document.form.textview.value = eval(exp.toFixed(3));
    }
    
}

function step(){
    var exp = document.form.textview.value;
    if(exp){
    document.form.textview.value = Math.pow(exp, 2);
    }
}

function step1(){
    var exp = document.form.textview.value;
    if(exp){
    document.form.textview.value = Math.pow(exp, -1);
    }
}

function radi(){
    var exp = document.form.textview.value;
    if(exp){
    document.form.textview.value = Math.sqrt(exp);
    }
}


function random(){
    var exp = document.form.textview.value;
    if(exp){
    document.form.textview.value = Math.random(exp) * exp;
    }

    okr();
} 

/*function fac(){
    var exp = document.form.textview.value;
    if (exp){
        exp = exp * fac(exp-1);
    }
}*/ //факториал?

function sinus(){
    var exp = document.form.textview.value;
    if(exp){
    document.form.textview.value = Math.sin(exp);
    }
}

function cosin(){
    var exp = document.form.textview.value;
    if(exp){
    document.form.textview.value = Math.cos(exp);
    }
}

function tang(){
    var exp = document.form.textview.value;
    if(exp){
    document.form.textview.value = Math.tan(exp);
    }
}

function ctg(){
    var exp = document.form.textview.value;
    if(exp){
    document.form.textview.value = 1/Math.tan(exp);
    }
}
