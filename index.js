        var loadSongBar = document.getElementById("loadSongBar");
        var LoadtoListButton = document.getElementById("LoadtoListButton");
        var splittedSongNameArray = [];
        var allSongs = [];
        var current =0;
        var audioElement = document.getElementById("audio1");
          var i = 0;
              
              // var currentSong = "'" + allSongs[0] + "'"
                 
            $(document).ready(function(){
               
            
          // Event Listeners
          $("#loadFileInput").click(function(){
               LoadtoListButton.style.display="inline" 
          });
          
          $("#loadSongMenuButton").click(function () {
                   if (  loadSongBar.style.display !== "none") 
                        {$("#loadSongBar").hide()}
                         else { $("#loadSongBar").show(); }});
          
          $("#LoadtoListButton").click(function(){
               var splittedSongNameArray = ($("#loadFileInput").val()).split(`\\`);
               allSongs.push(new Audio(splittedSongNameArray[2]));

               $("#mainUL").append("<li>" + splittedSongNameArray[2] + "</li>")  
                
               // $("#audio1").attr("src", allSongs[current]); 
          });
          
          $("#skipSongMenuButton").click(function () { ; 
          if (current === allSongs.length-1 ) {
            allSongs[current].pause()  
            current=0;
            allSongs[current].play() 
          }
          else {  allSongs[current].pause()  ;
                current++;
                allSongs[current].play()  
               }
          });
          
         
          $("#bPlay").click(function(){ 
                 if (allSongs.length !== 0)  
                {
                  
                allSongs[current].play();    
                  }
                   else  {alert("Load Song first")}
            });
            
          $("#bPause").click(function(){
               allSongs[current].pause() ;
               console.log ("Song "+ current + "paused" )
           })    });  
            
          $("#bNext").click(function(){
              if (current === allSongs.length-1 ) {
                         audioElement.pause()  
                         current=0;
                         console.log("Song" + current + "ended")
          }
          
           
          else {  allSongs[current].pause() 
                current++;
                allSongs[current].play()  
               } 
                });  
           
          audioElement.addEventListener("ended",
          function () { 
                     if (current === allSongs.length-1 ) {
                         audioElement.pause()  
                         current=0;
                         console.log("Song" + current + "ended")
          }
          
           
          else {  allSongs[current].pause()
                current++;
                allSongs[current].play()  
               }
          });
          
          // $("songNameInputSubmit").
     
          // END of EVENT LISTENERS 
     
  
 

// $("#songNameInputSubmit").click(function() {
//         allSongs.push( new Audio($("#songNameInput").val() ))  
//  $("#mainUL").append("<li>" +  $("#songNameInput").val() + "</li>")  
//       current=0;
// })


