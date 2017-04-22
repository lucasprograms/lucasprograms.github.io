$(document).ready(function () {
    console.log($)

    $('.email').on('click', function () {
        $('.email-label').addClass('hidden')
        $('.email-address').removeClass('hidden')
        $('.email-address').focus()
        $('.email-address').select()
    })
})

