
	var map = new BMap.Map("allmap");
	var point = new BMap.Point(116.331398,39.897445);
	map.centerAndZoom(point,12);
	// 创建地址解析器实例
	var myGeo = new BMap.Geocoder(point);

	// 将地址解析结果显示在地图上,并调整地图视野
	myGeo.getPoint("北京市朝阳区高碑店路1336号新龙国际大厦", function(point){
		if (point) {
			var marker = new BMap.Marker(point);  // 创建标注
			map.centerAndZoom(point, 16);
			map.addOverlay(new BMap.Marker(point),marker);
			var label = new BMap.Label("我是文字标注哦",{offset:new BMap.Size(20,-10)});
			marker.setLabel(label);
			map.enableScrollWheelZoom(true);  
		}else{
			alert("您选择地址没有解析到结果!");
		}
	}, "北京市");
	var map2 = new BMap.Map("allmap2");
	var point2 = new BMap.Point(116.331398,39.897445);
	map2.centerAndZoom(point2,12);
	// 创建地址解析器实例
	var myGeo2 = new BMap.Geocoder(point2);

	// 将地址解析结果显示在地图上,并调整地图视野
	myGeo2.getPoint("北京市朝阳区高碑店路1336号新龙国际大厦", function(point){
		if (point) {
			var marker = new BMap.Marker(point);  // 创建标注
			map2.centerAndZoom(point, 16);
			map2.addOverlay(new BMap.Marker(point),marker);
			map2.enableScrollWheelZoom(true);  
		}else{
			alert("您选择地址没有解析到结果!");
		}
	}, "北京市");
	// home 导航
	var bannerList=document.querySelectorAll(".banner-list>li")
	var banner=document.querySelector(".banner")
	console.log(banner)
	var bannerUl=document.querySelector(".banner-list")
	console.log(bannerUl)


	var bannerListImg=document.querySelectorAll(".banner-list>li>img")

	var bannerDianImg=document.querySelectorAll(".banner-dian>li>img")
	var bannerUl=document.querySelector(".banner-list")
	var bannerLeft=document.querySelector(".banner-left")
	var bannerRight=document.querySelector(".banner-right")
	var bannerListWidth=bannerList[0].offsetWidth;
	var num=0
	var len=bannerList.length;
	window.onresize = function(){
	 	 	// console.log(bannerListImg[0].offsetWidth)
	 	 	bannerListWidth=bannerList[0].offsetWidth;
	 	 	 banner.style.height=bannerListImg[0].offsetHeight+"px"
	 	 	 bannerUl.style.height=bannerListImg[0].offsetHeight+"px"
	 	 	 


	}

	window.onload = function(){
		setTimeout(function(){
			window.scrollTo(0,0);
			banner.style.height=bannerListImg[0].offsetHeight+"px"
		 	bannerUl.style.height=bannerListImg[0].offsetHeight+"px"
		 	bannerListWidth=bannerList[0].offsetWidth;
		 	// console.log(bannerListWidth)
		},10);
		
	}
	 bannerLeft.onclick=function(){
	 	// console.log(bannerListWidth)
	 	num--;
	 	if(num==-1){
	 		bannerUl.style.left=-bannerListWidth*(len-1)+'px'
	 		num=1
	 	}
	 	for(var i=0;i<bannerDianImg.length;i++){
	 		if(i==num){
	 			bannerDianImg[i].setAttribute('src',"img/diamond center.png")
	 		}else{
	 			bannerDianImg[i].setAttribute('src',"img/diamond bottom.png")
	 		}
	 	}
	 	bannerUl.style.left=-bannerListWidth*num+'px'
	 }
	 bannerRight.onclick=function(){
	 	num++;
	 	if(num==2){
	 		bannerUl.style.left=-bannerListWidth*0+'px'
	 		num=0
	 	}
	 	for(var i=0;i<bannerDianImg.length;i++){
	 		if(i==num){
	 			bannerDianImg[i].setAttribute('src',"img/diamond center.png")
	 		}else{
	 			bannerDianImg[i].setAttribute('src',"img/diamond bottom.png")
	 		}
	 	}
	 	bannerUl.style.left=-bannerListWidth*num+'px'
	 }
	 // home banner .banner-center-jian
	 var bannerCenterJian=document.querySelector(".banner-center-jian")
	 	bannerCenterJian.onclick=function(){
	 		num--;
		 	if(num==-1){
		 		bannerUl.style.left=-bannerListWidth*(len-1)+'px'
		 		num=1
		 	}
		 	for(var i=0;i<bannerDianImg.length;i++){
		 		if(i==num){
		 			bannerDianImg[i].setAttribute('src',"img/diamond center.png")
		 		}else{
		 			bannerDianImg[i].setAttribute('src',"img/diamond bottom.png")
		 		}
		 	}
		 	bannerUl.style.left=-bannerListWidth*num+'px'
	 	}

	 	//
	 	 

	 // 点击导航
	 var navlist=document.querySelectorAll(".nav-list>div>a")
	 var navBox=document.querySelectorAll("#con-content>div")
	 for(var i=0;i<navlist.length;i++){
	 	navlist[i].index=i
 		navlist[i].onclick=function(e){
 			e.preventDefault()	
 			var navId=this.getAttribute("href")
 			var navBoxId=navBox[this.index].getAttribute("id")
 			for(var k=0;k<navlist.length;k++){
		 		navlist[k].style.color="#fff"
		 	}
 			for(var j=0;j<navBox.length;j++){
 				navBox[j].style.display="none"
 				
 			}
 			this.style.color="#FF0000";
 			if(navId==navBoxId){
 				navBox[this.index].style.display="block"
 			}
 		}
	 }

	 // home 公司简介
	 var companyList=document.querySelectorAll(".companyList>li")
	 var companydian=document.querySelectorAll(".companydian>li>img")
	 for(var i=0;i<companyList.length;i++){
	 	companydian[i].index=i
	 	companydian[i].onclick=function(){
	 		for(var j=0;j<companydian.length;j++){
	 			companydian[j].setAttribute("src","img/diamond down.png")
	 			companyList[j].style.display="none"
	 		}
	 		this.setAttribute("src","img/diamond center.png")
	 		companyList[this.index].style.display="block"
	 	}
	 }
	  // 商品入驻 公司简介
	 var aboutcompanyListLi=document.querySelectorAll(".aboutcompanyListLi")
	 var aboutcompanydianLi=document.querySelectorAll(".aboutcompanydianLi>img")
	 for(var i=0;i<aboutcompanyListLi.length;i++){

	 	aboutcompanydianLi[i].index=i
	 	aboutcompanydianLi[i].onclick=function(){
	 		for(var j=0;j<companydian.length;j++){
	 			aboutcompanydianLi[j].setAttribute("src","img/diamond down.png")
	 			aboutcompanyListLi[j].style.display="none"
	 		}
	 		this.setAttribute("src","img/diamond center.png")
	 		aboutcompanyListLi[this.index].style.display="block"
	 	}
	 }


	 // home 公司介绍图
	 var aibeiPicLeft=document.querySelector(".aibei-pic-left")
	 var aibeiPicLeftImg=document.querySelector(".aibei-pic-left>img")
	 var aibeiPicCon=document.querySelector(".aibeiPicCon")
	 var aibeiPicRight=document.querySelector(".aibei-pic-right")
	 var aibeiPicRightImg=document.querySelector(".aibei-pic-right>img")

	 var aibeiPicList=document.querySelectorAll(".aibei-pic-list")
	 var aibeiPicContent=document.querySelector(".aibei-pic-content")
	 var aibeiLen=aibeiPicList.length
	 var aibeiPicWidth=aibeiPicCon.offsetWidth
	 var aibeiNum=0;
	 aibeiPicLeft.onclick=function(e){
	 	e.preventDefault()
	 	aibeiNum--;
	 	if(aibeiNum==-1){
	 		aibeiPicContent.style.left=-aibeiPicWidth*(aibeiLen-1)+'px'
	 		aibeiNum=2
	 	}
	 	this.style.background="#ff0109"
	 	aibeiPicLeftImg.setAttribute("src","img/微信图片_20181126162928.png")
	 	aibeiPicRightImg.setAttribute("src","img/微信图片_20181126163144.png")

	 	aibeiPicRight.style.background="#fff"
	 	aibeiPicContent.style.left=-aibeiPicWidth*aibeiNum+'px'
	 	
	 }
	  aibeiPicRight.onclick=function(e){
	  		e.preventDefault()
	 	aibeiNum++;
	 	if(aibeiNum==3){
	 		aibeiPicContent.style.left=-aibeiPicWidth*0+'px'
	 		aibeiNum=0
	 	}
	 	this.style.background="#ff0109"
	 	aibeiPicRightImg.setAttribute("src","img/fa-chevron-right.png")
	 	aibeiPicLeftImg.setAttribute("src","img/fa-chevron-left.png")

	 	aibeiPicLeft.style.background="#fff"
	 	aibeiPicContent.style.left=-aibeiPicWidth*aibeiNum+'px'
	 }
	 	// about 公司介绍图
	 var aboutPicLeft=document.querySelector(".about-pic-left")
	 var aboutPicLeftImg=document.querySelector(".about-pic-left>img")

	 var aboutPicRight=document.querySelector(".about-pic-right")
	 var aboutPicRightImg=document.querySelector(".about-pic-right>img")

	 var aboutPicList=document.querySelectorAll(".about-pic-list")
	 var aboutPicContent=document.querySelector(".about-pic-content")
	 var aboutLen=aboutPicList.length
	 var aboutPicWidth=aibeiPicList[0].offsetWidth
	 var aboutNum=0;
	 aboutPicLeft.onclick=function(){
		
	 	aboutNum--;
	 	if(aboutNum==-1){
	 		aboutPicContent.style.left=-aboutPicWidth*(aboutLen-1)+'px'
	 		aboutNum=2
	 	}
	 	this.style.background="#ff0109"
	 	 aboutPicLeftImg.setAttribute("src","img/微信图片_20181126162928.png")
	 	 aboutPicRightImg.setAttribute("src","img/微信图片_20181126163144.png")

	 	aboutPicRight.style.background="#fff"
	 	aboutPicContent.style.left=-aboutPicWidth*aboutNum+'px'
	 	
	 }
	 aboutPicRight.onclick=function(){
	  		
	 	aboutNum++;
	 	if(aboutNum==3){
	 		aboutPicContent.style.left=-aboutPicWidth*0+'px'
	 		aboutNum=0
	 	}
	 	this.style.background="#ff0109"
	 	aboutPicRightImg.setAttribute("src","img/fa-chevron-right.png")
	 	aboutPicLeftImg.setAttribute("src","img/fa-chevron-left.png")

	 	aboutPicLeft.style.background="#fff"
	 	aboutPicContent.style.left=-aboutPicWidth*aboutNum+'px'
	 }
	 // 首页 点击查看更多 => 合作伙伴
	 var cooperationBtn =document.querySelector(".cooperationBtn")
	 cooperationBtn.onclick=function(e){
	 	e.preventDefault()
	 	window.scrollTo(0,0)
	 	var navId=this.getAttribute("href")
	 	for(var i=0;i<navlist.length;i++){
	 		navlist[i].style.color="#fff"
	 	}
	 	for(var i=0;i<navBox.length;i++){
	 		var navBoxId=navBox[i].getAttribute("id")
	 		if(navId==navBoxId){
	 			navBox[i].style.display="block"
	 			navlist[i].style.color="#FF0000"
	 		}else{
	 			navBox[i].style.display="none"
	 		}
	 	}
	 	
	 }

	

	 // 首页 公司简介=>关于我们
	 var companydesBtn=document.querySelector(".companydesBtn")
	 companydesBtn.onclick=function(e){
	 	window.scrollTo(0,0)
	 	e.preventDefault()	
	 	var navId=this.getAttribute("href")
	 	for(var i=0;i<navlist.length;i++){
	 		navlist[i].style.color="#fff"
	 	}
	 	for(var i=0;i<navBox.length;i++){
 			
	 		var navBoxId=navBox[i].getAttribute("id")
	 		if(navId==navBoxId){
	 			navBox[i].style.display="block"
	 			navlist[i].style.color="#FF0000"
	 		}else{
	 			navBox[i].style.display="none"
	 		}
	 	}
	 }

	  // home 点击下载=》下载App
	 var downloadRight=document.querySelector(".downloadRight")
	 downloadRight.onclick=function(e){
	 	e.preventDefault()
	 	window.scrollTo(0,0)
	 	var navId=this.getAttribute("index")
	 	for(var i=0;i<navlist.length;i++){
	 		navlist[i].style.color="#fff"
	 	}
	 	for(var i=0;i<navBox.length;i++){
	 		var navBoxId=navBox[i].getAttribute("id")
	 		if(navId==navBoxId){
	 			navBox[i].style.display="block"
	 			navlist[i].style.color="#FF0000"
	 		}else{
	 			navBox[i].style.display="none"
	 		}
	 	}
	 }

	 // 首页 招商信息
	 var cooperationCenter=document.querySelectorAll(".cooperation-center>ul>li>span")
	 var cooperationRight=document.querySelectorAll(".cooperation-right>ol>li>img")
	 for(var i=0;i<cooperationRight.length;i++){
	 	cooperationRight[i].index=i
	 	cooperationCenter[i].index=i
	 	cooperationRight[i].onclick=function(e){
	 		e.preventDefault()
	 		for(var j=0;j<cooperationRight.length;j++){
	 			cooperationRight[j].setAttribute("src","img/diamond down.png")
	 			cooperationCenter[j].style.background="#fff"
	 			cooperationCenter[j].style.color="#000"
	 		}
	 		this.setAttribute("src","img/diamond center.png")
	 		cooperationCenter[this.index].style.background=" #FF0000"
	 		cooperationCenter[this.index].style.color="#fff"

	 	}
	 	cooperationCenter[i].onclick=function(e){
	 		e.preventDefault()	
	 		for(var j=0;j<cooperationRight.length;j++){
	 			cooperationRight[j].setAttribute("src","img/diamond down.png")
	 			cooperationCenter[j].style.background="#fff"
	 			cooperationCenter[j].style.color="#000"

	 		}
	 		cooperationRight[this.index].setAttribute("src","img/diamond center.png")
	 		this.style.background=" #FF0000"
	 		this.style.color="#fff"
	 	}
	 }

	 // 商品入驻
	 var recruitmentCenterLi=document.querySelectorAll(".recruitment-center-li>span")
	 var recruitmentRightImg=document.querySelectorAll(".recruitmentRightImg>img")
	 for(var i=0;i<recruitmentRightImg.length;i++){
	 	recruitmentRightImg[i].index=i
	 	recruitmentCenterLi[i].index=i
	 	recruitmentRightImg[i].onclick=function(){
	 	
	 		for(var j=0;j<recruitmentRightImg.length;j++){
	 			recruitmentRightImg[j].setAttribute("src","img/diamond down.png")
	 			recruitmentCenterLi[j].style.background="#fff"
	 			recruitmentCenterLi[j].style.color="#000"
	 		}
	 		this.setAttribute("src","img/diamond center.png")
	 		recruitmentCenterLi[this.index].style.background=" #FF0000"
	 		recruitmentCenterLi[this.index].style.color="#fff"

	 	}
	 	recruitmentCenterLi[i].onclick=function(){
	 
	 		for(var j=0;j<recruitmentCenterLi.length;j++){
	 			recruitmentRightImg[j].setAttribute("src","img/diamond down.png")
	 			recruitmentCenterLi[j].style.background="#fff"
	 			recruitmentCenterLi[j].style.color="#000"

	 		}
	 		recruitmentRightImg[this.index].setAttribute("src","img/diamond center.png")
	 		this.style.background=" #FF0000"
	 		this.style.color="#fff"
	 	}
	 }

	  // about 关于我们
	 var aboutcooperationCenterText=document.querySelectorAll(".aboutcooperationCenterText")
	 var aboutcooperationRightImg=document.querySelectorAll(".aboutcooperation-rightImg")
	 for(var i=0;i<aboutcooperationRightImg.length;i++){
	 	aboutcooperationRightImg[i].index=i
	 	aboutcooperationCenterText[i].index=i
	 	aboutcooperationRightImg[i].onclick=function(){
	 	
	 		for(var j=0;j<recruitmentRightImg.length;j++){
	 			aboutcooperationRightImg[j].setAttribute("src","img/diamond down.png")
	 			aboutcooperationCenterText[j].style.background="#fff"
	 			aboutcooperationCenterText[j].style.color="#000"
	 		}
	 		this.setAttribute("src","img/diamond center.png")
	 		aboutcooperationCenterText[this.index].style.background=" #FF0000"
	 		aboutcooperationCenterText[this.index].style.color="#fff"

	 	}
	 	aboutcooperationCenterText[i].onclick=function(){
	 
	 		for(var j=0;j<aboutcooperationCenterText.length;j++){
	 			aboutcooperationRightImg[j].setAttribute("src","img/diamond down.png")
	 			aboutcooperationCenterText[j].style.background="#fff"
	 			aboutcooperationCenterText[j].style.color="#000"

	 		}
	 		aboutcooperationRightImg[this.index].setAttribute("src","img/diamond center.png")
	 		this.style.background=" #FF0000"
	 		this.style.color="#fff"
	 	}
	 }


	
	var inforpositionLei=document.querySelectorAll(".inforpositionLei")
	var inforpositionDes=document.querySelectorAll(".inforpositionDes")
	var inforpositionLeiImg=document.querySelectorAll(".inforpositionLeiImg")
	for(var j=0;j<inforpositionLei.length;j++){
		inforpositionLei[j].index=j
			inforpositionLei[j].onclick=function(){
				for(var i=0;i<inforpositionLei.length;i++){
					inforpositionDes[i].style.display="none"
					inforpositionLeiImg[i].setAttribute("src","img/微信图片_20181120163944.png")
				}
				inforpositionDes[this.index].style.display="block";
				inforpositionLeiImg[this.index].setAttribute("src","img/微信图片_20181120163952.png")

			}
	}



	// 商家入驻 =》查看全部
	var recruitmentshopBtn=document.querySelector(".recruitmentshopBtn")
	recruitmentshopBtn.onclick=function(){
		window.scrollTo(0,0)
	 	var navId=this.getAttribute("index")
	 	for(var i=0;i<navlist.length;i++){
	 		navlist[i].style.color="#fff"
	 	}
	 	for(var i=0;i<navBox.length;i++){
	 		var navBoxId=navBox[i].getAttribute("id")
	 		if(navId==navBoxId){
	 			navBox[i].style.display="block"
	 		}else{
	 			navBox[i].style.display="none"
	 		}
	 	}
	}
	

	// 关于我们 =》公司动态
	var aboutBtn=document.querySelector(".aboutBtn")
	aboutBtn.onclick=function(e){
	 	e.preventDefault()
		window.scrollTo(0,0)
	 	var navId=this.getAttribute("index")
	 	for(var i=0;i<navlist.length;i++){
	 		navlist[i].style.color="#fff"
	 	}
	 	for(var i=0;i<navBox.length;i++){
	 		var navBoxId=navBox[i].getAttribute("id")
	 		if(navId==navBoxId){
	 			navBox[i].style.display="block"
	 		}else{
	 			navBox[i].style.display="none"
	 		}
	 	}
	}