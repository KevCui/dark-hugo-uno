(function () {
    u('.blog-title').attr('href', '/')
    u('.blog-title').removeClass('icon icon-arrow-left')

    u('body').removeClass('no-js')
    u('.singlepost').addClass('animated fadeIn')
    if (u('p img').attr('alt') == 'coverimage') {
        if (window.screen.width > 960) {
            u('header').addClass('no-background')
            u('.panel-cover--overlay').addClass('animated fadeOut')
            u('.panel-cover__logo').addClass('visibility-hidden')
            u('.main-button').addClass('visibility-hidden')
            u('.soc').addClass('visibility-hidden')
            u('.blog-title').attr('href', '/#blog')
            u('.blog-title').text('')
            u('.blog-title').addClass('icon icon-arrow-left')
        } else {
            u('.coverimage').addClass('hidden')
            document.getElementsByClassName("panel-cover")[0].style.backgroundImage = "url('" + u('p img').attr('src') + "')" 
        }
    }

    if (
        (window.location.hash && window.location.hash === '#blog') ||
        window.location.pathname.substring(0, 5) === '/tag/' ||
        window.location.pathname.substring(0, 6) === '/page/' ||
        window.location.pathname.substring(0, 8) === '/resume/'
    ) {
        animateSider()
    }

    if (u('.panel-cover').hasClass('panel-cover--collapsed') === false) {
        u('.panel-cover__title').addClass('animated fadeInDown')
        u('.panel-cover__description').addClass('animated fadeIn')
        u('.navigation-wrapper').addClass('animated fadeInUp')
    } else {
        u('.mobile-top-right-button').addClass('display-block')
        u('.mobile-top-right-button').addClass('animated fadeInDown')
    }

    u('.btn-mobile-menu__icon').on('click', function () {
        u('.navigation-wrapper').toggleClass('visible')
        u('.btn-mobile-menu__icon').toggleClass(
            'icon-list icon-x-circle animated fadeIn'
        )
    })

    u('.navigation-wrapper .blog-button').on('click', function () {
        u('.navigation-wrapper').toggleClass('visible')
        u('.btn-mobile-menu__icon').toggleClass( 'icon-list icon-x-circle animated fadeIn')
    })

    u('a.blog-button').on('click', function () {
        animateSider()
    })

    function animateSider () {
        if (window.screen.width > 960) {
            u('.panel-cover').addClass('panel-cover--collapsed animated fadeInLeft')
        } else {
            u('.panel-cover').addClass('panel-cover--collapsed animated fadeInDown')
            u('.mobile-top-right-button').addClass('display-block')
            u('.mobile-top-right-button').addClass('animated fadeInDown')
        }
        u('article').addClass('animated fadeIn')
    }
})()