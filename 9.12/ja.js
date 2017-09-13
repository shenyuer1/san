/*
* @Author: Administrator
* @Date:   2017-09-04 11:03:45
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-12 20:53:09
*/
// var a=1;
// var b=2;
// document.write(a+b);
// alert(a);
// var a;
// alert(a);
// a=2;
// alert(a);
// a=3;
// alert(a);
// var a=5;
// alert(a);
// alert(b);
// var num1=43;
// var num2=40;
// var str="our class have"+num1+"your class have"+num2+"sum is"+(num1+num2);
// var a=20;
// alert(a++);
// alert(a);
// alert(++a);
// alert(a);
// var str=`zheshi
// akskks
// jsskksks
// jsksksk`;
// alert(str);
// var str1=`our class have${num1}your class have${num2}sum is${num1+num2}`;
// alert(str1);
// var s='true';
// var str=1;
// var str1=20;
// alert(s>=str);
// alert(str1>str);
// alert('2'>true);
// var a=1;
// var b=1;
// alert(a===b);
// var a=1;
// var b='2';
// alert(a!==b)
// var a=10;
// var b=20;
// var flag;
// alert(a>20&&a)
// alert(1&&a&&2)
// alert(undefined&&a)
// alert(null&&a&&0)
// alert(a||b)
// 根据条件 选择性的对flag进行赋值；
// if(a%2==0){
// 	flag=true;
// }
// alert(flag);
// 
// 
// var g=prompt('请输入你的分数',45544554456654);
// if(g>=90&&g<=100){
// 	alert('优秀');
// }else if(g>=80&&g<90){
// 	alert('良好');
// }else if(g>=70&&g<80){
// 	alert('中');
// }else if(g>=60&&g<70){
// 	alert('及格');
// }else if(g>=0&&g<60){
// 	alert('不及格');
// }else{
// 	alert('输入错误');
// }



// for(var i=0;i<=3;i++){
// 	alert('halou');
// }
// 
// 
// var a=prompt('请输入你的分数','');
// if(a>10){
// 	alert('jjja');
// }else{
// 	alert('jdjsdjsd');
// }


// var week=prompt('今天星期几', 1);//这里输入的值为字符串
// //字符串变数字：*1    /1   -0
// //数字变字符串：  ''  ""
// switch(week){
//    case '1':
//    alert('第一组');
//    break;
//    case '2':
//    alert('第二组');
//    break;
//    case '3':
//    alert('第三组');
//    break;
//    case '4':
//    alert('第四组');
//    break;
//    case '5':
//    alert('第五组');
//    break;
//    case '6':
//    alert('第六组');
//    break;
//    case '0':
//    alert('第七组');
//    break;
//    default: 
//    alert('输入错误');
//    break;
// }
// for(var i=1;i<=10;i++){
// 	alert(i);
// }
// 
// 
// var sum=0;
// for(var i=1;i<=10;i++){
//     sum=sum+i;
//     //sum+=i;
// }
// alert(sum);

// var sum=0;
// for(var i=1;i<=10;i++){
//     sum=sum+2*i;
//     //sum+=i;
// }
// alert(sum);


// var sum=0;
// for(var i=1;i<=10;i++){
//     sum=sum+(2*i+1);
//     //sum+=i;
// }
// alert(sum);



// var sum=0;
// for(var i=1;i<=10;i++){
// 	if(i%2==0){    
// 		sum=sum+i;
// 	}
//     //sum+=i;
// }
// alert(sum);
// 
// 
// document.write('<table border="1px solid #000" cellspacing="0" cellpadding="10px">');
// for(i=1;i<=10;i++){
// 	document.write('<tr>');
// 	for(j=1;j<=10;j++){
// 		document.write('<td>'+i+'*'+j+'='+(i*j)+'</td>');
// 	}
// 	document.write('</tr>');
// }
// document.write('</table>');
// 
// 
// // 
//  document.write('<table border="1px solid #000" cellspacing="0" cellpadding="10px">');
// for(i=1;i<=10;i++){
// 	if(i%2==0){
// 	document.write('<tr bgcolor="red">');	
// 	for(j=1;j<=10;j++){
// 			document.write('<td>'+i+'-'+j+'</td>');
// 	}
// 	document.write('</tr>');
//    }
//   else{
// 	document.write('<tr bgcolor="yellow">');	
// 	for(j=1;j<=10;j++){
// 			document.write('<td>'+i+'-'+j+'</td>');
		
