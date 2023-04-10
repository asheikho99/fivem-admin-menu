import { Respawn } from '../events/Respawn';
import { Heal } from '../events/Heal';
import { Invincible } from '../events/Invincible';
import { VehicleFix } from '../events/VehicleFix';
import { ResurrectPedNetwork } from '../events/ResurrectPedNetwork';
import { WantedLevelClear } from '../events/WantedLevelClear';
import { WantedLevelAdd } from '../events/WantedLevelAdd';
import { WantedLevelRemove } from '../events/WantedLevelRemove';

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

RegisterNuiCallback('menu:hideUI', (data: string, cb: ({}) => void) => {
    SetNuiFocus(false, false);
});

RegisterNuiCallback('menu:respawn', (data: string, cb: ({}) => void) => {
    const respawn = new Respawn('menu:respawn', data, cb);
    respawn.listen();
});

RegisterNuiCallback('menu:heal', (data: string, cb: ({}) => void) => {
    const heal = new Heal('menu:heal', data, cb);
    heal.listen();
});

RegisterNuiCallback('menu:invincible', (data: string, cb: ({}) => void) => {
    const invincible = new Invincible('menu:invincible', data, cb);
    invincible.listen();
});

RegisterNuiCallback('menu:vehicleFix', (data: string, cb: ({}) => void) => {
    const vehicleFix = new VehicleFix('menu:vehicleFix', data, cb);
    vehicleFix.listen();
});

RegisterNuiCallback(
    'menu:resurrectPedNetwork',
    (data: string, cb: ({}) => void) => {
        const resurrectPedNetwork = new ResurrectPedNetwork(
            'menu:resurrectPedNetwork',
            data,
            cb
        );
        resurrectPedNetwork.listen();
    }
);

RegisterNuiCallback(
    'menu:wantedLevelClear',
    (data: string, cb: ({}) => void) => {
        const wantedLevelClear = new WantedLevelClear(
            'wantedLevelClear',
            data,
            cb
        );

        wantedLevelClear.listen();
    }
);

RegisterNuiCallback('menu:wantedLevelAdd', (data: string, cb: ({}) => void) => {
    const wantedLevelAdd = new WantedLevelAdd('wantedLevelAdd', data, cb);
    wantedLevelAdd.listen();
});

RegisterNuiCallback(
    'menu:wantedLevelRemove',
    (data: string, cb: ({}) => void) => {
        const wantedLevelRemove = new WantedLevelRemove(
            'wantedLevelRemove',
            data,
            cb
        );

        wantedLevelRemove.listen();
    }
);
