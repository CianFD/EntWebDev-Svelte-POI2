<script>
    import {title, subTitle, navBar, welcomeBar} from "../stores"
    import homepage from "/src/assets/homepage.jpg";
    title.set("The Islands of Ireland");
    subTitle.set("Sign Up or Log In!");

    navBar.set({
        bar: welcomeBar
    });
</script>

<div class="uk-container uk-margin">
    <div class="uk-child-width-expand uk-flex-center uk-flex-middle uk-text-center" uk-grid>
        <div class="uk-width-auto@m">
            <img width="500" src="{homepage}" alt="homepage" />
        </div>
        <div class="uk-width-expand@m">
            <h1 class="uk-heading-small">See the Islands of Ireland!</h1>
            <p>Sign Up to see the Islands and Add Islands not recorded yet!</p>
        </div>
    </div>
</div>