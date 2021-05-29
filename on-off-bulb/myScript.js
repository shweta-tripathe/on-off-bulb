const tubelight = () =>{

    let btext = document.getElementById('bulbdata');
      

    for(i=1; i<6; i++){
   let bid =document.getElementById('lightid' .concat(i));
      
        if(bid.src.match('lighton')){
            bid.src="lightoff.jpg";
            btext.innerHTML = "Light OFF";

        }else{
            bid.src="lighton.jpg";
            btext.innerHTML = "Light ON";

         }
    


    } 


}