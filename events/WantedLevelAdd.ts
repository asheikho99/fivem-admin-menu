import { ScriptEvent } from './ScriptEvent';

export class WantedLevelAdd extends ScriptEvent {
    listen(): void {
        const playerPed = PlayerPedId();
        const currentWantedLevel = GetPlayerWantedLevel(PlayerId());
        const newWantedLevel = currentWantedLevel + 1;

        if (newWantedLevel < 5) {
            SetPlayerWantedLevel(PlayerId(), newWantedLevel, false);
            SetPlayerWantedLevelNow(PlayerId(), false);
            SetPlayerWantedLevelNoDrop(PlayerId(), newWantedLevel, false);
        }
    }
}
