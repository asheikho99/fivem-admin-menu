import { ScriptEvent } from './ScriptEvent';

export class WantedLevelClear extends ScriptEvent {
    listen(): void {
        SetPlayerWantedLevel(PlayerId(), 0, false);
    }
}
