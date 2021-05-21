var count = 0;
var countButton = document.getElementById("countButton");
var displayCount = document.getElementById("displayCount");
countButton.onclick = function(){
  count++;
  displayCount.innerHTML = count;
}
var countt = 0;
var counttButton = document.getElementById("counttButton");
var displayyCount = document.getElementById("displayyCount");
counttButton.onclick = function(){
  countt++;
  displayyCount.innerHTML = countt;
}