$(document).ready(function() {
  let updateColor = true;
  let updateColorTimer;
  let colorIndex = 0;

  let updateFontFamily = true;
  let updateFontFamilyTimer;
  let fontIndex = 0;

  let updateEmojis = true;
  let updateEmojisTimer;

  //
  // Mini Gong
  //

  function attachMiniGongOnMouseMove() {
    $('.section-colors').mousemove(function() {
      updateMiniGongColor();
    });
  }

  function attachMiniGongOnScroll() {
    $(window).scroll(function() {
      updateMiniGongColor();
    });
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
    $(window).scroll(function() {
      updateTextFontFamily();
    });
  }

  function attachFontOnMouseMove() {
    $('.section-fonts').mousemove(function() {
      updateTextFontFamily();
    });
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

  function attachEmojisOnScroll() {
    $(window).scroll(function() {
      randomizeEmojis();
    });
  }

  function attachEmojisOnMouseMove() {
    $('.section-markdown').mousemove(function() {
      randomizeEmojis();
    });
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
    const newArr = arr.slice();
    for (let i = newArr.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
    }
    return newArr;
  }

  // attach all the things
  attachMiniGongOnScroll();
  attachMiniGongOnMouseMove();
  attachFontOnScroll();
  attachFontOnMouseMove();
  attachEmojisOnScroll();
  attachEmojisOnMouseMove();
});
