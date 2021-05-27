<script>
  import {setContext} from "svelte";
  import {PoiService} from "./services/poi-service";
  import Users from "./pages/Users.svelte";
  import Main from "./pages/Main.svelte";
  import Login from "./pages/Login.svelte";
  import Signup from "./pages/Signup.svelte";
  import Settings from "./pages/Settings.svelte";
  import Edit from "./pages/Edit.svelte";
  import AddPoi from "./pages/AddPoi.svelte";
  import Pois from "./pages/Pois.svelte";
  import Map from "./pages/Map.svelte"
  import Navigator from "./components/Navigator.svelte";
  import Router from "svelte-spa-router";
  import AdminSignup from "./pages/AdminSignup.svelte";
  import AdminLogin from "./pages/AdminLogin.svelte";
  import AdminDashboard from "./pages/AdminDashboard.svelte";

  setContext("PoiService", new PoiService("http://localhost:4000"));

  let routes = {
    "/" : Main,
    "/login": Login,
    "/signup" : Signup,
    "/add": AddPoi,
    "/users": Users,
    "/pois": Pois,
    "/map": Map,
    "/pois/:id": Edit,
    "/logout" : Main,
    "/settings" : Settings,
    "/adminlogin" : AdminLogin,
    "/adminsignup" : AdminSignup,
    "/admindashboard" : AdminDashboard
  }

</script>

<div class="uk-container">
  <Navigator/>
  <Router {routes} />
</div>
