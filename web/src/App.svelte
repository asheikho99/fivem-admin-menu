<script lang="ts">
    import './app.css';

    import Menu from './components/Menu.svelte';
    import VisibilityProvider from './providers/VisibilityProvider.svelte';
    import { debugData } from './utils/debugData';

    debugData([
        {
            action: 'setVisible',
            data: true,
        },
    ]);
</script>

<main>
    <VisibilityProvider>
        <Menu />
    </VisibilityProvider>
</main>
