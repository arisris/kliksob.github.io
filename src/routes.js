import Main from "./pages/Main";
import Err from "./pages/404";

export default {
  "/": Main,
  "/:err...": Err
}