// 	}
// 	document.write('</tr>');
//    }
// }
// document.write('</table>');
// // 
// // 
// // 
// // 
// 几行几列
// function liebiao(m,n){
// document.write('<table border="1px solid #000" cellspacing="0" cellpadding="10px">');
// for(i=1;i<=m;i++){
// 	if(i%2==0){
// 	document.write('<tr>');	
// 	for(j=1;j<=n;j++){
// 		if(j%2==0){
// 			document.write('<td bgcolor="red">'+i+'-'+j+'</td>');
// 		}else{
// 			document.write('<td bgcolor="yellow">'+i+'-'+j+'</td>');
// 		}
		
// 	}
// 	document.write('</tr>');
//    }
//   else{
// 	document.write('<tr>');	
// 	for(j=1;j<=n;j++){
// 		if(j%2==1){
// 			document.write('<td bgcolor="red">'+i+'-'+j+'</td>');
// 		}else{
// 			document.write('<td bgcolor="yellow">'+i+'-'+j+'</td>');
// 		}
// 	}
// 	document.write('</tr>');
//    }
// }
// document.write('</table>');
// }
// liebiao(8,8);



// document.write('<table border="1px solid #000" cellspacing="0" cellpadding="10px">');
// for(i=1;i<=9;i++){
// 	document.write('<tr>');
// 	for(j=1;j<=i;j++){
// 		document.write('<td>'+i+'*'+j+'='+(i*j)+'</td>');
// 	}
// 	document.write('</tr>');
// }




// document.write('</table>');
// var table='<table border="1px solid #000" cellspacing="0" cellpadding="10px">';
// for(i=1;i<=10;i++){
// 	var colors;
// 	if(i%2==0){
// 		colors='red';
//     // table+='<tr style="background-color:red">';

// 	}else{
// 		colors='green';
//     // table+='<tr style="background-color:green">';

// 	}
//     table+='<tr style=background-color:'+colors+'>';
// 	// console.log(color);

//     for(var j=1;j<=10;j++){
//     	table+='<td>'+i+'-'+j+'</td>';
//     }
//     table+='</tr>';
// }
// table+='</table>';
// document.write(table);


// var h=prompt("请输入行数", 0);
// function jinzita(h){
// var tab='<table>';
// for(i=1;i<=h;i++){
//     tab+='<tr>';
//     //tab=tab+'<tr>'
//     for(var k=1;k<=(h-i);k++){
//             tab+='<td>'+'&nbsp;'+'</td>';
//         }
//     for(var j=1;j<=(2*i-1);j++){
//     	tab+='<td>'+'*'+'</td>';	
//     }
//     tab+='</tr>';
//    }
// tab+='</table>';
// document.write(tab);
// }
// jinzita(20);



//斐波那契
// function feibonaqie(mm){
// var sum=0,i=1,j=0;
// for(var sum=1;sum<=mm;){
// 	sum=i+j;
// 	i=j;
// 	j=sum;
// 	document.write(sum+'&nbsp;');
//  }
// }
// feibonaqie(200);
// 
// 
// 
// //一位数组的最大值
// function am(ywsz){
// var max=ywsz[0];
// for(var i=1;i<ywsz.length;i++){
//    if(max<a[i]){
//    	max=a[i];
//    }
// }
// document.write(max);
// }
// var a=[21,132,33,2,3,14,68,4];
// am(a);


