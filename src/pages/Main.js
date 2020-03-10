import m from "mithril";
import b from "bss";
import Layout from "./Layout";

export default {
  view() {
    return m(Layout, {}, [
      m("h3", "Hello World"),
      m("p", "This site will coming soon")
    ])
  }
}