<script lang="ts">
    import ActionButton from './ActionButton.svelte';
    import getActions from '../lib/actions';
    const actions = getActions();
</script>

<div class="flex flex-col overflow-y-scroll divide-y divide-gray-200">
    {#each actions as action}
        <ActionButton
            label={action.label}
            action={action.action}
            hideUI={action.hideUI} />
    {/each}
</div>