//冒泡排序
// // document.write(a);
// for(var i=0;i<a.length;i++){
//   for(var j=i+1;j<a.length;j++){
//    if(a[i]<a[j]){
//    	var temp=a[i];
//    	a[i]=a[j];
//    	a[j]=temp;
//    }
//  }
// }
// console.log(a);
// 
// var i=1,sum=0;
// // while(i<=10){
// // 	sum=sum+i;
// //     i++;
// // }
// // alert(sum);
// do{
//   sum=sum+i;
//     i++;
// }while(i<=10)
// alert(sum);



 
// 二维数组最大值
// function ewsz(aa){
// var max=aa[0][0];
// for(var i=0;i<aa.length;i++){

// 	for(var j=0;j<aa[i].length;j++){
		
//       if(max<=aa[i][j]){
//       	max=aa[i][j];
//       }
// 	}
// }
// document.write(max);
// }
// var ca=[[100,2,34],[5,9,12],[8,7,90]];
// ewsz(ca);


//数组去空
// function qukong(shuzu){
// var b=[];
// for(var i=0;i<shuzu.length;i++){
// 	if(shuzu[i]==undefined){//typeof a[i]!='undefined'
// 	continue;	
// 	}else{
// 		b[b.length]=shuzu[i];
// 	}
// }
// document.write(b);
// }
// var a=[1,2,,3,4,,5,6,,7];
// qukong(a);


//在数组后添加任意个数组元素(用argument)
// function push(arr){
//    for(var i=1;i<arguments.length;i++){
//    	arr[arr.length]=arguments[i];
//    }
//    alert(arr);
// }
// var zu=[1,2,3]
// push(zu,4,5,6,7)


//在数组后添加任意个数组元素(用剩余参数)
////...rest 接受剩余参数，数据类型为数组
// function push(arr,...rest){
//    for(var i=0;i<rest.length;i++){
//    	arr[arr.length]=rest[i];
//    }
//    alert(arr);
// }
// var zu=[1,2,3]
// push(zu,4,5,6,7)


//数组排序
//默认值  四种方法
// function sort(arr,type='>'){
//   // type=type||'<'
//   // type=(type==undefined?'<':type);
//   if(type=='<'){
//     sortUp(arr);
//   }else if(type=='>'){
//   	sortDown(arr);
//   }
// }
// function sortUp(arr){
// for(var i=0;i<arr.length;i++){
//   for(var j=i+1;j<arr.length;j++){
//    if(arr[i]>arr[j]){
//    	var temp=arr[i];
//    	arr[i]=arr[j];
//    	arr[j]=temp;
//    }
//  }
// }
// console.log(arr);
// }
// function sortDown(arr){
// for(var i=0;i<arr.length;i++){
//   for(var j=i+1;j<arr.length;j++){
//    if(arr[i]<arr[j]){
//    	var temp=arr[i];
//    	arr[i]=arr[j];
//    	arr[j]=temp;
//    }
//  }
// }
// console.log(arr);
// }
// var arr=[14,26,13]
// sort(arr);


 
// 判断数组存在某一个特定值
// function exist(arr,num){
// for(var i=0;i<arr.length;i++){
// 	if(!(typeof arr=='object'&&arguments.length>1)){
//        return "输入有误";     
// 	}
// if(arr[i]==num){
// 	return true;
// }
// }
// return false;
// }

// arr=[9,8,7,6,4,3,4,5];
// alert(exist(arr,5));



//数组转换成字符串
// function join(arr,str){
// var string="";
// for( var i=0;i<arr.length;i++){
// 	// console.log(string)
//    if(i<arr.length-1){
//       string+=arr[i]+str;
//    }else{
//    	string+=arr[i];
//    }
// }
// return string;
// // console.log(string)
// // 
// }
// var arr=[9,8,7,6,4,3,4,5];
// alert(join(arr,'-'));



//过滤filter   筛选数组里面是偶数的数组元素

// function filter(arr){
// 	var arr1=[];
// for(var i=0;i<arr.length;i++){
// 	if(arr[i]%2==0){
//       arr1[arr1.length]=arr[i];
// 	}
// }
// return arr1;
// }
// var arr=[9,8,7,6,4,3,4,5];
// alert(filter(arr));



