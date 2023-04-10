import { ScriptEvent } from './ScriptEvent';

export class Heal extends ScriptEvent {
    listen(): void {
        SetEntityHealth(PlayerPedId(), 200);
    }
}
