function openMailApplication() {
    window.location.href = 'mailto:email@example.com';
  }
  
  const button = document.getElementById('btn');
  
  button.addEventListener('click', () => {
    openMailApplication();
  });
  let $root = $('html, body');
  $('a[href^="#"]').click(function() {
      let href = $.attr(this, 'href');
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function() {
        window.location.hash = href;
      });
      return false;
    });