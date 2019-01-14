
$(function () {
    // 页面跳转
    $(".index-header-bar-menu li").each(function (i) {
        $(this).on("click",function (i) {
            if($(this).className != "active"){
                $(this).addClass("active");
            }
            if($(this).className == "active"){
                $(this).removeClass("active");
            }
        })
    })

    //点击箭头隐藏于显示
    $(".index-header-show").css({"display":"none"});
    $(".icon-icon_arrow_bottom").on("click",function () {
        $(".index-header-show").css({"display":"block"});

        if($(".index-header-show").css("display") == "block"){
            $(".upjt").on("click",function () {
                $(".index-header-show").css({"display":"none"});
            });
        }
    });

})


// 轮播图
$(function () {
    var swiper = new Swiper('.mom-swiper', {
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay:true,
        loop:true,
        clickable:true
    });
})
