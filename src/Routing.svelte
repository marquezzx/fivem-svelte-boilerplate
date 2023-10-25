<script>
  import "./styles/global.css"
  import Menu from "./components/Menu.svelte";
  import { Router, navigate, Route } from "svelte-routing";
  import { handleFetch } from "./handlers/handleFetch";
  window.addEventListener('message', ({ data }) => {
    if (data["action"] === "showUi") {
      navigate("/ui");
    }
  })
  window.addEventListener('keyup', ({ key }) => {
    if (key === "Escape") closeUi()
  })
  const closeUi = () => {
    handleFetch("removeFocus", {}, true).then(resp => {
      if (resp) navigate("/");
    })
  }
  export let url = ""
</script>
<Router {url}>
  <Route path="/" component={undefined} />
  <Route path="/ui" component={Menu} />
</Router>