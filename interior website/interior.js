
  // var retVal = prompt ("Enter Your Phone Number:" , "Your Phone Number here");
  // document.write ("you have entered:" + retVal);
  // if( retVal == retVal ){
  //   alert("Thank You");
  // }
  // else{
  //   alert("soo sorry");
  // }
$(document).ready(function () {
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('.fa-bars').removeClass('fa-times');
        $('').removeClass('nav-toggle');
    });

    $('.project').magnificPopup({
        delegate:'a',
        type:'image',
        gallery:{
          enabled:true
        }
      });
});