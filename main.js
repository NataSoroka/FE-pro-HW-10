window.onload = function() {

    function FirstLevel() {

    }

    function SecondLevel() {

    }

    function ThirdLevel() {

    }

    function ForthLevel() {

    }

    SecondLevel.prototype = Object.create(FirstLevel.prototype);
    ThirdLevel.prototype = Object.create(SecondLevel.prototype);
    ForthLevel.prototype = Object.create(ThirdLevel.prototype);


    FirstLevel.prototype.render = function(x) {
        document.write("X = " + x);
        document.write("<br />");
    }
    FirstLevel.prototype.clear = function(x) {
        x = 0;
        document.write("New X - " + x);
        document.write("<br />");
    }


    SecondLevel.prototype.sum = function(a, b) {
        document.write(a + "+" + b + "*2" + " = " + Math.pow(a + b, 2));
        document.write("<br />");
    }
    SecondLevel.prototype.div = function(a, b) {
        document.write(a + "/" + b + "*2" + " = " + Math.pow(Math.floor(a / b), 2));
        document.write("<br />");
    }
    SecondLevel.prototype.mul = function(a, b) {
        document.write(a + "*" + b + "*2" + " = " + Math.pow(a * b, 2));
        document.write("<br />");
    }


    ThirdLevel.prototype.arr = new Array(200);
    ThirdLevel.prototype.reInit = function() {
        for (var i = 0; i < this.arr.length; i++) {
            this.arr[i] = Math.floor(Math.random() * 50);
        }
        document.write("Массив arr - " + this.arr);
    }

    var item1 = new ForthLevel();


    var x = +prompt("Введите Х");

    item1.render(x);
    item1.clear(x);

    var a = +prompt("Введите А"),
        b = +prompt("Введите В");

    item1.sum(a, b);
    item1.div(a, b);
    item1.mul(a, b);

    item1.reInit();

}