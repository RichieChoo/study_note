//'use strict';
//js算术运算(3.1.3)
console.log('第三章')
var a  = Math.pow(9,1/2);
var b = Math.sqrt(9);
if(a == b) console.warn("Math.pow(num,1/2)"+'='+"Math.sqrt(num)")//ok
console.log(Math.exp(3));
console.log(Math.pow(10,(Math.log(512)/Math.LN10)));
console.log(Infinity/Infinity);
console.log(Number.MAX_VALUE/0)
var e = "e";
console.log(e.length)
console.log(4+5);
console.log(4+''+5)

//float num 误差(3.1.4)
var x = .1;
var y = .2;
var z = .3;
var x1 = (y-x);
var x2 = (z-x);
var x3 = (z-y);
console.warn(x3-x1);
console.warn(x1-x3);
console.warn(x2-x3*2);

//包装对象(3.6)
var s = 'tests';
s.len = 5;//尝试给字符串属性 赋值的操作会被忽略，临时对象不会被保存下来
console.warn(s.len);//undefined
i =5;
console.error([[]]);
console.warn(i);//已经声明，但是未定义，没有指定初始值
var S = new String(s);//显示创建包装对象
console.warn(typeof S);//object
console.warn(typeof s);//string
console.warn(S===s);//false
console.warn(S==s);//true

//*Q:对原始类型来说，显式类型转换和显式创建包装对象是否有区别？？

//Object to 原始值(3.8.3)
var d = new String('3223');
console.log(typeof (d));
var ds = d.toString();
console.log(typeof (ds));
console.log(typeof (d.valueOf()));
console.log(ds === d.valueOf())//true 转换成字符串
var num = 34523;
console.warn(typeof Object(num))
console.warn(typeof (Object(num).valueOf()))

//日期类的对象，vauleOf会返回一个毫秒数
var date = new Date()
console.warn( date.toDateString())
console.warn( date.toString())
console.warn( date.valueOf())

//变量 scoope(3.10)
var scope = 'global';
function ab() {
    var scope;
    console.warn(scope);//undefined
    scope = 'local';//声明提前，但是不包括赋值、
    console.warn(scope);
}
ab();

//作为属性的变量(3.10.2)
var truevar = 3;//不可删除
fakevar = 4;//可删除
delete truevar;
delete fakevar;
console.log(truevar);
console.log(fakevar); //undefined
//使用严格模式会提示L77错误;