//函数调用函数
// function aa(num1,num2){
// return num1+num2;
// }
// function bb(num1,num2){
// return num1*num2;
// }
// function cc(num1,num2){
// return num1-num2;
// }
// function math(num1,num2,fn){
// 	return fn(num1,num2);
// }
// alert(math(8,4,aa));



//映射
// var arr=[1,2,3,4,5,6]
// function map(arr,fn){
// 	for(var i=0;i<arr.length;i++){
//       arr[i]=fn(arr[i]);
// 	}
// 	return arr;
// }
// var result=map(arr,function(x){
// 	 return x*3;})
// alert(result);



//筛选
// var arr=[1,2,3,4,5,6]
// function filter(arr,fn){
//    var newarr=[];
//    for(var i=0;i<arr.length;i++){
//    	if(fn(arr[i])){
//    		newarr[newarr.length]=arr[i];
//    	}
   	
//    }
//    return newarr;
// }
// var result=filter(arr,function(x){
//     return x%2==1;
// })
// alert(result);




//9月9日

//寻找一个值首次出现的位置
// function indexof(arr,x){
// for(var i=0;i<arr.length;i++){
// if(arr[i]==x){
//    return i;
// }
// }
// return -1;
// }
// a=[6,4,3,1,6,8,1]
// alert(indexof(a,2));



////寻找一个值最后一次出现的位置
///
// function indexof(arr,x){
// for(var i=arr.length;i>-1;i--){
// if(arr[i]==x){
//    return i;
// }
// }
// return -1;
// }
// a=[6,4,3,1,6,8,1]
// alert(indexof(a,2));
// 
// 自己的方法
// function lastindexof(arr,x){
//  var b=-1;
// for(var i=0;i<arr.length;i++){
// if(arr[i]==x){
//   b=i;
// }
// }
// return b;
// }
// a=[6,4,3,1,6,8,1]
// alert(lastindexof(a,1));




//反转
// function reverse(arr){
// var newarr=[];
// for(var i=arr.length-1;i>-1;i--){
//    push(newarr,arr[i]);
// }
// return newarr;
// }
// function push(arr,...rest){
// for(var i=0;i<rest.length;i++){
// arr[arr.length]=rest[i];
// }
// }
// a=[6,4,3,1,6,8,1]
// console.log(reverse(a));



//万能的删除
// function splice(arr,pos,num){
//    var newarr=[];
//    for(var i=0;i<arr.length;i++){
//       if(i<pos+num&&i>=pos){
//          continue;
//       }
//    newarr[newarr.length]=arr[i];
//    }
// return newarr;
// }
// a=[6,4,3,1,6,8,1]
// console.log(splice(a,3,3));



//万能的添加
// function spliceAdd(arr,pos,...rest){
//    var newarr=[];
//    for(var i=0;i<arr.length;i++){
//       for(var i=0;i<pos;i++){
//          newarr[newarr.length]=arr[i];
//       }
//       for(var j=0;j<rest.length;j++){
//              newarr[newarr.length]=rest[j];
//          }
//       for(var i=pos;i<arr.length;i++){
//          newarr[newarr.length]=arr[i];
//       }
   
//    }
// return newarr;
// }
// a=[1,2,3,4,'像首歌']
// console.log(spliceAdd(a,4,1,2,3,4));




//万能的添加和删除
// function splice(arr,pos,num,...rest){
//    var newarr=spliceCancle(arr,pos,num);
//     if(rest.length>0){
//       newarr=spliceAdd(newarr,pos,...rest);
//     }
//     return newarr;
// }
// function spliceCancle(arr,pos,num){
//    var newarr=[];
//    for(var i=0;i<arr.length;i++){
//       if(i<pos+num&&i>=pos){
//          continue;
//       }
//    newarr[newarr.length]=arr[i];
//    }
// return newarr;
// }
// function spliceAdd(arr,pos,...rest){
//    var newarr=[];
//    for(var i=0;i<arr.length;i++){
//       for(var i=0;i<pos;i++){
//          newarr[newarr.length]=arr[i];
//       }
//       for(var j=0;j<rest.length;j++){
//              newarr[newarr.length]=rest[j];
//          }
//       for(var i=pos;i<arr.length;i++){
//          newarr[newarr.length]=arr[i];
//       }
   
