new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: true,
    dots: '.dots',
    rewind: true,

    arrows: {
        prev: '.glider__controls.prev',
        next: '.glider__controls.next'
    },

    responsive: [
        {
            // screens greater than >= 368px
            breakpoint: 368,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 1,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                //itemWidth: 150,
                duration: 0.25
            }
        }
    ]
});

new Glider(document.querySelector('.glider-variant-2'), {
    slidesToShow: 3,
    slidesToScroll: 3,
    draggable: true,
    dots: '.dots-variant-2',
    rewind: true,

    arrows: {
        prev: '.glider__controls.variant-2.prev',
        next: '.glider__controls.variant-2.next'
    },

    responsive: [
        {
            // screens greater than >= 368px
            breakpoint: 368,
            settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 1,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                //itemWidth: 150,
                duration: 0.25
            }
        }
    ]
});