var main = function() {

  $(".book").click(function () {

    $(".book-image").toggle();
    $(".book-description").toggle();
  });

  $(".book").hover(
    function() {
      $(this).css('border', '1px solid black');
    }, function() {
      $(this).css('border', '');
    });

  $(".author").click(function () {
    $(".author-image").toggle();
    $(".author-description").toggle();
  });

  $(".author").hover(
    function() {
      $(this).css('border', '1px solid black');
    }, function() {
      $(this).css('border', '');
    });



  $('.next-arrow').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0){
      nextSlide = $('.slide').first();
      nextDot = $('.dot').first();

    }

    currentSlide.fadeOut(0).removeClass('active-slide');
    nextSlide.fadeIn(300).addClass('active-slide');

    $('.active-slide').css("display", "flex");
    $(".book-image").show();
    $(".book-description").hide();
    $(".author-image").show();
    $(".author-description").hide();

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');

  });
  
  $('.prev-arrow').click(function() {
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0){
      prevSlide = $('.slide').last();
      prevDot = $('.dot').last();

    }

    currentSlide.fadeOut(0).removeClass('active-slide');
    prevSlide.fadeIn(300).addClass('active-slide');

    $('.active-slide').css("display", "flex");
    $(".book-image").show();
    $(".book-description").hide();
    $(".author-image").show();
    $(".author-description").hide();

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');

  });
}

$(document).ready(main);