//    }
// return newarr;
// }
// var a=[1,2,3,4,5,6,7]
// console.log(splice(a,3,3,'a','b'));



//重新练习回调函数
// function map(arr,fn){
//    var newarr=[];
//     for(var i=0;i<arr.length;i++){
//        newarr[newarr.length]=fn(arr[i]);
//     }
//     return newarr;
// }
// var a=[1,2,3,4,5,6,7,8];
// var result=map(a,function(value){
//     return value*2;
// })

// alert(result);

// function filter(arr,fn){
//    var newarr=[];
// for(var i=0;i<arr.length;i++){
//     if(fn(arr[i])){
//       newarr[newarr.length]=arr[i];
//     }

// }
// return newarr;
// }
// var a=[1,2,3,4,5,6,7,8];
// var result=filter(a,function(value){
//     return value%2==0;
// })
// alert(result);



//some(数组中只要有一个大于0返回值为true)
// function some(arr,fn){
//    for(var i=0;i<arr.length;i++){
//       if(fn(arr[i])){
//          return true;
//       }
//    }
//    return false;
// }
// var arr=[-1,0,2,3,4,5];
// var result=some(arr,function(value){
//     return value>0;
// })
// alert(result);



//every(数组中全部大于0返回值为true)
// function every(arr,fn){
//    for(var i=0;i<arr.length;i++){
//       if(!fn(arr[i])){
//          return false;
//       }
//    }
//    return true;
// }
// var arr=[1,10,2,3,4,5];
// var result=every(arr,function(value){
//     return value>0;
// })
// alert(result);


//自调用
//(function zi(){
//})()
//
//
//递归函数
// function fn(num){
//    if(num<5){
//     fn(num+1);
//    }
//    alert(num) ; 
// }
//  fn(1);




//两种拷贝方式
//传地址（浅拷贝）
// var arr=[1,2,3,4,5]
// var arr1=arr;
// arr[1]='x';
// alert(arr);
// alert(arr1);
//传值（深拷贝）
// var arr=[1,2,3,4,5]
// var arr1=[];
// for(var i=0;i<arr.length;i++){
//    arr1[i]=arr[i];
// }
// arr[1]='x';
// alert(arr);
// alert(arr1);



//数组的拷贝
 // function copy(arr){
 //   var newarr=[];
 //   for(var i=0;i<arr.length;i++){
 //      if(typeof arr[i]=='object'){
 //         newarr[i]=copy(arr[i]);
 //      }else{
 //         newarr[i]=arr[i];
 //      }

 //   }
 //   return newarr;
 // }
 // arr=[1,2,3,4,5];
 // var arr1=copy(arr);
 // arr1[2]=0;
 // alert(arr1);
 // 
 


 // var a=function(){
 //   alert(1);
 // }
 
 // function a(){
 //   alert(2);
 // }
 //   a();
 //字面量定义函数优先级高 
 

 //闭包函数
//  function fn(){
//    var num=10;
//    return fn1;
//    function fn1(){
//       num++;
//       return num;
//    }
//  }
// var result=fn();
// alert(result());




//箭头函数
//① var fn=function(a){
//    return a;
// }
//②
//
// var fn=a=>a;
// alert(fn(1));
//①和②是等价的


//当里面没有形参时；
// var fn=()=>1;
// alert(fn());

//当里面有多个参数时；
// var fn=(a,b)=>a+b;
// alert(fn(1,2));


//当里面有很多代码时，用大括号；
// var fn=(a,b)=>{
//    alert(a);
//    alert(a+b);
//    return [a,b];
// };
// alert(fn(1,2));


