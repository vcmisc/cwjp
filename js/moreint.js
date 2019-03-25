function question2(){
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