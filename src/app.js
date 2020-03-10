import m from "mithril";
import routes from "./routes";
import "spectre.css/dist/spectre.css";
import "spectre.css/dist/spectre-exp.css";
import "spectre.css/dist/spectre-icons.css";
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
  };
});

m.route.prefix = "";
m.route(document.body, "/", pages);

if (module.hot) {
  //module.hot.accept();
}
