/*
 * jQuery endcreditsk Plugin
 *
 * Copyright (c) 2014 Daniel Malkafly <malk@epichail.com>
 * Dual licensed under the MIT or GPL Version 2 licenses or later.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * 
 * Check out original code at: 
 * https://github.com/malkafly/endcreditsk/blob/master/static/endcreditsk.js
 */
$(document).ready(function () {

    $('a[name=creditos]').click(function (e) {
        e.preventDefault();
        
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        $('#titlesk').css({
            'width': maskWidth,
            'height': maskHeight
        });

        $('#titlesk').fadeIn(1000);
        $('#titlesk').fadeTo("slow");
        $('#titlesk').fadeIn();
        $('#creditsk').css("left", (($('#creditsk').parent().width() - $('#creditsk').outerWidth()) / 2) + "px");
        $('#creditsk').css("bottom", "-" + (maskHeight * 2) + "px");
        $('#creditsk').show('slow');

        $('#creditsk').animate({
            bottom: maskHeight + "px"
        }, {
            duration: 30000,
            complete: function () {
                $('#titlesk').fadeOut();
                $('.window').fadeOut();
                $('#creditsk').css("bottom", "-" + (maskHeight * 2) + "px");
            },
            step: function (n, t) {
                var pos = $(this).position();
                console.log('X: ' + pos.left.toFixed(2) + ' Y: ' + pos.top.toFixed(2));
            }
        });

    });

    $('.window .close').click(function (e) {
        e.preventDefault();
        $('#creditsk').css("bottom", "-" + ($(document).height() * 2) + "px");
        $('#titlesk').hide();
        $('.window').hide();
    });

    $('#titlesk').click(function () {
        $(this).hide();
        $('#creditsk').css("bottom", "-" + ($(document).height() * 2) + "px");
        $('.window').hide();
    });
});
