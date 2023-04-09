<script lang="ts">
    import ActionsList from '../components/ActionsList.svelte';
    import SearchBar from '../components/SearchBar.svelte';
    import Sections from '../components/Sections.svelte';
</script>

<div class="flex flex-row h-screen p-4 my-auto justify-end overflow-hidden">
    <div
        class="flex flex-col bg-slate-700 h-[1000px] max-h-[1000px] max-w-sm w-full my-auto">
        <Sections />
        <SearchBar />
        <ActionsList />
    </div>
</div>
