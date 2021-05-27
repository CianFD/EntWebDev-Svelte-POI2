<script>
    import PoiList from "../components/PoiList.svelte";
    import UserList from "../components/UserList.svelte";

    import {navBar, adminBar, subTitle, title} from "../stores"

    title.set("Admin Dashboard");
    subTitle.set("View POIs Added and Users Registered");
    navBar.set({
        bar: adminBar
    });
</script>


<div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
    <PoiList/>
</div>
<div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
    <UserList/>
</div>