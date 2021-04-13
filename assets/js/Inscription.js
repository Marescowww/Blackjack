// JavaScript Document
function PageConnexion(){
	window.location.href = "Connect.php"
}
function generate(l) {
		if (typeof l==='undefined'){var l=10;}
		var c='abcdefghijknopqrstuvwxyzACDEFGHJKLMNPQRSTUVWXYZ12345679',
		n=c.length,
		p='!@#$+-*&_',
		o=p.length,
		r='',
		n=c.length,
		s=Math.floor(Math.random() * (p.length-1));

		for(var i=0; i<l; ++i){
				if(s == i){
						r += p.charAt(Math.floor(Math.random() * o));
				}else{
						r += c.charAt(Math.floor(Math.random() * n));
				}
		}
		document.getElementById('GenerateMDP').innerHTML = r;
		document.getElementById('password').value = r;
		document.getElementById('password2').value = r;
}
