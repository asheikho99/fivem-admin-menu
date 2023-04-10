<script lang="ts">
    import { visibility } from '../store/stores';
    import { fetchNui } from '../utils/fetchNui';

    export let label: string;
    export let action: string;
    export let hideUI: boolean;
</script>

<button
    class="text-left even:bg-gray-100 odd:bg-white flex-1 px-4 py-2.5"
    on:click={() => {
        fetchNui(action);

        if (hideUI) {
            visibility.set(false);
            fetchNui('menu:hideUI');
        }
    }}>{label}</button>
