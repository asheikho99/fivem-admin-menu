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
});

RegisterNuiCallback('menu:respawn', (data: any, cb: ({}) => void) => {
    SetEntityHealth(PlayerPedId(), 0);
    cb({});
});

RegisterNuiCallback('menu:heal', (data: any, cb: ({}) => void) => {
    SetEntityHealth(PlayerPedId(), 200);
    cb({});
});

RegisterNuiCallback('menu:invincible', (data: any, cb: ({}) => void) => {
    const playerPed = PlayerPedId();
    const invincible = GetPlayerInvincible(PlayerId());

    SetEntityInvincible(playerPed, !invincible);
    SetPedCanRagdoll(playerPed, !invincible);
    SetEntityAlpha(playerPed, invincible ? 255 : 153, false);

});

RegisterNuiCallback('menu:removeWanted', (data: any, cb: ({}) => void) => {
    SetPlayerWantedLevel(PlayerId(), 0, false);
    cb({});
});

RegisterNuiCallback('menu:fixVehicle', (data: any, cb: ({}) => void) => {
    const vehicle = GetVehiclePedIsIn(PlayerPedId(), false);
    SetVehicleFixed(vehicle);
    cb({});
});

RegisterNuiCallback('menu:respawnPed', (data: any, cb: ({}) => void) => {
    const [x, y, z] = GetEntityCoords(PlayerPedId(), true);
    NetworkResurrectLocalPlayer(x, y, z, 0, true, false);
    cb({});
});
