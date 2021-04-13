// JavaScript Document

function Add10(){
window.open('assets/php/PageAdd10.php','10 jetons','menubar=no, scrollbars=no, width=370, height=270');}

function Add100(){
  window.open('assets/php/PageAdd100.php','100 jetons','menubar=no, scrollbars=no, width=300, height=140');}

function Add500(){
  window.open('assets/php/PageAdd500.php','500 jetons','menubar=no, scrollbars=no, width=300, height=140');}

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
      document.getElementById('MonMotDePasse').value = r;
      document.getElementById('MonMotDePasse2').value = r;
      document.getElementById('GenerateMDP').innerHTML = "Votre mot de passe est "+r;
  }
