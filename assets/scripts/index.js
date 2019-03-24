const DELAY = 200;

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
];

const FONTS = [
  `'Merriweather', serif`,
  `'Raleway', sans-serif`,
  `'Roboto Slab', serif`,
  `'Amatic SC', cursive`,
  `'Dancing Script', cursive`,
  `'Indie Flower', cursive`,
  `'Libre Barcode 39', cursive`,
  `'Open Sans Condensed', sans-serif`,
];

$(document).ready(function() {
  let updateColor = true;
  let updateColorTimer;
  let colorIndex = 0;

  let updateFontFamily = true;
  let updateFontFamilyTimer;
  let fontIndex = 0;

  let updateEmojis = true;
  let updateEmojisTimer;

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

  //
  // Mini Gong
  //

  function attachMiniGongOnMouseMove() {
    $('.section-colors').mousemove(function() {
      updateMiniGongColor();
    });
  }

  function attachMiniGongOnScroll() {
    const $section = $('.section-colors');
    if ($section.length > 0) {
      $(window).scroll(function() {
        updateMiniGongColor();
      });
    }
  }

  function updateMiniGongColor() {
    if (updateColor) {
      const $section = $('.section-colors');
      if ($section.length > 0) {
        const $color1 = $section.find('.color-1');
        const $color2 = $section.find('.color-2');
        const $color3 = $section.find('.color-3');
        const $color4 = $section.find('.color-4');
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
      updateColor = false;
    }
    if (!updateColorTimer) {
      updateColorTimer = setTimeout(() => {
        updateColor = true;
        clearTimeout(updateColorTimer);
        updateColorTimer = undefined;
      }, DELAY);
    }
  }

  //
  // Font
  //

  function attachFontOnScroll() {
    $('.section-fonts').mousemove(function() {
      updateTextFontFamily();
    });
  }

  function attachFontOnMouseMove() {
    const $section = $('.section-fonts');
    if ($section.length > 0) {
      $section.mousemove(function() {
        updateTextFontFamily();
      });
    }
  }

  function updateTextFontFamily() {
    if (updateFontFamily) {
      const $section = $('.section-fonts');
      if ($section.length > 0) {
        const $text = $section.find('.dynamic-google-font');
        // generate colors
        if (fontIndex >= FONTS.length - 1) {
          fontIndex = 0;
        } else {
          fontIndex++;
        }
        $text.css('font-family', FONTS[fontIndex]);
      }
      updateFontFamily = false;
    }
    if (!updateFontFamilyTimer) {
      updateFontFamilyTimer = setTimeout(() => {
        updateFontFamily = true;
        clearTimeout(updateFontFamilyTimer);
        updateFontFamilyTimer = undefined;
      }, DELAY);
    }
  }

  //
  // Emojis 
  //

  function attachEmojisOnMouseMove() {
    const $section = $('.section-markdown');
    if ($section.length > 0) {
      $section.mousemove(function() {
        randomizeEmojis();
      });
    }
  }

  function randomizeEmojis() {
    if (updateEmojis) {
      const $section = $('.section-markdown');
      if ($section.length > 0) {
        const $emojis = $section.find('.emojis');
        $emojis.html(getShuffledArr($emojis.children()));
      }
      updateEmojis = false;
    }
    if (!updateEmojisTimer) {
      updateEmojisTimer = setTimeout(() => {
        updateEmojis = true;
        clearTimeout(updateEmojisTimer);
        updateEmojisTimer = undefined;
      }, DELAY);
    }
  }

  //
  // Utilities
  //

  function getShuffledArr(arr) {
    const newArr = arr.slice()
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr
  };

  function emojiStringToArray(str) {
    split = str.split(/([\uD800-\uDBFF][\uDC00-\uDFFF])/);
    arr = [];
    for (var i = 0; i < split.length; i++) {
      char = split[i]
      if (char !== "") {
        arr.push(char);
      }
    }
    return arr;
  };

  // attach all the things
  attachGongOnClick();
  attachHamburgerOnClick();

  // attachMiniGongOnScroll();
  attachMiniGongOnMouseMove();

  // attachFontOnScroll();
  attachFontOnMouseMove();

  attachEmojisOnMouseMove();
});