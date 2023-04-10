import { ScriptEvent } from './ScriptEvent';

export class Invincible extends ScriptEvent {
    listen(): void {
        const playerPed = PlayerPedId();
        const invincible = GetPlayerInvincible(PlayerId());

        SetEntityInvincible(playerPed, !invincible);
        SetPedCanRagdoll(playerPed, !invincible);
        SetEntityAlpha(playerPed, invincible ? 255 : 153, false);
    }
}
