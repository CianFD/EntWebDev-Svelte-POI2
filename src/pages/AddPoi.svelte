<script>
    import addisland from "/src/assets/addisland.jpg";
    import {navBar, mainBar, subTitle, title} from "../stores"
    import Add from "../components/Add.svelte";

    title.set("Add Place Of Interest");
    subTitle.set("Add an Island to our Repository");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <img width="300" src="{addisland}" alt="homer">
        </div>
    </div>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <Add/>
        </div>
    </div>
</div>