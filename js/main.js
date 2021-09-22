$(function () {
  // ハンバーガーメニューの実装
  $(".js-hamburger").click(function () {
    $(this).toggleClass("is-open");
    $(".p-Nav__body").slideToggle(200);
  });

  // アコーディオンメニューの実装
  $(".menu-item").hover(function () {
    $(this).children(".sub-menu").stop().slideToggle(200);
    $(this).find(".has-sub").toggleClass("open");
  });
});
