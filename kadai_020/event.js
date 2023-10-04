document.addEventListener("DOMContentLoaded", function() {
    
    const button = document.getElementById("btn");
    const message = document.getElementById("text");
     
    button.addEventListener("click", function() {
      
      message.textContent = "ボタンをクリックしました";
    });
  });
  