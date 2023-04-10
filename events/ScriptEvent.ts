import { IScriptEvent } from '../interfaces/IScriptEvent';

export abstract class ScriptEvent implements IScriptEvent {
    private eventName: string;
    private data: string;
    private cb: ({}) => void;

    constructor(eventName: string, data: string, cb: ({}) => void) {
        this.eventName = eventName;
        this.data = data;
        this.cb = cb;
    }

    getEventName(): string {
        return this.eventName;
    }

    getData(): string {
        return this.data;
    }

    getCallback(): ({}) => void {
        return this.cb;
    }

    abstract listen(): void;
}
