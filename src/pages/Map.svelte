<script>
    import 'leaflet/dist/leaflet.css';
    import {mainBar, navBar, subTitle, title} from "../stores"
    import {LeafletMap} from '../services/leaflet-map';
    import {getContext, onMount} from "svelte";

    const poiService = getContext("PoiService");

    let latitude = 52.160858;
    let longitude = -7.152420;

    let map;
    onMount(async () => {
        const mapConfig = {
            location: {lat: latitude, lng: longitude},
            zoom: 8,
            minZoom: 1,
        };
        map = new LeafletMap("poi-map", mapConfig, 'Terrain');
        map.addLayerGroup('Pois');
        map.showZoomControl();
        map.showLayerControl();
        const pois = poiService.poiList;
        pois.forEach(poi=>{
            const poiStr = `${poi.name}`;
            if (poi.location) {
                map.addMarker({lat: poi.location.latitude, lng: poi.location.longitude}, poiStr, 'Pois');
            }
        });
    });

    title.set("POI Island Guide");
    subTitle.set("Map of all Islands");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-1-1">
        <div id="poi-map" class="ui embed" style="height:800px"></div>
    </div>
</div>