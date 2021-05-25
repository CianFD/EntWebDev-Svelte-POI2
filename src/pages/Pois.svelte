<script>
    import PoiList from "../components/PoiList.svelte";
    import report from "/src/assets/report.png";
    import {navBar, mainBar, subTitle, title} from "../stores"

    title.set("POI Report");
    subTitle.set("List of Islands Added");
    navBar.set({
        bar: mainBar
    });
</script>


<div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
    <PoiList/>
</div>
