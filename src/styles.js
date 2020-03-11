import b from "bss";
if (process.env.NODE_ENV !== "production") b.setDebug(true);
b.$import("https://cdn.jsdelivr.net/npm/spectre.css@0.5.8/dist/spectre.min.css");
b.$import("https://cdn.jsdelivr.net/npm/spectre.css@0.5.8/dist/spectre-icons.min.css");
//b.$import("https://cdn.jsdelivr.net/npm/spectre.css@0.5.8/dist/spectre-exp.min.css");

b.css("svg", b.fill("currentColor"));
b.css(".famicon svg", b.w(24).h(24));
b.css(
  ".debug",
  b
    .outline("1px solid  #2980B9!important")
    .$nest("&.debug-child *", b.outline("1px solid  grey!important"))
);

b.helper({
  
});