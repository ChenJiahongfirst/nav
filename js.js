// JavaScript Document
window.onload=function(){
	var lis=document.getElementsByTagName('li');
	for(i=0;i<lis.length;i++){
		lis[i].i=i;//优化部分的代码
		lis[i].onmouseover=function(){
			// 鼠标经过lis[i]时，给lis[i]添加类
			this.className='lihover';
			//优化
			var h0=(this.i-1)*30+50;//lis[i]“顶部”距浏览器的高度；注意this.i
			var y=this.getElementsByTagName('div')[0].offsetHeight;//div的高度
			var h=this.getElementsByTagName('div')[0].style.top+y;//鼠标经过时的div“底部”距浏览器的高度
			//div太短，导致无法与lis[i]接触
			if(h<h0){
				this.getElementsByTagName('div')[0].style.top=h0+32+'px';	
			}
			//div超出视线
			if(y>350){
				this.getElementsByTagName('div')[0].style.top='52px';	
			}		
		}
		
		
		lis[i].onmouseout=function(){
			this.className='';		
		}	
	}	

}