<script>
  import {setContext} from "svelte";
  import Pois from "./pages/Pois.svelte";
  import {PoiService} from "./services/poi-service";
  import Users from "./pages/Users.svelte";
  import Navigator from "./components/Navigator.svelte";

  setContext("PoiService", new PoiService("http://localhost:4000"));
</script>

<div class="uk-container">
  <Navigator/>
  <Pois/>
  <Users/>
</div>
