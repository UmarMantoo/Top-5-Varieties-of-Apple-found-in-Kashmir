function showApple(id){
    var elm=0;
    for(let i=1;i<6;i++)
        {
            elm= document.getElementById("Apple"+i+"");
            //console.log("inside for"+elm);
            if(i===id)
              { //console.log("inside if");
                elm.style.display="flex";
              }
              else
              elm.style.display="none";
        }
    
}