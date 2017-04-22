$(document).ready(function () {
    $('.email').on('click', function () {
        $('.email-label').addClass('hidden')
        $('.email-address').removeClass('hidden')
        $('.email-address').focus()
        $('.email-address').select()
    })
})

