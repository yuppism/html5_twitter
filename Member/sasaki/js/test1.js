var main;

var storage=window.localStorage;

function init(){
    main=document.getElementById("mainArea");

    storage.clear;

    alert('step1');

    var str="hello";

    main.innerHTML=str;

    alert('step2');

    storage.setItem("key1","value1");
    main.innerHTML=storage.getItem("key1");

    alert('step3');

    storage.setItem("key2","value2");
    storage.setItem("key3","value3");

    main.innerHTML=String(storage.length);

    alert('step4');

    var a;
    var b=storage.length;
    var str="";
    var k;
    for (a=0;a<b;a++){
	k=storage.key(a);
	str+=storage.getItem(k);
	str+=" ";
    }

    main.innerHTML=str;

    alert('step5');

    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext("2d");
    ctx.drawImage(document.images[0], 0, 0);
    alert(canvas.toDataURL("image/png"));

}




