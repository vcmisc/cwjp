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