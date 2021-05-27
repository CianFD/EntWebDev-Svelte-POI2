<script>
    export let latitude = 0.0;
    export let longitude = 0.0;
</script>

<form class="uk-grid-small" uk-grid>
    <div class="uk-width-1-2@s">
        <label class="uk-form-label">Latitude</label>
        <input class="uk-input" type="number" bind:value={latitude}>
    </div>
    <div class="uk-width-1-2@s">
        <label class="uk-form-label">Longitude</label>
        <input class="uk-input" type="number" bind:value={longitude}>
    </div>
</form>