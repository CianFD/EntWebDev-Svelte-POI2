<script>
    import {mainBar, navBar, subTitle, title} from "../stores";
    import settingsicon from "/src/assets/settingsicon.png";
    import EditPoi from "../components/EditPoi.svelte";

    title.set("POI Island Guide");
    subTitle.set("Edit and then save your settings");

    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <img width="300" src="{settingsicon}" alt="settings">
    </div>
    <div class="uk-width-1-2@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge">
            <h3 class="uk-card-title uk-text-center">Edit any entry and press save</h3>
            <EditPoi/>
        </div>
    </div>
</div>