/* ハンバーガーメニューの設定 */
$(document).ready(function () {
    var $menuButton = $(".header__menu-btn__trigger");
    var $nav = $("#g-nav");

    // ハンバーガーボタンがクリックされたときの初期状態
    $menuButton.click(function () {
        $menuButton.toggleClass("is-active"); // アイコンの切り替え
        $nav.toggleClass("js-drawer");
    });

    // メニュー内のリンクをクリックしたときにメニューを閉じる
    $nav.find("a").click(function () {
        $menuButton.removeClass("is-active");
        $nav.removeClass("js-drawer");
    });
});
