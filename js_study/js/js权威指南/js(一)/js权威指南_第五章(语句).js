console.log('第五章');
//Swith(5.4.3)
var a=3;
switch (a){//a会在swith时才运算，所以js的swith效率并不高
    case 1:
        alert(1);
        break;
    case 2:
        console.warn(2);
        break;
    case 3:
        console.log(3);
    default:
        console.log('default');
        break;
}

//for(5.5.3)
    //循环变量可以不是数字
var o ={};

    function tail(o) {
        o.next = 'nnnn'
        for(;o.next;o = o.next)/*empty*/;
        return o;
    }
    tail(o);
    console.warn(o)
    //死循环：
    //while(true){}
    //for(;;)
var p ={}
for(var aaa in p)
    console.warn(aaa[p]);//
//break (5.6.2)
//带标签的break，跳出非就近的循环体或者swith
var matrix = [[25,63,22,67],[336,73,7,34],[45,7,432,6]];
var sum = 0, success = false;var j =0;
compute_sum: if(matrix) {
    for(var x = 0; x < matrix.length; x++){
        var  row = matrix[x];
        if(!row) break compute_sum;
        for(var y = 0;y< row.length; y++){
            var cell = row[y];
            if(isNaN(cell)) break compute_sum;
            sum += cell;
            j++
        }
    }
    success = true;
}
console.log(sum,j);
var sssum = 0; var i=0;
matrix.forEach(function (arr) {
    arr.forEach(function (item) {
        sssum += item;
        i++;
    })
})

console.log(sssum,i);

//try catch finally(5.6.6)
//example
/*    function fact(x) {
        if(x<0) throw new Error("x不能是负数");
        for( var f = 1;x>1;f*=x,x--)/!*empty*!/;
        return f;
    }
    try{
        var n = Number(prompt("请输入一个正整数",""));
        var f = fact(n);
        alert(n+"!="+f);
    }catch (e){
        alert(e);
        console.warn(e);
    }    */