// $(document).ready(function () {
//     $('.title').hide();
//     // $("選擇器").事件();
// });

$(document).ready(function () {
    $('h1').click(function (event) { 
        $('p').toggleClass('orange');
        $('div').slideUp(1000).slideDown(2000);
    });
});