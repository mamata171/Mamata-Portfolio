

      // ****************** heading2 animation ******************
      elm = document.getElementById("heading2")
      heading3 = document.getElementById("heading3")


    function showHeading2(){
      setTimeout(()=>{
        elm.style.display = "block"
      },1000)

      setTimeout(()=>{
        heading3.style.display = "block"
      },2000)
    }

    showHeading2()

  
    // *******************  Alert ****************

    const alertBox = document.getElementById("alert");

    // Function to fade out and remove the alert
    function fadeOutAndRemoveAlert() {
        let opacity = 1;
        const fadeOutInterval = setInterval(function () {
            if (opacity > 0) {
                opacity -= 0.05; // Adjust the step value for the fade-out speed
                alertBox.style.opacity = opacity;
            } else {
                clearInterval(fadeOutInterval);
                alertBox.style.display = "none";
            }
        }, 50); // Adjust the interval for smoother or faster fading
    }
    
    // Call the fadeOutAndRemoveAlert function after a delay (e.g., 2000 milliseconds)
    setTimeout(fadeOutAndRemoveAlert, 2000); // Adjust the delay as needed
   
    
    
    
    