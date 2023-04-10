console.log('Hello from client.ts');

RegisterCommand(
    'menu',
    () => {
        SendNUIMessage({
            action: 'setVisible',
            data: true,
        });
        SetNuiFocus(true, true);
    },
    false
);

RegisterNuiCallback('getClientData', (data: string, cb: ({}) => void) => {
    const [x, y, z] = GetEntityCoords(PlayerPedId(), true);

    cb({
        x: x.toFixed(2),
        y: y.toFixed(2),
        z: z.toFixed(2),
    });
});

RegisterNuiCallback('hideUI', (data: string, cb: ({}) => void) => {
    cb({});
    SetNuiFocus(false, false);
});

RegisterNuiCallback('menu:respawn', (data: string, cb: ({}) => void) => {
    SetEntityHealth(PlayerPedId(), 0);
    cb({});
});

RegisterNuiCallback('menu:heal', (data: string, cb: ({}) => void) => {
    SetEntityHealth(PlayerPedId(), 200);
    cb({});
});

RegisterNuiCallback('menu:invincible', (data: string, cb: ({}) => void) => {
    const playerPed = PlayerPedId();
    const invincible = GetPlayerInvincible(PlayerId());

    SetEntityInvincible(playerPed, !invincible);
    SetPedCanRagdoll(playerPed, !invincible);
    SetEntityAlpha(playerPed, invincible ? 255 : 153, false);
    
    cb({});
});

RegisterNuiCallback('menu:removeWanted', (data: string, cb: ({}) => void) => {
    SetPlayerWantedLevel(PlayerId(), 0, false);
    cb({});
});

RegisterNuiCallback('menu:fixVehicle', (data: string, cb: ({}) => void) => {
    const vehicle = GetVehiclePedIsIn(PlayerPedId(), false);
    SetVehicleFixed(vehicle);
    cb({});
});

RegisterNuiCallback('menu:resurrectPedNetwork', (data: string, cb: ({}) => void) => {
    const [x, y, z] = GetEntityCoords(PlayerPedId(), true);
    NetworkResurrectLocalPlayer(x, y, z, 0, true, false);
    cb({});
});
