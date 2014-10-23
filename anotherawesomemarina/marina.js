  function parallax(){
    var prlx_lyr_1 = document.getElementById('prlx_lyr_1');
    var prlx_lyr_2 = document.getElementById('prlx_lyr_2');
    var prlx_lyr_3 = document.getElementById('prlx_lyr_3');
    var prlx_lyr_4 = document.getElementById('prlx_lyr_4');
    var prlx_lyr_5 = document.getElementById('prlx_lyr_5');
    var prlx_lyr_6 = document.getElementById('prlx_lyr_6');
    var prlx_lyr_7 = document.getElementById('prlx_lyr_7');
    
  
    prlx_lyr_1.style.left = -(window.pageXOffset/1.5)+'px';
    prlx_lyr_2.style.left = -(window.pageXOffset/2.5)+'px';
    prlx_lyr_3.style.left = -(window.pageXOffset/1.5)+'px';
    prlx_lyr_4.style.left = -(window.pageXOffset/2)+'px';
    prlx_lyr_5.style.left = -(window.pageXOffset/.65)+'px';
    prlx_lyr_6.style.left = (window.pageXOffset/4)+'px';
    prlx_lyr_7.style.left = (window.pageXOffset/2)+'px';
    

    
  }
  window.addEventListener("scroll", parallax, false);

