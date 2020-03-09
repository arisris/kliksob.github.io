import m from "mithril";
import routes from "./routes";
import "./global.style.js";

const pages = {};
Object.keys(routes).forEach(key => {
  pages[key] = {
    onmatch(attrs, pathname) {
      return routes[key].onmatch
        ? routes[key].onmatch(attrs, pathname)
        : routes[key];
    },
    render(v) {
      return v;
    }
  }
});

m.route.prefix = "";
m.route(document.body, "/", pages);

if (module.hot) {
  //module.hot.accept();
}