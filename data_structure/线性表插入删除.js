/**
 * Created by Richie on 2018/6/7
 */

//§3.5.2线性表插入、删除 js实现


var arr = [0, 213, 512, 6, 23];
var arr2 = [0, 213, 512, 6, 23];

var num = 20;

//将num 插入213之后，第三位；

function insert(arr, num, index) {
    if (index === arr.length) {//最后一个位置，的后面无可以它交换的arr[index-1+1]了
        arr.push(num)
    } else {
        for (var k = arr.length -1; k >= index-1 ; k--) {
            arr[k+1]=arr[k]
        }
        arr[index-1] = num;
        console.warn("new Arr:",arr);
        console.warn("new length:",arr.length); //  js Array 长度自增
    }
}

insert(arr2,num,3);

/*************   del O(n) > del2 O(n)  ***************/
function del(arr,index) {
    var date = new Date().getMilliseconds();
    arr.splice(index-1,1);
    console.warn(arr);
    var nowDate = new Date().getMilliseconds();
    console.warn("del",nowDate-date+"ms");
}

function del2(arr,index){
    var date = new Date().getMilliseconds();

    if (index === arr.length) {//最后一个位置，的后面无可以它交换的arr[index-1+1]了
        arr.pop()
    } else {
        for (var k = index; k <arr.length ; k++) {
            arr[k-1]=arr[k]
        }
        arr.pop();
        console.warn("new Arr:",arr);
        console.warn("new length:",arr.length); //  js Array 长度自增
    }
    var nowDate = new Date().getMilliseconds();
    console.warn("del2",nowDate-date+"ms");
}


del(arr,3);
del2(arr2,3);