//注意 ：箭头函数中没有arguments对象
//


// 用箭头函数代替回调函数
// function map(arr,fn){
//    var newarr=[];
//     for(var i=0;i<arr.length;i++){
//        newarr[newarr.length]=fn(arr[i]);
//     }
//     return newarr;
// }
// var a=[1,2,3,4,5,6,7,8];
// // var result=map(a,function(value){
// //     return value*2;
// // })
// var result=map(a,(value)=> value*2)
// alert(result); 


// let num=1;
// {
//    // let num='a';
//    alert(num);
//    {
//       alert(num)
//        num=20;
//       alert(num)
//    }
// }


// for(var i=0;i<10;i++){
   
// }
// alert(i);



// let str='张三';
// alert(escape(str));
// //对汉字进行编码
// //结果：%u5F20%u4E09
// alert(unescape('%u5F20%u4E09'));
// //对汉字进行解码
// //结果：张三
// alert(Number(123));//123
// alert(Number(0b1111));//15
// alert(Number(false));//0
// alert(Number(null));//0
// alert(Number(undefined));//NAN
// alert(Number('123'));//123
// alert(Number('00123'));//123
// alert(Number('0123'));//83   默认为八进制
// alert(Number('01239'));//1239
// alert(Number(123.00));//123
// alert(Number('123.00'));//123
// alert(Number('123.01.2'));//NAN
// alert(Number('123px'));//NAN
// alert(Number('abcd'));//NAN
// alert(Number('true'));//NAN
// 
// alert(String(true));//true
//
// alert(Boolean(''));//false
// alert(Boolean(NaN));//false
// alert(Boolean(undefined));//false
// alert(Boolean(false));//false
// alert(Boolean(0));//false
// alert(Boolean(null));//false

//字符串转换为整数
// alert(parseInt('1234'))//1234
// alert(parseInt('0b1111'))//0
// alert(parseInt('100px'))//100
// alert(parseInt('100px200'))//100
// alert(parseInt('-100px'))//-100
// alert(parseInt('-1.00px'))//-1
// alert(parseInt('abc100px200'))//NaN
//开头是数字或空格或正负号开头的，从第一个数字字符开始，到第一个非数字字符结束，中间转换为整数；

//字符串转换为小数
// alert(parseFloat('1234'))//1234
// alert(parseFloat('100.5px'))//100.5
// alert(parseFloat('1234px'))//1234

//is not a nunber   双重否定  是数字的结果为false；不是数字的结果为true
// alert(isNaN(0));//flase
// alert(isNaN(false));//flase
// var a;
// alert(isNaN(a));//true


// var a='10';
// alert(a*1);//隐式转换
// alert(Number(a));//强制转换


// var a;
//第一种
// if(a==undefined){
//   a='x';
// }else{
//    a=a;
// }
// alert(a)
// 第二种
// if(a){
//   a=a;
// }else{
//    a='x';
// }
// alert(a)


//对象
//
//创建对象
//第一种创建方法:json
// let zhangsan={

// }
//第二种创建方法:构造函数
// function Person(){

// }
// let zhangsan=new Person();
// let lisi=new Person();
// var scy=new Person();
//添加属性 方法
//谁    什么    等于 
// zhangsan.age=18;
// zhangsan.name='zhangsan';
// console.log(zhangsan);

//方法
// zhangsan.say=function(){
//    alert(zhangsan.name)
// }

//访问
//谁    什么    等于 
// alert(zhangsan.name);
// alert(zhangsan.age);
// zhangsan.say();


// lisi.age=22;
// lisi.name='liujialaoda';
// lisi.sex='man';
// console.log(lisi);
// alert(lisi.age);
// alert(lisi.sex);


// scy.name='shencaiyu';
// scy.age=15;
// scy.sex='女汉子';
// scy.weight=20;
// scy.height=180;
// console.log(scy);


