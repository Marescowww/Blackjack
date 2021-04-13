//javascript DOCUMENT//

function ConvertirMP4(){
  window.open('https://cloudconvert.com/');
}

function date(){
  var date = new Date()
  var Year = date.getFullYear()
  var Month = date.getMonth()
  console.log(Year+Month)
   document.getElementById('Year').value = Year;
   document.getElementById('Month').value = Month;
}
