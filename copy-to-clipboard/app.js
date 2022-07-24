$(document).ready(function(){
    var text='';
   $('.copybtn').click(function(){
       $('#text').select();
       document.execCommand('copy');
       text=$('#text').val();
   })
   $('.pastebtn').click(function(){
      $('#text1').val(text);
   })
});