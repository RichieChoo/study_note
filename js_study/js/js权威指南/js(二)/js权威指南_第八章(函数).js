// 'use strict';
console.warn('第八章')
var a = function () {
    console.warn('a')
}//在此之前无法调用a();因为var a声明提前了，但是赋值函数没有提前！
console.warn(a())// undefined 没有返回值
var strict = function () {
    return!this;//若是严格模式this返回undefined，不是的话this返回windows
};
console.warn(strict());//false 不是严格模式

//函数调用      函数调用、方法调用、构造函数调用、间接调用(call、apply)


//1、纯粹的函数调用(全局性调用)，this代表global</h3>
var x = 1;
function test1(){
    console.warn(this.x);
    var a = this;
    console.warn(a); //[object Window]
}
test1(); // 1
//2、作为对象方法的调用，this就指这个上级对象。
var o = {};
o.x = 1;
o.m = test2;
o.m(); // 1
function test2(){
    console.warn(this.x);
    var a = this;
    console.warn(a);//this = o
}
var cal = {
    op1:1,
    op2:2,
    add:function () {
        this.result = this.op1+this.op2;
    }
}
cal.add();//<=>cal['add']();
console.warn(cal)//{add:function(),op1:1,op2:2,result:3}

//3.作为构造函数调用,this就指这个新对象。
var x = 2;
function test3(){
    this.x = 1;
    console.warn(this)//test3
}
var o = new test3();
//4.call、apply

//实参对象--可变长的实参列表(8.3.2)
//eg：可以操作任意数量的实参函数
function max() {
    var max = Number.NEGATIVE_INFINITY;
    console.warn(max);
    for(var i =0;i<arguments.length;i++){
        if(arguments[i]>max) max = arguments[i];
    }
    // arguments.forEach(function (item) {
    //     console.warn(item)
    // })  报错，证明arguments 是类数组
    return max;
}
console.warn(max(3,42,64,75684,346,85,245,745,7567,32))
console.warn(max())//不定实参函数（vararg function）--实参顺序，实参个数，实参的值不确定

//callee(8.3.2)调用匿名递归函数
var fact = function (x) {
    if(x<=1) return 1;
    // console.warn(arguments)
    return x*arguments.callee(x-1);
}
console.warn(fact(4))

//作为值的函数（8.4）
var operators = {
    add:function (x,y) {return x + y;},
    subtract:function (x,y) {return x - y;},
    multiply:function (x,y) {return x * y;},
    divide:function (x,y) {return x / y;},
    pow:Math.pow//使用预定义的函数
}
function operate(operation,op1,op2) {
    if(typeof operators[operation] === 'function')
        return operators[operation](op1,op2);
    else throw  'unknown operator';
}
console.warn(operate('subtract',8,3));//5
console.warn(operate('pow',5,3));//125
//eg:自定义函数属性
function facto(n) {
    if(isFinite(n)&& n>0 && n==Math.round(n)){
        if (!(n in facto))
            facto[n] = n * facto(n-1);
        return facto[n];
    }else  return NaN;
}
facto[1] = 1;
console.warn(facto(3))
console.warn(facto(2))
console.warn(facto[3])
console.warn(facto.length)

//作为命名空间的函数（8.5）
//eg:特定场景返回带补丁的extend()版本
//!!!!!!!!!!!!!!!
var extend = (function () {
    for (var p in { toString: null}){
        return function extend(o) {
            for (var i = 1; i< arguments.length;i++){
                var source = arguments[i];
                for(var prop in source) o[prop] = source[prop];
            }
            return o;
        }
    }
    return function patched_extend(o) {
        for(var i= 1; i< arguments.length; i++){
            var source = arguments[i];
            for(var prop in source) o[prop] = source[prop];
            for(var j = 0 ;j<protoprops.length;j++){
                prop = protoprops[j];
                if(source.hasOwnProperty(prop)) o[prop] =source[prop];
            }
        }
        return o;
    };
    var  protoprops = ["toString","valueOf","constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","tolocaleString",];
}());

//闭包（8.6）
var scope = "gs";
function checkscope() {
    var scope = "ls";
    function f() {
        return scope;
    }
    return f;//仅仅返回函数对象
}
console.warn(checkscope())//function f(){return scope;}
console.warn(checkscope()())//ls

function  counter() {
    var n = 0;
    return{
        count: function () {
            return n++;

        },
        reset: function () {
            n = 0;
        }
    }
}
var  c = counter(),d = counter();
console.warn(c.count())
console.warn(c.count())
console.warn(c.count())
console.warn(c.reset())
console.warn(c.count())

//call()、apply() （8.7.3）
/*
 * 矩形
 */
function Rectangle(len,width) {
    this.len = len;
    this.width = width;

}
/*
 * 乘以
 */
function multiply(a,b) {
    return a * b;
}
// 矩形实例
var rectangle = new Rectangle(15, 30);
//求矩形面积
var proportion = multiply.call(rectangle,rectangle.len, rectangle.width);
// 等价于call
//var proportion = multiply.apply(rectangle,[rectangle.len, rectangle.width]);

document.write("矩形的面积是："+proportion);
document.write("<br/>");

document.write("/***********************分割线********************************/<br/>");

// 实现继承
function Persion(name) {
    console.warn(this)
    this.name = name;
    this.sayHello = function () {
        return "hello，"+this.name;
    }
}

function Student(name,sex,school) {
    Persion.call(this,name);
    this.sex = sex;
    this.school = school;

    this.mySex = function () {
        return this.sex;
    }
    this.mySchool = function () {
        return this.school;
    }
}

var stu = new Student('fengjx','男','广西机电职业技术学院')

document.write("stu sayHello："+stu.sayHello());
document.write("<br/>");
document.write("stu sex is："+stu.mySex());
document.write("<br/>");
document.write("stu school is ："+stu.mySchool());
document.write("<br/>");
