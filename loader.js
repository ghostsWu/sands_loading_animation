(function() { 
	var svg = '<div style="opacity : 1;transform:rotate(0deg) translate(0px,0px); transition-property: opacity,transform; transition-duration: 1s; transition-timing-function: linear; transition-delay: 0; width: 11px;height: 41px;position: absolute; left: 50%;top: 10px; margin-left: -5.5px; margin-top: 0px; transform-origin:50% 100%;"><svg version="1.1" x="0px" y="0px" width="11px" height="41px" viewBox="0 0 22.946 85.523" enable-background="new 0 0 22.946 85.523" xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" fill="#AB965D" d="M6.226-0.25c-0.15,5.994,0.409,11.897,2.436,17.581c1.262,3.541,3.21,6.706,5.43,9.743c3.67,5.021,6.63,10.448,8.019,16.556c1.705,7.488,0.907,14.674-3.333,21.262c-0.735,1.142-1.638,2.175-2.567,3.216c0.515-1.984,0.334-4.016,0.338-5.965c0.007-3.166-0.307-6.368-1.029-9.494C14.18,46.872,11.803,41.576,8.32,36.77c-2.556-3.525-5.077-7.078-6.654-11.188C-1.445,17.469,0.01,9.883,4.296,2.612c0.56-0.95,1.302-1.797,1.662-2.862C6.047-0.25,6.137-0.25,6.226-0.25z"/></svg></div>';
	var fal = false;
	var div = document.createElement("div");
	div.id = "pageloading"
	div.style.position="fixed";
	div.style.width="83px";
	div.style.height="83px";
	div.style.backgroundColor="rgba(29, 0, 0, 0.95)";
	div.style.top="50%";
	div.style.left="50%";
	div.style.zIndex="9999";
	div.style.transition="opacity .5s linear 0s";
	div.style.marginTop="-51px";
	div.style.marginLeft="-51px";
	div.style.padding="10px";
	div.style.borderRadius="8px";
	document.body.appendChild(div);

	for (var i = 0; i < 18; i++) {
		document.getElementById("pageloading").innerHTML = document.getElementById("pageloading").innerHTML+svg;
	}

	for (var i = 0; i < document.getElementById("pageloading").getElementsByTagName("div").length; i++) {
		document.getElementById("pageloading").childNodes[i].style.transform = "rotate(" +(i * 20) +  "deg) translate(0px,0px)"
	}


	function randomNo(){ 
        var Range = 17 - 0; 
        var Rand = Math.random(); 
        return(0 + Math.round(Rand * Range)); 
	} 

	function op(){
		if (fal) {
			return false;
		}else{
			for (var i = 0; i < 3; i++) {
				document.getElementById("pageloading").childNodes[randomNo()].style.opacity = "0.3";
			}
			setTimeout(function(){
				for (var i = 0; i < 3; i++) {
					document.getElementById("pageloading").childNodes[randomNo()].style.opacity = "1";
				}
				op();
			},200);
		}
		
	}

	op();

	window.onload = function(){
		
		return;

		fal = true;
		div.style.opacity="0";
		for (var i = 0; i < document.getElementById("pageloading").getElementsByTagName("div").length; i++) {
			document.getElementById("pageloading").childNodes[i].style.transform = "rotate(" +(i * 20) +  "deg) translate(0px,-50px)";

		}
		setTimeout(function(){
			
			div.parentNode.removeChild(div);
		},500)
	}

	

})(); 

