<script>
    import {getContext} from "svelte";

    let name = "";
    let description = "";
    let latitude = 0;
    let longitude = 0;
    let message = "";

    const poiService = getContext("PoiService");

    async function savePoi() {
        let success = await poiService.editPoi(name, description, latitude, longitude)
        if (success) {
            message = "Poi updated";
        } else {
            message = "Error Trying to save Poi";
        }
    }
</script>

<form on:submit|preventDefault={savePoi} class="uk-form-stacked uk-text-left">
    <div class="uk-grid uk-grid-stack">
        <div class="uk-width-1-1">
            <div class="uk-margin">
                <label class="uk-form-label">Edit POI</label>
                <div class="uk-inline uk-width-1-1">
                    <label class="uk-form-label">Name</label>
                    <span class="uk-form-icon" uk-icon="icon: empty"></span>
                    <input bind:value={name} class="uk-input" id="form-stacked-text" type="string" name="name" placeholder="Name">
                </div>
                <div class="uk-inline uk-width-1-1">
                    <label class="uk-form-label">Description</label>
                    <span class="uk-form-icon" uk-icon="icon: empty"></span>
                    <input bind:value={description} class="uk-input" id="form-stacked-text" type="string" name="description" placeholder="Description">
                </div>
                <div class="uk-inline uk-width-1-1">
                    <label class="uk-form-label">Latitude</label>
                    <input bind:value={latitude} class="uk-input" id="form-stacked-text" type="decimal" name="latitude" placeholder="0.0">
                </div>
                <div class="uk-inline uk-width-1-1">
                    <label class="uk-form-label">Longitude</label>
                    <input bind:value={longitude} class="uk-input" id="form-stacked-text" type="decimal" name="longitude" placeholder="0.0">
                </div>
                <div class="uk-inline uk-width-1-1">
                    <button class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">Add POI</button>
                </div>
            </div>
        </div>
    </div>
</form>