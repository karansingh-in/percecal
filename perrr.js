function calculate(){

var cs=parseFloat(document.getElementById('bookone').value);
var mcs=parseFloat(document.getElementById('bookonem').value);

var p=parseFloat(document.getElementById('bookeight').value);
var mp=parseFloat(document.getElementById('bookeightm').value);

var c=parseFloat(document.getElementById('booknine').value);
var mc=parseFloat(document.getElementById('bookninem').value);

var b=parseFloat(document.getElementById('bookten').value);
var mb=parseFloat(document.getElementById('booktenm').value);

var m=parseFloat(document.getElementById('bookseven').value);
var mm=parseFloat(document.getElementById('booksevenm').value);

var e1=parseFloat(document.getElementById('booktwo').value);
var me1=parseFloat(document.getElementById('booktwom').value);

var e2=parseFloat(document.getElementById('bookthree').value);
var me2=parseFloat(document.getElementById('bookthreem').value);

var h=parseFloat(document.getElementById('bookfour').value);
var mh=parseFloat(document.getElementById('bookfourm').value);

var hc=parseFloat(document.getElementById('bookfive').value);
var mhc=parseFloat(document.getElementById('bookfivem').value);

var g=parseFloat(document.getElementById('booksix').value);
var mg=parseFloat(document.getElementById('booksixm').value);

if(cs>mcs || p>mp ||c>mc ||b>mb ||m>mm ||h>mh ||hc>mhc ||g>mg ||e1>me1 ||e2>me2 ){
alert("Please enter the correct marks!")
}

else{
	const e=(e1+e2)/2;
	const me=(me1+me2)/2;

	const pcb=(p+c+b)/3;
	const mpcb=(mp+mc+mb)/3;

	const hcg=(hc+g)/2;
	const mhcg=(mhc+mg)/2;
	
/*	var float32 = new Float32Array([h, pcb, hcg, cs, m]);
	
	float32.sort();
	var top=new Float32Array[5];
	    top[0]=e;
        top[1]=float32[1];
        top[2]=float32[2];
        top[3]=float32[3];
        top[4]=float32[4];

        var total=0.0;*/


const marks = [h, pcb, hcg, cs, m]
const max = [mh,mpcb,mhcg,mcs,m]
marks.sort(function(a, b){return b-a});
max.sort(function(a, b){return b-a});

const top5 = marks.slice(0, 4);
const top5m = max.slice(0, 4);

top5.unshift(e)
top5m.unshift(me)

const reducer = (accumulator, curr) => accumulator + curr;
const total = top5.reduce(reducer)
const mtotal = top5m.reduce(reducer)
const per=(total/mtotal) * 100;



  //    array = str.match(/\d+(?:\.\d+)?/g).map(Number)

//console.log(array)

//var obtain=cs+p+c+b;
//document.getElementById("obtain").innerHTML=obtain;
//var per=(total/210)*100;
document.getElementById("per").innerHTML=per.toFixed(2)+"%";
document.getElementById("score").innerHTML=total;
document.getElementById("all").innerHTML=mtotal;
}
return false;
}