<script>
  import {onMount, getContext} from 'svelte'
  import { PoiService } from "../services/poi-service";
  const poiService = getContext("PoiService");

  let poiList;
  onMount(async () => {
    poiList = await poiService.getPois()
  })
</script>

<h3 class="uk-heading-divider">
  POI List </h3>
<div class="uk-table uk-table-divider">
  <table class="uk-table">
    <thead>
    <th>Name</th>
    <th>Latitude</th>
    <th>Longitude</th>
    <th>Description</th>
    </thead>
    <tbody class="uk-text-left">
      {#if poiList}
        {#each poiList as poi}
          <tr>
            <td>{poi.name}</td>
            <td>{poi.latitude}</td>
            <td>{poi.longitude}</td>
            <td>{poi.description}</td>
          </tr>
        {/each}
      {/if}
    </tbody>
  </table>
</div>
