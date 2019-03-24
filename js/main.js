$(document).ready(function(){
    $(".features__filter-menu-button").click(function(){
        var value = $(this).attr("data-filter");
        if (value == "filter-all")
        {
            $(".filter").show("1000");
        }
        else
        {
            $(".filter").not("."+value).hide("1000");
            $(".filter").filter("."+value).show("1000");
        }
    })
    //Add filter-button-active class
    $(".features__filter-menu-button").click(function(){
        $(this).addClass('features__filter-menu-button-active').siblings().removeClass('features__filter-menu-button-active');
    })
})