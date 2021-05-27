<script>
    import {title, subTitle, navBar, welcomeBar} from "../stores"
    import AdminLogin from "../components/AdminLogin.svelte"
    import login from "/src/assets/login.jpg";
    title.set("Islands of Ireland Guide");
    subTitle.set("Admin Staff - Please Log in");

    navBar.set({
        bar: welcomeBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-2-3@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <h3 class="uk-card-title uk-text-center">Welcome back!</h3>
            <AdminLogin />
        </div>
    </div>
    <div class="uk-width-1-3@m ">
        <img width="300" src="{login}" alt="homer">
    </div>
</div>