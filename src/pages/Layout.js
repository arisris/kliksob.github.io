import m from "mithril";
import b from "bss";


export default {
  view({ children }) {
    return m(""+b`
        max-width 740px
        margin auto
        padding auto
      `.$nest("> *", b.p(2)), [
      m("header"+b``),
      m("main"+b`
        
      `, children),
      m("footer"+b`
      `, [
        //m("ul", )
      ])
    ])
  }
}