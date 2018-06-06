console.log('第四章');
// object expression & array expression(4.4)
var a= {oname:"aaa","6":"sex"}
console.warn(a["6"]);
console.warn(a["o"+"name"]);
//a 会先进行计算

//+ 运算符(4.8.1)
console.warn(a+43)
var date = new Date();
console.warn(date+4)//+对日期解析时用toString，其他用valueOf

//eval()是一个函数,被当成运算符来对待(4.12)
var geval = eval;
var x = "global",y = "global";
function f() {
    var x = "local";
    eval("x+='changed';");
    return x;
}
function g() {
    var y = "local";
    geval("y+='changed';");
    return y;
}
console.log(f(),x);
console.log(g(),y);

//,运算符(4.13.5)
for(var i = 0,j=10;i<j;i++,j--)
console.warn(i+j);