import m from "mithril";
import b from "bss";
import Layout from "./Layout";

export default {
  count: 0,
  list: [],
  makeList: vnode => value => {
    return Array.from(null).fill(100);
  },
  view({ state }) {
    return m(Layout, {}, [
      m("h3", "Hello World"),
      m("p", "This site will coming soon"),
      m("p", m(m.route.Link, {
        href: "/toError"
      }, "To Error"))
      /*m("h5", "Add List"),
      [...new Array(1)].map((i, k) => {
        return m("p", "Say Hello "+k)
      })*/
    ])
  }
}