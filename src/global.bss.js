import b from "bss";
if (process.env.NODE_ENV !== "production") b.setDebug(true);
// CSS reset based on github.com/jgthms/minireset.css
b.css(
  "html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6",
  b.m(0).p(0)
);
b.css("h1,h2,h3,h4,h5,h6", b.fs("100%").fw("normal"));
b.css("ul", b.ls("none"));
b.css("button,input,select,textarea", b.m(0));
b.css("html", b.boxSizing("border-box"));
b.css("*,*::before,*::after", b.boxSizing("inherit"));
b.css("img,video", b.h("auto").mw("100%"));
b.css("iframe", b.border(0));
b.css("table", b.borderCollapse("collapse").borderSpacing(0));
b.css("td,th", b.p(0));
b.css("td:not([align]),th:not([align])", b.ta("left"));

// My glogal styles
b.css("*,*::before,*::after", b.boxSizing("inherit"));
b.css(
  "html",
  b`
  box-sizing border-box
  font-size 20px
  -webkit-tap-highlight-color transparent
`
);

b.css(
  "body",
  b`
  background #fff
  color #3b4351
  font-family -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif
  font-size .8rem
  overflow-x hidden;
  text-rendering optimizeLegibility
`
);
b.css(
  "a",
  b`
  color #5755d9
  outline none
  text-decoration none
`
);
b.css(
  "a:focus",
  b`
  box-shadow 0 0 0 .1rem rgba(87, 85, 217, .2)
`
);
b.css(
  "a:focus,a:hover,a:active,a.active",
  b`
  color: #302ecd;
  text-decoration: underline;
`
);

b.css(
  ".debug",
  b
    .outline("1px solid  #2980B9!important")
    .$nest("&.debug-child *", b.outline("1px solid  grey!important"))
);

// A global helper
b.helper({
  colorPrimary: () => b.color("blue")
});
