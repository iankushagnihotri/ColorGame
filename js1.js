 var color= generaterandomcolor(6);
   var square=document.querySelectorAll(".square")
 var m=document.querySelector("#m");
  var pickedcolor= pickedrandom();
 var p=document.querySelector("#p");
 var w=document.querySelector("#w");
 var d=document.querySelector("#d");
 d.addEventListener("click",function(){
 	d.textContent="New Color";
 	 color=generaterandomcolor(6);
 	  pickedcolor= pickedrandom();
 	  p.textContent=pickedcolor;
 	   for(var i=0;i<square.length;i++)
 {
 	square[i].style.backgroundColor= color[i];
 }
 w.style.backgroundColor= "blue";
 m.textContent="";
 
 });
 var e=document.querySelector("#e");
 e.addEventListener("click",function()
 {
 	m.textContent="";
 	e.classList.add("select");
 	h.classList.remove("select");
 	 w.style.backgroundColor="blue";
   color=generaterandomcolor(3);
   pickedcolor= pickedrandom();
 	  p.textContent=pickedcolor;
    for(var i=0;i<square.length;i++)
 {
 	if(i<3)
 	{
 	square[i].style.backgroundColor= color[i];
 	 }
 	 else
 	 {
 	 	square[i].style.display="none";
 	} 


 }d.textContent= "New color";
});
 
var h=document.querySelector("#h");
h.addEventListener("click",function()
{
	m.textContent="";
	e.classList.remove("select");
 	h.classList.add("select");
w.style.backgroundColor="blue";
 color=generaterandomcolor(6);
   pickedcolor= pickedrandom();
 	  p.textContent=pickedcolor;
 	   for(var i=0;i<square.length;i++)
 {
 	square[i].style.backgroundColor= color[i];
 	square[i].style.display="block";
 	}
 	d.textContent= "New color";
 });

 	 
   p.textContent=pickedcolor;
 for(var i=0;i<square.length;i++)
 {
 	square[i].style.backgroundColor= color[i];
 	square[i].addEventListener("click", function()

 		{
 			var clicked=this.style.backgroundColor;
 			console.log(clicked,pickedcolor);
 			if(clicked === pickedcolor)
 	{
 		  ankush(clicked);
 	  	m.textContent="correct";
 	  	w.style.backgroundColor= clicked;
 	  	d.textContent= "Play again?";

 	  }
 	  	else
 	  	{
 	  		this.style.backgroundColor= "#232323";
 	  		m.textContent="Try again";
 	  		 	  	}

 	  		 	  });
 	 }
 	 function ankush(col)
 	 {
 	  for(var i=0;i<square.length;i++)
 {
 	square[i].style.backgroundColor= col;
 	  	}
}
function pickedrandom()
{
	var random=Math.floor(Math.random()*color.length);
	return (color[random]);
}
function generaterandomcolor(num)
{
	var arr=[]
	for(var i=0;i<num;i++)
	{
       arr.push(randomcolor()); 
	}
	return arr;
}
function randomcolor()
{
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb("+r+ ", "  +g+ ", "  +b+")" ;
}

 
  