import { m, route } from "mithril";
import b from "bss";
import faGithubSquare from "famicon/dist/brands/faGithubSquare";
import faFacebookSquare from "famicon/dist/brands/faFacebookSquare";
import logo from "../assets/kliksob-small.png";

export default {
  sideActive: false,
  view({ children, state }) {
    return [
      m("header"+b`
        height 60px
        position fixed
        display flex
        align-items center
        justify-content space-between
        padding 0 8px 0 8px
        top 0
        left 0
        right 0
        z-index 100
      `.$media("(max-width: 960px)", b`
        backdrop-filter blur(5px)
        background rgba(87, 85, 217, 0.03)
        left 0
      `).$nest("> *", b.padding("0 1px 0 1px")), [
        m("div", m(route.Link, {
          href: "/",
          className: "h5 "+b`
            display none
            text-decoration none
          `.$nest(":visited", b.color("#5755d9")).class,
        }, m("img", {
          src: logo
        }))),
        m(""+b`
          display flex
          width 240
          justify-content flex-end
        `, [
        m("a[href=https://fb.me/arisfungratis][target=_blank].btn.btn-link", m("i.famicon", m(faFacebookSquare))),
          m("a[href=https://github.com/kliksob][target=_blank].btn.btn-link", m("i.famicon", m(faGithubSquare)))
        ])
      ]),
      m("main#main-content"+b`
        margin-top 60px
        min-height calc(100vh - 110px)
      `, children),
      m("footer"+b`
        display flex
        align-items center
        justify-content center
        height 50px
        padding 0 10px 0 10px
      `, [
        m("span", m.trust("&copy;"), " ", new Date().getFullYear(), " Kliksob.com")
      ])
    ]
  }
}