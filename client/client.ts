console.log('Hello from client.ts');

RegisterCommand(
    'svelte:show',
    () => {
        SendNUIMessage({
            action: 'setVisible',
            data: true,
        });
        SetNuiFocus(true, true);
    },
    false
);

RegisterNuiCallback('getClientData', (data: any, cb: ({}) => void) => {
    const [x, y, z] = GetEntityCoords(PlayerPedId(), true);

    cb({
        x: x.toFixed(2),
        y: y.toFixed(2),
        z: z.toFixed(2),
    });
});

RegisterNuiCallback('hideUI', (data: any, cb: ({}) => void) => {
    cb({});
    SetNuiFocus(false, false);
})