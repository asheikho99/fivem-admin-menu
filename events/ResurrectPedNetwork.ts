import { ScriptEvent } from './ScriptEvent';

export class ResurrectPedNetwork extends ScriptEvent {
    listen(): void {
        const [x, y, z] = GetEntityCoords(PlayerPedId(), true);
        NetworkResurrectLocalPlayer(x, y, z, 0, true, false);
    }
}
