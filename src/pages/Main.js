import { m, route } from "mithril";
import b from "bss";
import Layout from "./Layout";
import logo from "../assets/kliksob-bullet.png";

export default {
  count: 0,
  list: [],
  makeList: vnode => value => {
    return Array.from(null).fill(100);
  },
  view({ state }) {
    return m(Layout, {}, [
      m(".hero.hero-lg.bg-gray", [
        m(".hero-body.text-center", [
          m("img"+b.w(120).h(120), {
            src: logo
          }),
          m("h1", "Hello :)")
        ])
      ])
    ])
  }
}