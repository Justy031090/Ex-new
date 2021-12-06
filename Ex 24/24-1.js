function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.isSquare = function (a,b,c,d) {
        if (a===b && c===d && b===d)
        console.log('true')
        else
        console.log('false')
    }
}
square = new Square();
console.log(square.isSquare(3,3,3,3))