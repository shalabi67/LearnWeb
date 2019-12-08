$(document).ready(function () {
    $('.header-phone').waypoint(function (direction) {
        $('.header-phone').addClass('animated slideInUp');
       // $('.iphone-off').addClass('slideInDown');
        //alert(this.element.id + ' triggers at ' + this.triggerPoint)
    }, {
        offset: '75%'
    })
});