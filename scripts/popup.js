
let allDate = new Date().toLocaleDateString("en", {year:"numeric", day:"2-digit", month:"2-digit"});
document.querySelector('.nxkwvkcq0b').innerHTML = allDate;


$( ".j64z86sju7" ).click(function() {
   let inputVal = $('.ouumif3trb').val();
   console.log(inputVal); 
   let div = `<div  class="gnkhnxtlns">
   <div class="yvgcxfgqyl">
     <div class="qlnveetliq">${inputVal} <div class="cksiddtmqh"></div></div>
     
   </div>
   </div>`;
   
   $('ul').append(div);
   $('.ouumif3trb').val('');
   $( ".gnkhnxtlns" ).click(function() {
    let value = this.innerText;
    $('.ouumif3trb').val(value)
    });
    $( ".cksiddtmqh" ).click(function() {
        $(this).parent().remove()
    });
   
});


$( ".tmrsc04dij" ).click(function() {
    $('.xnhqwn0a6q').removeClass("ggms5tou3r");
    $('.xnhqwn0a6q').addClass( "qrq6jy2w97" );
    $('hr').css('display', 'none')
    $(".sjsuztmoaq").slideDown(1500);
    setTimeout(() =>{  
        $('.gnkhnxtlns').addClass('aworbdblsm');
    }, 1500);
    
 });
 
 $( ".x-xwia1elgka" ).click(function() {
     $('.xnhqwn0a6q').removeClass( "qrq6jy2w97");
     $(".sjsuztmoaq").slideUp(1000);
     $('.gnkhnxtlns').removeClass('aworbdblsm');
  });

  