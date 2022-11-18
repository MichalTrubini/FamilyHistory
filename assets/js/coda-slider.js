$(document).ready(function () {
    
    function menuSlider(selector) {
        var $panels = $(selector + ' .scrollContainer > div');
        var $container = $(selector + ' .scrollContainer');

        // if false, we'll float all the panels left and fix the width of the container
        var horizontal = true;

        // float the panels left if we're going horizontal
        if (horizontal) {
            $panels.css({
                'float': 'left',
                'position': 'relative' // IE fix to ensure overflow is hidden
            });


            console.log('vvvvvvvvvvvvvvvv');
            console.log($panels);
            console.log($panels[0]);

            // calculate a new width for the container (so it holds all panels)
            $container.css('width', $panels[0].offsetWidth * $panels.length);
        }

        // collect the scroll object, at the same time apply the hidden overflow
        // to remove the default scrollbars that will appear
        var $scroll = $(selector + ' .scroll').css('overflow', 'hidden');

        // apply our left + right buttons
        $scroll;
        
        $(selector + ' .navigation').find('a').click(selectNav);
        
        if (window.location.hash) {
            trigger({id: window.location.hash.substr(1)}, selector);
        } else {
            $('ul.navigation a:first').click();
        }

        // offset is used to move to *exactly* the right place, since I'm using
        // padding on my example, I need to subtract the amount of padding to
        // the offset.  Try removing this to get a good idea of the effect
        var offset = parseInt((horizontal ?
                $container.css('paddingTop') :
                $container.css('paddingLeft'))
                || 0) * -1;

        var scrollOptions = {
            target: $scroll, // the element that has the overflow

            // can be a selector which will be relative to the target
            items: $panels,

            navigation: '.navigation a',

            // selectors are NOT relative to document, i.e. make sure they're unique
            prev: 'img.left',
            next: 'img.right',

            // allow the scroll effect to run both directions
            axis: 'x',

            offset: offset,

            // duration of the sliding effect
            duration: 500,

            // easing - can be used with the easing plugin: 
            // http://gsgd.co.uk/sandbox/jquery/easing/
            easing: 'swing'
        };

        // apply serialScroll to the slider - we chose this plugin because it 
        // supports// the indexed next and previous scroll along with hooking 
        // in to our navigation.
        $(selector).serialScroll(scrollOptions);

        // now apply localScroll to hook any other arbitrary links to trigger 
        // the effect
        $.localScroll(scrollOptions);

        // finally, if the URL has a hash, move the slider in to position, 
        // setting the duration to 1 because I don't want it to scroll in the
        // very first page load.  We don't always need this, but it ensures
        // the positioning is absolutely spot on when the pages loads.
        scrollOptions.duration = 1;
        $.localScroll.hash(scrollOptions);
    }

    // handle nav selection
    function selectNav() {
        var sel = $(this).attr("class");
        $('.navigation li a').removeClass('selected');
        $('.dots li a').removeClass('selected');
        $('.' + sel).addClass('selected');
    }

    // go find the navigation link that has this target and select the nav
    function trigger(data, selector) {
        var el = $(selector + ' .navigation').find('a[href$="' + data.id + '"]').get(0);
        selectNav.call(el);
    }

    function pageSlider(selector) {
        
        var $panels = $(selector + ' .scrollContainer > div');
        var $container = $(selector + ' .scrollContainer');

        // if false, we'll float all the panels left and fix the width of the container
        var horizontal = true;

        // float the panels left if we're going horizontal
        if (horizontal) {
            $panels.css({
                'float': 'left',
                'position': 'relative' // IE fix to ensure overflow is hidden
            });
            
            /*console.log('aaaaaaaaaaaaaaaaaaa');
            console.log($panels);
            console.log($panels[0]);*/
            
            // calculate a new width for the container (so it holds all panels)
            $container.css('width', $panels[0].offsetWidth * $panels.length + 1000);
        }

        // collect the scroll object, at the same time apply the hidden overflow
        // to remove the default scrollbars that will appear
        var $scroll = $(selector + ' .scroll').css('overflow', 'hidden');

        // apply our left + right buttons
        $scroll;

        // offset is used to move to *exactly* the right place, since I'm using
        // padding on my example, I need to subtract the amount of padding to
        // the offset.  Try removing this to get a good idea of the effect
        var offset = parseInt((horizontal ?
                $container.css('paddingTop') :
                $container.css('paddingLeft'))
                || 0) * -1;

        var scrollOptions = {
            target: $scroll, // the element that has the overflow
            // can be a selector which will be relative to the target
            items: $panels,
            // selectors are NOT relative to document, i.e. make sure they're unique
            prev: 'img.left',
            next: 'img.right',
            // allow the scroll effect to run both directions
            axis: 'x',
            offset: offset,
            // duration of the sliding effect
            duration: 500,
            // easing - can be used with the easing plugin: 
            // http://gsgd.co.uk/sandbox/jquery/easing/
            easing: 'swing'
        };

        $(selector).serialScroll(scrollOptions);
        $.localScroll(scrollOptions);
        scrollOptions.duration = 1;
        $.localScroll.hash(scrollOptions);
    }

    //menuSlider("#slider");
    //pageSlider(".slider2");
    //pageSlider("#slider3");
    
    //pageSlider("#slider22");

});