interface Action {
    label: string;
    action: string;
    hideUI: boolean;
}

export default function getActions(): Action[] {
    const actions: Action[] = [
        { label: 'Respawn', action: 'menu:respawn', hideUI: true },
        { label: 'Heal', action: 'menu:heal', hideUI: false },
        { label: 'Invincible', action: 'menu:invincible', hideUI: true },
        { label: 'Add Wanted Level', action: 'menu:addWantedLevel', hideUI: false },
        { label: 'Remove Wanted Level', action: 'menu:removeWantedLevel', hideUI: false },
        { label: 'Clear Wanted Level', action: 'menu:clearWantedLevel', hideUI: false },
        { label: 'Resurrect Ped', action: 'menu:resurrectPedNetwork', hideUI: true },
        { label: 'Fix Vehicle', action: 'menu:fixVehicle', hideUI: false}
    ];

    return actions;
}
