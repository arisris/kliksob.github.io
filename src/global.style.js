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
