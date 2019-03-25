$(document).ready(function() {
  function attachHamburgerOnClick() {
    $('body').on('click', '.hamburger', function() {
      const $menu = $('.menu');
      if ($menu.hasClass('open')) {
        $menu.removeClass('open');
      } else {
        $menu.addClass('open');
      }
    });
  }

  function attachGongOnClick() {
    $('body').on('click', '.gong', function() {
      const $this = $(this);
      const $gongLogo = $this.parents('.gong-logo');
      const clonedThis = $gongLogo.clone();
      $gongLogo.replaceWith(clonedThis);
      const $newGong = $('.gong-logo');
      if (!$newGong.hasClass('gonged')) {
        $newGong.addClass('gonged');
      }
    });
  }

  attachHamburgerOnClick();
  attachGongOnClick();
});
