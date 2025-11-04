document.addEventListener('DOMContentLoaded', () => {

    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30
            }
          }
    });


    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(clickedHeader => {
        clickedHeader.addEventListener('click', () => {
            
            const isAlreadyActive = clickedHeader.classList.contains('active');

            accordionHeaders.forEach(header => {
                if (header !== clickedHeader) {
                    header.classList.remove('active');
                    const panel = header.nextElementSibling;
                    panel.style.maxHeight = 0;
                    panel.style.padding = "0 25px 0";
                }
            });

            if (isAlreadyActive) {
                clickedHeader.classList.remove('active');
                const panel = clickedHeader.nextElementSibling;
                panel.style.maxHeight = 0;
                panel.style.padding = "0 25px 0";
            } else {
                clickedHeader.classList.add('active');
                const panel = clickedHeader.nextElementSibling;
                panel.style.maxHeight = panel.scrollHeight + "px";
                panel.style.padding = "0 25px 25px";
            }
        });
    });

});