

      // ****************** heading2 animation ******************
      elm = document.getElementById("heading2")
      const checkbox = document.getElementById("active");

      function showHeading2(){
      setTimeout(()=>{
        elm.style.display = "block"
      },1000)
    }

    showHeading2()
    function hideHeading2(){
      elm.style.display = "none"

    }

      checkbox.addEventListener("change", function() {
        if (checkbox.checked) {
          hideHeading2(); 
        } else {
          showHeading2(); 
        }
      });


      heading3 = document.getElementById("heading3")

      function heading_show(){
        setTimeout(()=>{
            heading3.style.display = "block"
          },1200)
    }

   heading_show()