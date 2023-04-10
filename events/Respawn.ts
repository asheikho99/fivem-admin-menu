import { ScriptEvent } from './ScriptEvent';

export class Respawn extends ScriptEvent {
    listen(): void {
        SetEntityHealth(PlayerPedId(), 0);
    }
}
