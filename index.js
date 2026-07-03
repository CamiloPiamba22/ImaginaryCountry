var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.previousElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      this.textContent = "Abrir";   
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      this.textContent = "Cerrar";  
    }
  });
}