
var c = 1;
function load(control)  {
        if (c < 9) 
     {
         if (c % 2 == 0)
            document.getElementById(control.id).innerHTML = "$";
        else
            document.getElementById(control.id).innerHTML = "%";
            c++;
           checkWin();
            
    }
    else {
        document.getElementById(control.id).innerHTML = "%";
        alert("match is draw");
    }
}
function fullForm(div)
{
    return document.getElementById(div).innerHTML;
}
function checkWin()
{
  if(check("div1","div2","div3") || check("div4","div5","div6") || check("div7","div8","div9") || check("div2","div5","div8") || check("div1","div4","div7") || check("div3","div6","div9") || check("div1","div5","div9") || check("div3","div5","div7"))
     {alert("game is over bro");
      reset();
      c=1;
}
}
function check(div1,div2,div3){
if(fullForm(div1)!="" && fullForm(div2)!="" && fullForm(div3)!="" && (fullForm(div1)==fullForm(div2)) && (fullForm(div3)==fullForm(div2)))
          {
                 if(fullForm(div1)=="$")
                 {
                    document.getElementById("head").innerHTML = "PLAYER 2 WON THE MATCH!";
                 }
                 else{
                    document.getElementById("head").innerHTML = "PLAYER 1 WON THE MATCH!";
                 }
                 return true;
        }
    }
    function reset()
    {
        for(var i=1;i<10;i++)
        {
            document.getElementById("div" + i).innerHTML="";
        }
    }