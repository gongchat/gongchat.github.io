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

  function setDownloadLinks() {
    $.get('https://api.github.com/repos/gongchat/gong/releases/latest')
      .then(res => {
        const windows = res.assets.find(asset => asset.name.includes('.exe'));
        const linux = res.assets.find(asset => asset.name.includes('.deb'));
        const mac = res.assets.find(asset => asset.name.includes('.dmg'));

        if (windows) {
          $('.download-windows').attr('href', windows.browser_download_url);
        }
        if (linux) {
          $('.download-linux').attr('href', linux.browser_download_url);
        }
        if (mac) {
          $('.download-mac').attr('href', mac.browser_download_url);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  setDownloadLinks();
  attachHamburgerOnClick();
  attachGongOnClick();
});
