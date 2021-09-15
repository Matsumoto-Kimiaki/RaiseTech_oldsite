$(function () {
  
  // ハンバーガーメニューの実装
  $("#hamburger_button").click(function () {
    $(this).toggleClass("active");
    $(".p-Nav__body").slideToggle(200);
  });

  // アコーディオンメニューの実装
  $(".has-sub").hover(function () {
    $(this).children(".sub-menu").stop().slideToggle(300);
    $(this).toggleClass("open");
    $(".has-sub").not(this).removeClass("open");
    $(".has-sub").not($(this)).next(".sub-menu").slideUp();
  });
});
