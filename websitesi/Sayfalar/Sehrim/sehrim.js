var resim = document.getElementsByClassName("resim"); 
 
 var resimSayısı = resim.length;
 
 var resimNo = 0; 
 
   resimGoster(resimNo); 
   
   
   function oncekiResim() {
	   
	   resimNo--;
	   
	   resimGoster(resimNo);
	   
	   clearInterval(s);
	   
   }
   
    function sonrakiResim() {
	   
	   resimNo++;
	   
	   resimGoster(resimNo);
	    clearInterval(s);
   } 
   
  var s =  setInterval(function() {
	   
	   resimtNo++;
	   
	   resimGoster(resimNo);
	   
   },3000);
   
 
 
  function resimGoster(resimNumarası) {
	  
	    resimtNo = resimNumarası;
		
		if(resimNumarası >= resimSayısı){
			
			resimNo = 0;
			
		} 
		
		if(resimNumarası < 0){
			
			resimNo = resimSayısı -1;
			
		}
	   
	    for(i = 0; i< resimSayısı; i++) {
			
			resim[i].style.display = "none";
			
			
		} 
		
		resim[resimNo].style.display = "block";
	   
	   
  }