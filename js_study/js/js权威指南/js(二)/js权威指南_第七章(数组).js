console.warn('第七章')
//数组的读写/系数数组（7.2/7.3）
    //数组是对象的特殊形式
    // var a={};
    // a[1] = 'one';//1为属性名
    var a= [,,,];
    console.warn(a)
    console.warn(a[1],a[2],a[0])
    delete a[2];
    console.warn(a.length)
    console.warn(2 in a)//false
    var b = [4,,3]
    console.warn(b)
    console.warn(b.length)
    console.warn(b[1])
    console.warn(1 in b)

//多维数组遍历（7.6）
//9*9乘法表
var arr=[];
var muldom = document.getElementById('mul');

arr.length=9;
for(var i =0 ;i<arr.length;i++){
    arr[i]=[];
    for(var j =0 ;j<i+1;j++){
        arr[i].push((i+1+'*'+(j+1)+'='+(i+1)*(j+1)))
    }
    console.log(arr[i]);

}
arr.forEach(function (item,suoin,arr) {
    item.forEach(function (iii,index,item) {
        muldom.innerHTML += '<span id="span" style="text-align: center; display: inline-block;border: 1px solid#777777;width: 80px">'+iii+'</span>'
    })
    muldom.innerHTML +="<br>"
})
//菱形
for(var i = 0;i<6;i++){
    for(var k=0;k<6-i-1;k++){
        document.write("　");
    }
    for(var j=0;j<i*2+1;j++){
        document.write("．");
    }

    document.write('<br>')

}
for(var i=0;i<6 ;i++){
    for(var k=0;k<i+1;k++){
        document.write("　");
    }
    for(var m=0;m<(9-3*i)+i;m++){
        document.write("．");
    }
    document.write("<br/>");
}
//sort(7.8.3)
var crr = ['banana','apple','cherry',,'zero'];
crr.sort();
console.warn(crr.join())
console.warn(crr[4])//undefined 在末尾

//splice(7.8.6)，返回的和原数组是互补的
var drr = [1,2,3,4,5,6,7,8,9];
console.warn(drr.splice(1,4))
console.warn(drr.splice(0))//返回原数
console.warn(drr.length)//0

//foreach(7.9.1)可以有三个参数，分别是数组元素，元素索引，数组本身

//every()、some()、reduce()、reduceRight()、indexOf()、lastIndexOf等（7.9.4~7.9.6）
var err =[1,2,3,4,5];
console.warn(err.every(function (x) {return x<10;}))//true
console.warn(err.every(function (x) {return x<4;}))//false
console.warn(err.every(isNaN))//false
console.warn(err.some(isNaN))//false
console.warn(err.reduce(function (x,y) {return x+y},4))//19 ,4为初始值
console.warn(err.reduceRight(function (x,y) {return Math.pow(x,y)}));//从右最右边的俩数的算出结果再往左计算
console.warn(err.indexOf(3));//2（索引）
console.warn(err.indexOf(7));//-1 没找到 //indexOf不接受方法
console.warn(Array.isArray(err));//true
var frr = document.getElementsByTagName('div');//类数组，可以for遍历
console.warn(frr);
var grr = {'0':'a','1':'b','2':'c',length:3}

console.warn(Array.prototype.join.call(grr,"-"))//直接无法调用

for(var i=0;i<frr.length;i++){
    console.warn(frr[i])//上述的'div'中的所有代码都会打印出来
}
console.warn(Math.pow(2,32));
//=>检测是不是类数组函数
function arraylike(o) {
    if(o &&  //o非null、undefined
        typeof o === "object" &&//o是对象
        isFinite(o.length) &&//o.length有限数字
        o.length >= 0 &&//o.length 非负数
        o.length ===Math.floor(o.length)&&//o.length整数
        o.length<Math.pow(2,32)//o.length<2^32

    ){
        return true
    }else {return true}
}
console.warn(arraylike(err));
console.warn(arraylike(frr));