// var a=[];
// for(var i=0;i<10;i++){
// 	a[i]=function(){
// 		alert(i);
// 	}
// }
// a[2]();//10
// a[5]();//10


// var a=[];
// for(let i=0;i<10;i++){
// 	a[i]=function(){
// 		alert(i);
// 	}
// }
// a[2]();//2
// a[5]();//5



// var num=1;
// let num=2;//let不能重复声明
// const num=2;
// alert(num);
// alert(num);
// 
// 



///////构造函数
// function student(){

// }
// let zhangsan=new student();
// zhangsan.age=18;
// zhangsan.name='zhangsan';
// zhangsan.say=function(){
// 	alert(zhangsan.name);
// }
// console.log(zhangsan);
// alert(zhangsan.age);
// zhangsan.say();




// function student(){
// 	this.name='zhangsan';
// 	this.age=20;
// 	this.sex='boy';
// 	this.say=function(){
// 		alert(1);
// 	}
// }

// let zhangsan=new student();
// zhangsan.height=180;
// console.log(zhangsan);
// let li=new student();
// li.name='lisi';
// console.log(li);
// zhangsan.height=180;





// function student(name,age,sex){
// 	this.name=name;
// 	this.age=age;
// 	this.sex=sex;
// 	this.say=function(){
// 		alert(1);
// 	}
// }
// let zhangsan=new student('zhangsan',null,'nv')
// console.log(zhangsan);




// function student(name,sex,age,num){
// 	this.sex=sex;
// 	this.name=name;
//     this.num=num;
// 	this.age=age;
//     this.say=function(){
// 		alert(1);
// 	}
// }
// let zhangsan=new student('zhangsan','女',18,1462141532);
// console.log(zhangsan);
// alert(zhangsan.say());//1,undefined
// alert(zhangsan.say);//弹函数体代码




//访问对象中的元素的两种方法
// alert(zhangsan.age);
// alert(zhangsan['age']);
// zhangsan.say();
// zhangsan['say']();


//for in 遍历
// for(let i in zhangsan){
// 	console.log(`${i}`);
// 	alert(typeof i)
// 	// console.log(`${i}-${zhangsan[i]}`);
// }



//声明后添加属性
// let sang={};
// sang.name='ang';
// sang.age=19;
// sang.say=function(){
// 	alert(1);
// }
// alert(sang.constructor);//返回它的构造函数


// 声明同时添加属性
// let sang={
// 	//属性（引号可加可不加）  冒号 值  逗号（必须有）//最后一个逗号可加可不加
// 'name':'sang',
// 'age':19,
// say:function(){
// 	alert(1);
// }
// }
// console.log(sang)
// sang.say();




// //用json写一个对象
// let phone={
// 	'name':'huawei',
// 	'size':'5寸',
// 	'price':2000
// }
// console.log(phone);
// for(let i in phone){
// 	console.log(`${i}-${phone[i]}`);	
// }



//用类创建
// class Student{
// 	constructor(){
// 		this.name='zhangsan';
// 		this.age=15;
// 		this.say=function(){
// 			alert(1);
// 		}
// 	}
// 	//添加方法
// 	study(){
//       alert(2);
// 	}
// }
// let zhangsan=new Student();
// console.log(zhangsan);
// study();




//prototype 原型对象？？？？？



//传参
//  function student(name,sex,age,num){
//  	this[1]='a';//属性也可以写成数字
//  	this[2]='b';
// 	this.sex=sex;
// 	this.name=name;
//     this.num=num;
// 	this.age=age;
// 	this.brain=`${this.name}脑子`;
//     this.say=function(value){
// 		alert(value);
// 	}
// 	//在方法中可以调用自己的属性或方法
// 	this.study=function(){
// 		alert(this.brain);//输出自己的姓名、脑子
// 	}
// 	this.speech=function(value){
// 		this.say(value);
// 	}
// }
// //属性传参在实例化时传
// let zhangsan=new student('zhangsan','女',18,1462141532);
// zhangsan.say('halou');//方法传参：在调用的时候传参
// zhangsan.study();
// zhangsan.speech('yanjiang');
// console.log(zhangsan);



