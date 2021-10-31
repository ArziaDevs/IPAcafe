document.createElement('system');
 
function dark() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}
function indev() {
var r = confirm("this feature                                            is currently indev");
if (r == true) {

} else {

}
}

document.getElementsByClassName("form-switch").addEventListener("click", dark());
