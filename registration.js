var names_list =[];
function showInput() {
  if(document.getElementById("user_input").value != ""){
  names_list.push( document.getElementById("user_input").value)
  // document.getElementById('display').innerHTML = document.getElementById("user_input").value;
 
  document.getElementById('display').innerHTML = names_list;
  document.getElementById('numOfReg').innerHTML = names_list.length;
  
}
console.log(names_list)

}

function navbar() {
var navItem = document.getElementsByClassName("nav");
var path = window.location.href;
  for (i = 0; i < navItem.length; i++) {
    if (path.includes(navItem[i].href)) {
      navItem[i].classList.add("active");
    }
  }
}