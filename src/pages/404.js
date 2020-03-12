import { m, route } from "mithril";
import b from "bss";
import Layout from "./Layout";
import faTired from "famicon/dist/regular/faTired";

export default {
  view() {
    return m(Layout, {}, m(".empty"+b`
      background none
    `, [
      m(".empty-icon", m("i"+b.color("#5755d9").$nest("svg", b.w(100).h(100)), m(faTired))),
      m("p.empty-title.h3", "404 Page Not Found"),
      m("p.empty-subtitle", "The Page You are requested not found on our sites"),
      m(".empty-action", [
        m("button.btn.btn-link", {
          onclick: () => route.set("/")
        }, "Home")
      ])
    ]))
  }
}