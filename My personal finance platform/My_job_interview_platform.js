function openProject(evt, projectName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("section");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
   }   
    document.getElementById(projectName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".section").click();
});

document.addEventListener("DOMContentLoaded", function() {
    var defaultTabButton = document.querySelector(".section");
    defaultTabButton.click();
});