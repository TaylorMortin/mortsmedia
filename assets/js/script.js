// makes the parallax elements
function parallaxIt() {
    // create variables
    var $fwindow = $(window);
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    var $contents = [];
    var $backgrounds = [];
  
    // for each of content parallax element
    $('[data-type="content"]').each(function(index, e) {
      var $contentObj = $(this);
  
      $contentObj.__speed = ($contentObj.data('speed') || 1);
      $contentObj.__fgOffset = $contentObj.offset().top;
      $contents.push($contentObj);
    });