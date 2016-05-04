$(function(){
	var boxs=$('.banner-lb')[0];
	var as=getChild(boxs);
	var btns=$('.btn')[0];
	var lis=getChild(btns);
	var index=0;
	var t=setInterval(move,2000);
	var banner=$('.banner')[0];
	var arr=['#CC1005',"#7AB206","#51B4EB","#2C6CFF","#F2D7DC","#6113FF","#EA9900","#53BE56"]
	function move(){     
			index++;      
			if(index>as.length-1){    
				index=0;
			}
			for(var i=0;i<as.length;i++){
				animate(as[i],{opacity:0},600);   
                lis[i].style.background="";
			}
			animate(as[index],{opacity:1},600);
			lis[index].style.background="#ff3c3c";
			banner.style.background=arr[index];
		}
    for(var i=0;i<lis.length;i++){   
		lis[i].aa=i;   
		lis[i].onclick=function(){
			for(var j=0;j<lis.length;j++){
				animate(as[j],{opacity:0},600);
				lis[j].style.background="";
			}
			animate(as[this.aa],{opacity:1},600);
			lis[this.aa].style.background="#ff3c3c";
		}
	}
	var boxs=getClass('banner')[0];
	boxs.onmouseover=function(){
		clearInterval(t);   
	}
	boxs.onmouseout=function(){
		t=setInterval(move,2000);  
	}
	var btnleft=getClass('btn1')[0];
	btnleft.onclick=function(){  
		index--;   
		if(index==-1){ 
			index=as.length-1;
		}
		for(var i=0;i<as.length;i++){
			animate(as[i],{opacity:0},600);
            lis[i].style.background="";
		}
		animate(as[index],{opacity:1},600);
		lis[index].style.background="#ff3c3c";     
	}
	var btnright=getClass('btn2')[0];
	btnright.onclick=function(){
		move();
	}


function tab(ss){
	var jkhg=$('.jk-b')[ss];
	var imgs=getChild(jkhg);	
	var indexs=$('.index')[ss];
	var ls=getChild(indexs);
	var aw=parseInt(getStyle(imgs[0],'width'));
	jkhg.style.width=aw*imgs.length+'px';
	var aa=0;
	var tt=setInterval(bb,3000);
	function bb(){
		aa++;
		if(aa==imgs.length){
			aa=0;
		}
		for(var i=0;i<imgs.length;i++){
			ls[i].className="";
		}
		ls[aa].className="hot";
		animate(jkhg,{marginLeft:-aa*aw},400);
	}
    for(var i=0;i<ls.length;i++){   
		ls[i].cc=i;   
		ls[i].onmouseover=function(){
			for(var j=0;j<ls.length;j++){
				
				ls[j].className="";
			}
			animate(jkhg,{marginLeft:-this.cc*aw},400);
			ls[this.cc].className="hot";
			aa=this.cc;
		}
	}
	var box=$('.jkhg-b')[ss];
	box.onmouseover=function(){
		clearInterval(tt);    
	}
	box.onmouseout=function(){
		tt=setInterval(bb,3000);  
	}
	}
	var jk=$('.jkhg-b');
	for(var i=0;i<jk.length;i++){
		tab(i);
	}


	var sg=$('.shangou-center')[0];
	var sgbtn=getChild(sg);
	var sgbox=$('.shangou-bottom');
    for(var i=0;i<sgbtn.length;i++){
    	sgbtn[i].ff=i;
    	sgbtn[i].onclick=function(){
    		for(var j=0;j<sgbox.length;j++){
    			
    		}
    	}
    }

    var cuo=$('.cuo')[0];
    var head2=$('.head2')[0];
    var img=$('img',head2)[0];
    cuo.onclick=function(){
    	img.style.display="none";
    	head2.style.display="none";
    	alert(1)
    }
})
