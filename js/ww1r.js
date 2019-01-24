function question1(){
    var a = parseInt(document.getElementById("q1.v1").value);
    var b = parseInt(document.getElementById("q1.v2").value);

    var ep1 = Math.sqrt(-b/a);
    var aux1 = ep1+10;
    var ans2 = "(-I, -" + ep1 + ")U(-" + ep1 + ",0)U(0," + ep1 + ")U(" + ep1 + ",I)";

    document.getElementById("q1.a").innerHTML = "h(x) = 1/(" + a + "*x^3+(" + b + ")*x)";
    document.getElementById("q1.b").innerHTML = "Domain = " + ans2;

    var ans3 = a + "*(1/x)^3+("+b+")/x";
    var ans4 = "(-I,0)U(0,I)";

    document.getElementById("q1.c").innerHTML = "h(x) = " + ans3;
    document.getElementById("q1.d").innerHTML = "Domain = " + ans4;

    document.getElementById("q1.e").innerHTML = "h(x) = x";
    document.getElementById("q1.f").innerHTML = "Domain = (-I,0)U(0,I)";

    document.getElementById("q1.g").innerHTML = "h(x) = " + a + "*(" + a +"*x^3+("+b+")*x)^3+("+b+")*("+a+"*x^3+("+b+")*x)";
    document.getElementById("q1.h").innerHTML = "Domain = (-I,I)";
}

function question2(){
    var a = parseInt(document.getElementById("q2.v1").value);
    var b = parseInt(document.getElementById("q2.v3").value);
    var c = parseInt(document.getElementById("q2.v2").value);

    document.getElementById("q2.a").innerHTML = "\\(\\displaystyle{\\lim_{x \\rightarrow " + b + "^{-}} f(x)}\\) = " + a;
    document.getElementById("q2.b").innerHTML = "\\(\\displaystyle{\\lim_{x \\rightarrow " + b + "^{+}} f(x)}\\) = " + (10 + b).toString();
    document.getElementById("q2.c").innerHTML =  "\\(f("+b+") = \\) " + c * b;

    MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'q2']);
}

function question3(){
    var a = parseInt(document.getElementById("q3.v1").value);
    var ans = null;
    if (a < 0) {
        ans = "-Infinity";
    }
    else {
        ans = "Infinity";
    }

    document.getElementById("q3.a").innerHTML = "Limit = " + ans;
}

function question4(){
    var a = -parseInt(document.getElementById("q4.v1").value);
    var d = -parseInt(document.getElementById("q4.v2").value);

    document.getElementById("q4.a").innerHTML = "Limit = 1/(" + (a - (d - a)).toString() + ")";
}

function question5(){
    var a = parseInt(document.getElementById("q5.v1").value);
    var b = parseInt(document.getElementById("q5.v2").value);

    document.getElementById("q5.a").innerHTML = "Limit = -" + a + "/" + b;
}

function question6(){
}
function question7(){
}
function question8(){
}
function question9(){
}
function question10(){
}
function question11(){
}
function question12(){
}
function question13(){
}
function question14(){
}
function question15(){
}
function question16(){
}
function question17(){
}
function question18(){
}
function question19(){
}
function question20(){
}
function question21(){
}
function question22(){
}
function question23(){
}
function question24(){
}
function question25(){
}
function question26(){
}
function question27(){
}
function question28(){
}
