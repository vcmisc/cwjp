function question2() {
    var a1 = parseFloat(document.getElementById("q2.a1").value);
    var b1 = parseFloat(document.getElementById("q2.b1").value);
    var a2 = parseFloat(document.getElementById("q2.a2").value);
    var b2 = parseFloat(document.getElementById("q2.b2").value);
    var a3 = parseFloat(document.getElementById("q2.a3").value);
    var lin3 = parseFloat(document.getElementById("q2.lin3").value);
    var const3 = parseFloat(document.getElementById("q2.const3").value);
    var a4 = parseFloat(document.getElementById("q2.a4").value);
    var const4 = parseFloat(document.getElementById("q2.const4").value);
    var lin4 = parseFloat(document.getElementById("q2.lin4").value);

    var c3 = lin3/(2*a3);
    var b3 = a3*c3*c3 - const3;

    var c4 = lin4/(-2*a4);
    var b4 = const4 + a4*c4*c4;

    document.getElementById("q2.a").innerHTML = "sqrt(" + b1 + "/" + a1 + ")*sec(t)";
    document.getElementById("q2.b").innerHTML = "sqrt(" + b2 + "/" + a2 + ")*tan(t)";
    document.getElementById("q2.c").innerHTML = "sqrt(" + b3 + "/" + a3 + ")*sec(t) - " + c3;
    document.getElementById("q2.d").innerHTML = "sqrt(" + b4 + "/" + a4 + ")*sin(t) - " + c4;

    MathJax.Hub.Queue(['Typeset', MathJax.Hub, 'q2']);
}

function question9() {
    var c1 = parseFloat(document.getElementById("q9.c1").value);
    var c2 = parseFloat(document.getElementById("q9.c2").value);
    var c3 = parseFloat(document.getElementById("q9.c3").value);
    var c4 = parseFloat(document.getElementById("q9.c4").value);

    c4 = c4 * (c4 < 0 ? -1 : 1);

    var x1 = ((-c3)-Math.sqrt(Math.pow(c3,2)+4*c4))/(2);
    var x2 = ((-c3)+Math.sqrt(Math.pow(c3,2)+4*c4))/(2);

    console.log(x1);
    console.log(x2);

    var c = x1 < 0 ? x2 : x1;

    var a = (c1*c+c2)/((c4/c)+(c));
    var b = c1-a;

    document.getElementById("q9.a").innerHTML = "A = " + a;
    document.getElementById("q9.b").innerHTML = "B = " + b;
}

function question10() {
    var aa = 6;
    var bb = parseFloat(document.getElementById("q10.bb").value);
    var const0 = parseFloat(document.getElementById("q10.const0").value);

    var dd = (15-bb*9-const0)/3;
    console.log(const0);
    console.log(-const0);
    var integral = aa + "*x^2/2 + " + bb + "*x+5*ln(abs(x-3))+" + dd + "*ln(abs(x+3))";

    document.getElementById("q10.a").innerHTML = "a = " + aa;
    document.getElementById("q10.b").innerHTML = "b = " + bb;
    document.getElementById("q10.c").innerHTML = "c = 5";
    document.getElementById("q10.d").innerHTML = "d = " + dd;
    document.getElementById("q10.e").innerHTML = "Integral: " + integral;

}