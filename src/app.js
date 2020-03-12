import { m, route } from "mithril";
import routes from "./routes";
import "./styles";

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

//route.prefix = "#!";
route(document.body, "/", pages);

if (module.hot) {
  //module.hot.accept();
}