//myArry
//数组
// var arr=new Array('a','b','c','d');//新建数组
// console.log(arr);

//模仿数组
function myArray(){
 
 //this[0]=arguments[0];
for(let i=0;i<arguments.length;i++){
     this[i]=arguments[i];
}
this.length=arguments.length;
//加入新的元素
this.push=function(){
	for(let i=0;i<arguments.length;i++){
		this[this.length]=arguments[i];
		this.length++;
	}
}
this.indexof=function(value){
    for(let i=0;i<this.length;i++){
    	if(this[i]==value){
    		return i;
    	}
    }
    return -1;
}
this.lastindexof=function(value){
    for(let i=this.length-1;i>-1;i--){
    	if(this[i]==value){
    		return i;
    	}
    }
    return -1;
}
this.include=function(value){
     for(let i=0;i<this.length;i++){
     	if(this[i]==value){
     		return true;
     	}
     }
     return false;
}
this.reverse=function(){
     let newarr=[];
     for(let i=this.length-1;i>-1;i--){
     	newarr[newarr.length]=this[i];
     }
     return newarr;
}
this.join=function(value){
	let str='';
	for(let i=0;i<this.length;i++){
		if(i<this.length-1){
			str+=this[i]+value;
		}else{
			str+=this[i];
		}
	}
	return str;
}
this.sortup=function(){
	for(let i=0;i<this.length;i++){
		for(let j=i+1;j<this.length;j++){
            let temp;
            if(this[i]>this[j]){
            	temp=this[i];
            	this[i]=this[j];
            	this[j]=temp;
            }
		}
	}
	return this;
}
this.sortdown=function(){
	for(let i=0;i<this.length;i++){
		for(let j=i+1;j<this.length;j++){
            let temp;
            if(this[i]<this[j]){
            	temp=this[i];
            	this[i]=this[j];
            	this[j]=temp;
            }
		}
	}
	return this;
}
this.sort=function(value){
   value=value==undefined?'up':value;
   if(value=='up'){
   	console.log(this.sortup());
   }else if(value=='down'){
   	console.log(this.sortdown());
   }else{
   	alert('输入有误');
   }
}
this.some=function(fn){
     for(let i=0;i<this.length;i++){
     	if(fn(this[i])){
     		return true;
     	}
     }
     return false;
}
this.every=function(fn){
	for(let i=0;i<this.length;i++){
     	if(fn(this[i])){
     		return false;
     	}
     }
     return true;
}
this.map=function(fn){
	for(let i=0;i<this.length;i++){
        this[i]=fn(this[i]);
	}
	return this;
}
this.filter=function(fn){
	let a=[];
	for(let i=0;i<this.length;i++){
        if(fn(this[i])){
        	a[a.length]=this[i];
        }
	}
	return a;
}
}
let arr=new myArray('a','b','c','d',1,2,3);
arr.push('x','y','z');
console.log(arr);
arr.indexof('c');
console.log(arr.indexof('c'));
console.log(arr.lastindexof('y'));
console.log(arr.include('a'));
let s=arr.some(function(value){
   return  typeof value=='number';
})
console.log(s);
console.log(arr.reverse());
console.log(arr.join('-'));
arr.sort('up');
let e=arr.every(function(value){
   return value>0;
})
console.log(e);
let m=arr.map(function(value){
   return value=value+2;
})
console.log(m);
let f=arr.filter(function(value){
    return typeof value=='number';
})
console.log(f);



//练习用类构造对象
// class teacher{
// 	constructor(name,age){
// 		this.name=name;
// 		this.age=age;
// 		// this.kemu=function(value){
//   //   	alert(value);
//   //   }
// 	}

//     kemu(value){
//     	alert(value);
//     }
// }
// let xiaoli=new teacher('xiaoli',25);
// xiaoli.kemu('math');
// console.log(xiaoli);
