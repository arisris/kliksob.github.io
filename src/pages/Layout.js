import m from "mithril";
import b from "bss";
import faGithubSquare from "famicon/dist/brands/faGithubSquare";

export default {
  view({ children }) {
    return [
      m("header"+b`
        height 60px
        position fixed
        display flex
        align-items center
        justify-content space-between
        padding 0 10px 0 10px
        top 0
        left 0
        right 0
        z-index 100
      `.$media("(max-width: 960px)", b`
        backdrop-filter blur(5px)
        background rgba(87, 85, 217, 0.03)
        left 0
      `), [
        m("a.btn.btn-link.btn-action[href=#]", m("i.icon.icon-menu")),
        m(""+b`
          display flex
          width 240
          justify-content flex-end
        `, [
          m("a[href=https://github.com/kliksob][target=_blank].btn.btn-link", m("i.famicon", m(faGithubSquare)))
        ])
      ]),
      m("aside.menu"+b`
        display none
        position absolute
        top 60
        bottom 5
        z-index 100
      `, [...new Array(4)].map((v, i) => {
          return m("li.menu-item", m("a[href=#]", "Menu "+i))
      })),
      m("main.container"+b`
        margin-top 60px
        min-height calc(100vh - 110px)
      `, children),
      m("footer"+b`
        display flex
        align-items center
        height 50px
        padding 0 10px 0 10px
      `, [
        m("span", m.trust("&copy;"), " ", new Date().getFullYear(), " Kliksob.com")
      ])
    ]
  }
}