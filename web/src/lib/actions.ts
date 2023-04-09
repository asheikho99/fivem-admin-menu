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
        { label: 'Remove Wanted', action: 'menu:removeWanted', hideUI: true },
        { label: 'Resurrect Ped', action: 'menu:resurrectPedNetwork', hideUI: true },
    ];

    return actions;
}
