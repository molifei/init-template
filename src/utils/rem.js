//小米官网rem自适应代码
!function (n,uiWidth) {
  var e = n.document,
    t = e.documentElement,
    i = uiWidth,
    d = i / 1,
    o = "orientationchange" in n ? "orientationchange" : "resize",
    a = function () {
      var n = t.clientWidth || 320;
      n > uiWidth && (n = uiWidth);
      console.log(n)
      t.style.fontSize = n / d + "px"
    };
  e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
}(window);
