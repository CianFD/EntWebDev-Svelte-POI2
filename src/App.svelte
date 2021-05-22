<script>
  import {setContext} from "svelte";
  import {PoiService} from "./services/poi-service";
  import Users from "./pages/Users.svelte";
  import Main from "./pages/Main.svelte";
  import Login from "./pages/Login.svelte"
  import Pois from "./pages/Pois.svelte";
  import Navigator from "./components/Navigator.svelte";
  import Router from "svelte-spa-router";

  setContext("PoiService", new PoiService("http://localhost:4000"));

  let routes = {
    "/" : Main,
    "/login": Login,
    "/users": Users,
    "/pois": Pois,
    "/logout" : Main,
  }

</script>

<div class="uk-container">
  <Navigator/>
  <Router {routes} />
</div>
