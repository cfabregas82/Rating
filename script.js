var x = 1;
if (x == 1) {
    function demo1(x) {
        return x*2;
    }
}
else {
    function demo1(x) {
        return x*10;
    }
}

x = demo1(3);
document.writeln(x);