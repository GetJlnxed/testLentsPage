/* document.addEventListener('DOMContentLoaded', function(){

}) */

document.querySelector('.but').addEventListener('click', function () {

    var borderUpLeft = document.querySelectorAll('.borderUpLeft'),
        borderUpRight = document.querySelectorAll('.borderUpRight'),
        borderLeft = document.querySelectorAll('.borderLeft'),
        borderRight = document.querySelectorAll('.borderRight'),
        borderBottomLeft = document.querySelectorAll('.borderBottomLeft'),
        borderBottomRight = document.querySelectorAll('.borderBottomRight'),
        item__line = document.querySelectorAll('.item__line'),
        DownBorderUpLeft = document.querySelectorAll('.DownBorderUpLeft'),
        DownBorderUpRight = document.querySelectorAll('.DownBorderUpRight'),
        DownBorderLeft = document.querySelectorAll('.DownBorderLeft');

    var arr = [borderUpLeft,
        borderUpRight,
        borderLeft,
        borderRight,
        borderBottomLeft,
        borderBottomRight,
        item__line, DownBorderUpLeft,
        DownBorderUpRight,
        DownBorderLeft
    ];

    function counter(arr) {
        for (var i = 0; i < arr.length; i++) {
            arr[i].forEach(function (item) {
                if (item.className.match("_drawed") == null ) {
                var className = item.className + '_drawed';
                item.classList.toggle(className);
                }else {
                    var itemClasses = item.className.split(' ');
                    className = itemClasses[1];
                    item.classList.toggle(className);
                }
            });
        }
    }
    counter(arr);
});