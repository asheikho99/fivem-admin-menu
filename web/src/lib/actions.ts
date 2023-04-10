interface Action {
    label: string;
    action: string;
    hideUI: boolean;
}

export default function getActions(): Action[] {
    const actions: Action[] = [
        { label: 'Respawn', action: 'menu:respawn', hideUI: true },
        { label: 'Heal', action: 'menu:heal', hideUI: false },
        { label: 'Invincible', action: 'menu:invincible', hideUI: false },
        {
            label: 'Add Wanted Level',
            action: 'menu:wantedLevelAdd',
            hideUI: false,
        },
        {
            label: 'Remove Wanted Level',
            action: 'menu:wantedLevelRemove',
            hideUI: false,
        },
        {
            label: 'Clear Wanted Level',
            action: 'menu:wantedLevelClear',
            hideUI: false,
        },
        {
            label: 'Resurrect Ped',
            action: 'menu:resurrectPedNetwork',
            hideUI: true,
        },
        { label: 'Fix Vehicle', action: 'menu:vehicleFix', hideUI: false },
    ];

    return actions;
}
