const COLORS = [{
    color1: '#333',
    color2: '#444',
    color3: '#555',
    color4: '#666'
  },
  {
    color1: '#182126',
    color2: '#357CA8',
    color3: '#AFC2D1',
    color4: '#F66874'
  },
  {
    color1: '#406B5A',
    color2: '#44B2BF',
    color3: '#C4F1F4',
    color4: '#E5B270'
  },
  {
    color1: '#FF8C9B',
    color2: '#FFC8CB',
    color3: '#FCEEBD',
    color4: '#A1F15E'
  },
]

$(document).ready(function() {
  let updateColor = true;
  let updateColorTimer;
  let colorIndex = 0;

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

  function attachMiniGongMouseMove() {
    const $sectionCustomize = $('.section-colors');
    if ($sectionCustomize.length > 0) {
      $('body').mousemove(function() {
        if (updateColor) {
          updateMiniGongColor();
          updateColor = false;
        }
        if (!updateColorTimer) {
          updateColorTimer = setTimeout(() => {
            updateColor = true;
            clearTimeout(updateColorTimer);
            updateColorTimer = undefined;
          }, 1000);
        }
      });
    }
  }

  function updateMiniGongColor() {
    const $sectionCustomize = $('.section-colors');
    if ($sectionCustomize.length > 0) {
      const $color1 = $sectionCustomize.find('.color-1');
      const $color2 = $sectionCustomize.find('.color-2');
      const $color3 = $sectionCustomize.find('.color-3');
      const $color4 = $sectionCustomize.find('.color-4');

      // generate colors
      if (colorIndex >= COLORS.length - 1) {
        colorIndex = 0;
      } else {
        colorIndex++;
      }

      $color1.css('background-color', COLORS[colorIndex].color1);
      $color2.css('background-color', COLORS[colorIndex].color2);
      $color3.css('background-color', COLORS[colorIndex].color3);
      $color4.css('background-color', COLORS[colorIndex].color4);
    }
  }

  attachGongOnClick();
  attachHamburgerOnClick();
  attachMiniGongMouseMove();
});