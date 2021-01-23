$(document).ready(function(){
    if(direction=="down"){
       $('.whatsap-contact').show();
    } else{
       $('.whatsap-contact').hide();
    }
 },{
     offset: '60px;'
})




$(document).ready(function () {

    $('.claimedRight').each(function (f) {

        var newstr = $(this).text().substring(0, 50);
        $(this).text(newstr);

    });
})

$(document).ready(function() {
    $(document).on('click', '.heart-right', function () {
    $(this).toggleClass('heart-fav');
})
    $(document).on('click', '.heart-second', function () {
    $(this).toggleClass('heart-first');
})
})
$(document).ready(function() {
    $('.apply').on('click', function () {
        $('.apply-box').toggle();

    })
})


$(document).ready(function() {
    $('#more-btn-xx').on('click', function () {
        $('.etrafli-axtaris').show();
        $('.qisa-axtaris').hide();
    });
    $('.cross-right').on('click', function(){
         $('.qisa-axtaris').show();
         $('.etrafli-axtaris').hide();
    })
})

			$(document).ready(function() {
			  $('.nav-tabs > li > a').click(function(event) {
			    event.preventDefault(); //stop browser to take action for clicked anchor
			    //get displaying tab content jQuery selector
			    var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');
			    //find actived navigation and remove 'active' css
			    var actived_nav = $('.nav-tabs > li.active');
			    actived_nav.removeClass('active');
			    //add 'active' css into clicked navigation
			    $(this).parents('li').addClass('active');
			    //hide displaying tab content
			    $(active_tab_selector).removeClass('active');
			    $(active_tab_selector).addClass('hide');
			    //show target tab content
			    var target_tab_selector = $(this).attr('href');
			    $(target_tab_selector).removeClass('hide');
			    $(target_tab_selector).addClass('active');
			  });
			});
