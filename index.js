var count = 0;
var countButton = document.getElementById("countButton");
var displayCount = document.getElementById("displayCount");
// countButton.onclick = function(){
//   console.log(this)
//   count++;
//   displayCount.innerHTML = count;
// }

var images = document.getElementsByClassName("button")
for(var i =0; i < images.length ; i++){
  images[i].onclick = increment;
}
function increment(event){
  var value = event.target.value
  value++
  console.log(this.id , 'has value',value)
  event.target.value = value
  event.target.nextElementSibling.innerText = ` this was clicked ${value} times.`


}


