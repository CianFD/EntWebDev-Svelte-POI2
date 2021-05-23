<script lang="ts">
    import { onMount, getContext } from "svelte";
    const poiService = getContext("PoiService");

    let name = "";
    let latitude = 0;
    let longitude = 0;
    let description = "";
    let errorMessage = "";

    async function addPoi() {
        const success = await poiService.addPoi(name, latitude, longitude, description)
        if (success) {

        } else {
            errorMessage = "Donation not completed - some error occurred";
        }
    }
</script>

<form on:submit|preventDefault={addPoi} class="uk-form-stacked uk-text-left">
    <div class="uk-grid uk-grid-stack">
        <div class="uk-width-1-1">
            <div class="uk-margin">
                <label class="uk-form-label">Add New POI</label>
                <div class="uk-inline uk-width-1-1">
                    <label class="uk-form-label">Name</label>
                    <span class="uk-form-icon" uk-icon="icon: empty"></span>
                    <input class="uk-input uk-form-large" type="text" name="name" placeholder="Name">
                </div>
                <div class="uk-inline uk-width-1-1">
                    <label class="uk-form-label">Description</label>
                    <span class="uk-form-icon" uk-icon="icon: empty"></span>
                    <input class="uk-input uk-form-large" type="text" name="description" placeholder="Description">
                </div>
                <div class="uk-inline uk-width-1-1">
                    <label class="uk-form-label">Latitude</label>
                    <input class="uk-input uk-form-small" type="decimal" name="latitude" placeholder="0.0">
                </div>
                <div class="uk-inline uk-width-1-1">
                    <label class="uk-form-label">Longitude</label>
                    <input class="uk-input uk-form-small" type="decimal" name="longitude" placeholder="0.0">
                </div>
                <div class="uk-inline uk-width-1-1">
                    <button class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">Add POI</button>
                </div>
            </div>
        </div>
    </div>
</form>