document.getElementById("thisYear").innerHTML = new Date().getFullYear(); 

function newripple() {
  var api = new ripple.RippleAPI();
  var account = api.generateAddress();
  document.getElementById("address").value = account.address;
  document.getElementById("secret").value = account.secret;
  document.getElementById("status").innerHTML = 'Забележка: <i class="orange">Не споделяйте тайния си ключ.</i>';
  document.getElementById("button").innerHTML = 'Още един?'; 
}
