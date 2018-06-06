console.log("第六章");
//创建对象(6.1.1)
    var p = {'':'name'}
    console.warn(p[""])//name，即使属性名为空字符串，也可以，不过要用[]访问属性，.不行
//Object.ctreate()（6.1.4）
    var o1 = Object.create({'name':'Saber'})//此对象属性‘name’是proto_的对象属性
    console.warn('o1',o1)
    var o2 = Object.create(null);
    console.warn('o2',o2);
    //o2不继承任何属性和方法,如valueOf、toString，即无法与+链接。
    var  o3 = Object.create(Object.prototype);
    console.warn('o3',o3)

    // !!!
    // eg:使用原型继承创建一个新的对象
    function inherit(p) {
        if(p == null) throw TypeError();
        if(Object.create)
            return Object.create(p);
        var t = typeof p;
        if(t !== "object" && t !=="function") throw TypeError;
        function f() {
        }//定义空构造函数
        f.prototype = p;
         return new f();
    }
    var te = {x:"Don't change!"}
    console.warn(te)
    var b = inherit(te);//te不改变
    // var b = te;//te 改变了

    console.warn(b);

//继承了p的属性,把p的属性放在_proto_下!
    b.x = "I want to change";
    console.warn(b)
    console.warn('te',te)

//继承（6.2.2）
    var oo = {};
    oo.x = 1;
    var pp = inherit(oo);
    pp.y =2;
    var q = inherit(pp);
    console.warn(oo)
    console.warn(pp)
    console.warn(q)//链式
    q.z = 3;
    // q.y = 4; //不添加，q.y来自__proto__继承pp中的y,添加，则来自q中的q.y
    var s = q.toString();//toString()方法继承自Object.prototype
    console.warn(q.x+q.y);//3 or 5(L49)

//删除(6.3)
    ooo = {x:1,y:false};
    console.warn(delete ooo.x)//true;
    console.warn(delete ooo.x)//已删除的再次删除相当于什么都没有做，true
    console.warn(delete ooo.toString());//继承的无法删除 true
    console.warn(ooo)

//检测属性（6.4）--in、hasOwnPreperty()、propertyIsEnumerable()、属性查询
    console.warn('y' in ooo);//true
    console.warn('toString' in ooo);//true
    console.warn(ooo.hasOwnProperty('y'))//true
    console.warn(ooo.hasOwnProperty('x'))//false
    console.warn(ooo.hasOwnProperty('toString'))//false
    var oy = inherit({y:2})
    oy.x = 1;
    console.warn(oy.propertyIsEnumerable('x'))//true
    console.warn(oy.propertyIsEnumerable('y'))//false，y是继承来的
    console.warn(oy.propertyIsEnumerable('toString'))//false,不可配置，不可枚举
    console.log(oy.y!==undefined)
    console.warn(Object.keys(oy))//
    console.warn(Object.getOwnPropertyNames(oy))//
    //extend 返回的不含有继承而来的属性
    function extend(o,p) {
        for(prop in p){
            if(!p.propertyIsEnumerable(prop))continue;//跳过继承的属性
            o[prop] = p[prop];
        }
        return o;
    }
    var o4 ={}
    console.warn(oy)
    for(p in oy){
        if ((oy.propertyIsEnumerable(p))) console.warn(p)//与下面两行代码相同
    /*    if(!oy.propertyIsEnumerable(p)){continue;}//跳出此次循环
            console.warn(p);*/
    }
    extend(o4,oy);
    console.warn(o4)

//属性的特性（6.7）
    var oyy = inherit({y:2});
    oyy.x = 1;
    console.warn(Object.getOwnPropertyDescriptor(oyy,'x'));
    console.warn(Object.getOwnPropertyDescriptor(oyy,'y'));//undefined 只能得到自有属性的描述符
    console.warn(Object.defineProperty(oyy,'x',{
        value:3,
        writable:true,
        enumerable:false,
        configurable:true
    }))//即使writable为false，通过此方法也是可以改变属性的值。
    console.warn(Object.getOwnPropertyDescriptor(oyy,'x'))
    //复制属性的特性
    Object.defineProperty(Object.prototype,'extend',{
        writable:true,
        enumerable:false,
        configurable:true,
        value:function (o) {
            var names = Object.getOwnPropertyNames(o);
            for (var i = 0 ; i <names.length;i++){
                if(names[i] in this) continue;
                var desc = Object.getOwnPropertyDescriptor(o,names[i]);
                Object.defineProperty(this,names[i],desc)
            }
        }
    });

//原型属性（6.8.1）
var u = {x:3};
var u1 = Object.create(u);
console.warn(u.isPrototypeOf(u1));
console.warn(Object.prototype.isPrototypeOf(u));
//类属性（6.8.2）
//classof
function classof(o) {
    if(o===null) return 'NULL';
    if(o===undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8,-1);
}
console.warn(classof([]))
//可扩展性（6.8.3）
    var exten = {}
    exten.x =2;

    console.warn(Object.preventExtensions(exten));
    exten.y =3;//无扩展性
    Object.prototype.y=5;
    console.warn(exten.y)//继承原型的新属性
    console.warn(Object.isSealed(exten))
    Object.seal(exten)
    console.warn(Object.isSealed(exten))
//序列化对象（6.9）
var testo = {x:1,y:{z:[false,null,'']}};
console.warn(testo)
console.warn(JSON.stringify(testo))
console.warn(JSON.parse(JSON.stringify(testo)))