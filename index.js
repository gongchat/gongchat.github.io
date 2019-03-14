$(document).ready(function() {
  $('body').on('click', '.gong', function() {
    const $this = $(this);
    const $gongLogo = $this.parents('.gong-logo');
    const clonedThis = $gongLogo.clone();
    $gongLogo.replaceWith(clonedThis);

    const $newGong = $('.gong-logo');
    if (!$newGong.hasClass('gonged')) {
      $newGong.addClass('gonged');
    }
  })
});
