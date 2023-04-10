import { ScriptEvent } from './ScriptEvent';

export class VehicleFix extends ScriptEvent {
    listen(): void {
        const vehicle = GetVehiclePedIsIn(PlayerPedId(), false);
        SetVehicleFixed(vehicle);
    }
}
