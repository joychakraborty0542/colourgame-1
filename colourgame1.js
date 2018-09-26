var colors = randomColors(6)
      var square=document.querySelectorAll(".square");
      var b=pickcolor();
      var colordisplay=document.getElementById("colordisplay");
      var output=document.querySelector("#outcome");
      colordisplay.textContent=b;
      for(var i=0; i<square.length; i++){
      	square[i].style.background=colors[i];

      	square[i].addEventListener("click",function(){
      		var clickedColor =this.style.background;
             console.log(clickedColor,b);
      	  if(clickedColor===b){
            output.textContent="Correct!"
            changeColors(clickedColor);
      	  }else{
              this.style.background="#232323";
              output.textContent="try agin";
      	}

      });
      }
      function changeColors(col){
            for(i=0; i<square.length; i++){
                  square[i].style.background=col;
            }
      }
      function pickcolor(){
            var random = Math.floor(Math.random()*colors.length);
            return colors[random]

      }
      function randomColors(num){
            var arr=[];
            for (i=0; i<num; i++){
              arr.push(Randomcolors());
            }
            return arr;
      }
      function Randomcolors(){
            var r =Math.floor(Math.random()*256);
            var g =Math.floor(Math.random()*256);
            var b =Math.floor(Math.random()*256);
            return "rgb(" + r + ", " + g + ", "+ b +")";

      }
