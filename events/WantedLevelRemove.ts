import { ScriptEvent } from './ScriptEvent';

export class WantedLevelRemove extends ScriptEvent {
    listen(): void {
        let currentWantedLevel = GetPlayerWantedLevel(PlayerId());
        if (currentWantedLevel > 0) {
            SetPlayerWantedLevel(PlayerId(), --currentWantedLevel, false);
            SetPlayerWantedLevelNow(PlayerId(), false);
            SetPlayerWantedLevelNoDrop(PlayerId(), --currentWantedLevel, false);
        }
    }
}
