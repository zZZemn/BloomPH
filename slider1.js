var i = 0; 			
var images = [];
var images1 = [];
var images2 = [];
var images3 = [];	
var time = 2000;	
	 

images[0] = "windbreakers/windBreaker1.jpeg";
images[1] = "windbreakers/windBreaker2.jpeg";
images[2] = "windbreakers/windBreaker3.jpeg";
images[3] = "windbreakers/windBreaker4.jpeg";

images1[0] = "windbreakers/windBreaker3.jpeg";
images1[1] = "windbreakers/windBreaker4.jpeg";
images1[2] = "windbreakers/windBreaker1.jpeg";
images1[3] = "windbreakers/windBreaker2.jpeg";

images2[0] = "windbreakers/windBreaker2.jpeg";
images2[1] = "windbreakers/windBreaker3.jpeg";
images2[2] = "windbreakers/windBreaker4.jpeg";
images2[3] = "windbreakers/windBreaker1.jpeg";

images3[0] = "windbreakers/windBreaker4.jpeg";
images3[1] = "windbreakers/windBreaker1.jpeg";
images3[2] = "windbreakers/windBreaker2.jpeg";
images3[3] = "windbreakers/windBreaker3.jpeg";

function changeImg(){
	document.slide1.src = images[i];
	document.slide2.src = images1[i];

	
	if(i < images.length - 1){
	  
	  i++; 
	} else { 
		
		i = 0;
	}

	setTimeout("changeImg()", time);
}
window.onload=changeImg; 








