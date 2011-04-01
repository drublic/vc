/* Author: 

*/


! function ($, window, document, undefined) {


// Change Links in Nav
$('nav').find('a').each( function () {
  $(this).attr('href', '#!/' + $(this).attr('href'))
})

// Click one of those
.click( function () {
  var i = 0;
  
  // Slide 'em down
  ! function slideDownSec () {
    
    // Do it for each section
    if (i < $('#main').find('section').size()) {
      if (!$('#main').find('section').eq(i).hasClass('legal'))
        $('#main').find('section').eq(i).animate({ top: $('#main').height() }, function () {
          $(this).fadeOut();
        });
      
      i++;
      
      setTimeout(slideDownSec, 100);
    }
    else {
      $('.legal').delay(500).fadeIn();
    }
  } ();
});


// Click on close
$('.close').click( function () {
  $('.legal').fadeOut(function () {
    var i = 0;
    ! function slideUpSec () {
      // Do it for each section
      if (i < $('#main').find('section').size()) {
        if (!$('#main').find('section').eq(i).hasClass('legal'))
          $('#main').find('section').eq(i).show() .animate({ top: 0 });
        
        i++;
        
        setTimeout(slideUpSec, 100);
      }
      
    } ();
  });
  
});







/* Date-routine */
function date (date) {
  date = new Date (date);
	var date_str  = date.getDate() + '.' + parseInt(date.getMonth() + 1) + '.' + date.getFullYear();
	    date_str += ' - ' + date.getHours() + ':' + ( (date.getMinutes() <= 9) ? '0' + date.getMinutes() : date.getMinutes() );
  
  return date_str;
}






// Request latest Blog-Posts from Pagetimer-Blog
$.get('http://blog.pagetimer.de/api/read/json?num=10&filter=text', function (data) {
  log(data);
  $('.pagetimer .feed ul').html('');
  
  var body = '';
  $.each( data.posts, function (key, value) {
    body = value['regular-body'].substr(0, 100);
    
    $('.pagetimer .feed ul').append('<li style="display: none;"><h4><a href="' + value['url-with-slug'] + '" target="_blank">' + 
      value['regular-title'] + '</a></h4><span>' + twttr.txt.autoLink(body) + ' ' +
      '<a href="' + value['url-with-slug'] + '" target="_blank">read more&hellip;</a>' +
      '<a href="' + value['url-with-slug'] + '" target="_blank" class="date">' + date(value['date']) + '</a></li>');
    
    $('.pagetimer .feed ul').find('li:last').delay(key * 100).animate({ 'opacity': 'toggle' });
  });
}, 'jsonp');



// Request latest Tweets
$.get('http://www.twitter.com/status/user_timeline/drublic.json?count=10', function (data) {
  log(data);
  $('.twitter .feed ul').html('');

  $.each( data, function (key, value) {
    $('.twitter .feed ul').append('<li style="display: none;">' + twttr.txt.autoLink(value['text']) + ' ' +
      '<a href="http://twitter.com/drublic/status/' + value['id'] + '" target="_blank" class="date">' + date(value['created_at']) + '</a></li>');
    
    $('.twitter .feed ul').find('li:last').delay(key * 100).animate({ 'opacity': 'toggle' });
  });
}, 'jsonp');





// Request latest Blog-Posts from Tumblr-Blog
$.get('http://drublic.tumblr.com/api/read/json?num=5&filter=text', function (data) {
  log(data);
  $('.tumblr .feed ul').html('');
  
  var body = '', output = '';
  $.each( data.posts, function (key, value) {
    output = '<li style="display: none;">';
    
    
    // Texts
    if (value['regular-body'] !== undefined) {
      output += '<h4><a href="' + value['url-with-slug'] + '" target="_blank">' + value['regular-title'] + '</a></h4>';
  
      body = value['regular-body'].substr(0, 100);
      output += '<span>' + twttr.txt.autoLink(body) + ' ' +
        '<a href="' + value['url-with-slug'] + '" target="_blank">read more&hellip;</a>';
    }
    
    // Photo
    else if (value['photo-url-500'] !== undefined) {
      output += '<a href="' + value['photo-url-500'] + '" target="_black"><img src="' + value['photo-url-250'] + '" alt=""></a>';
    }
    
    else return;
    output += '<a href="' + value['url-with-slug'] + '" target="_blank" class="date">' + date(value['date']) + '</a></li>';
    $('.tumblr .feed ul').append(output)
    
    $('.tumblr .feed ul').find('li:last').delay(key * 100).animate({ 'opacity': 'toggle' });
  });
}, 'jsonp');






/* Calculate height of Cols */
! function () {
  var i = 0;
  ! function calcHeight () {
    // Do it for each section
    if (i < $('#main').find('section').size()) {
      if (!$('#main').find('section').eq(i).hasClass('legal'))
        $('#main').find('section').eq(i).height($('html').height() - $('#main').offset().top);
      
      i++;
      calcHeight();
    }
    
  } ();


} ();


} (jQuery, window, undefined);









