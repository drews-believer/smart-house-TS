import { DeviceInterface } from "./DeviceInterface";
import * as Collections from 'typescript-collections';
import Dictionary from "typescript-collections/dist/lib/Dictionary";

export class SmartHouse<T extends DeviceInterface> {
    private _devices = new Collections.Dictionary<string, T>();

    constructor() {}

    addDevice(entity:T):void {
        this._devices.setValue(entity.getName() ,entity);
    }

    deleteDevice(key:string):void {
        this._devices.remove(key);
    }

    get allDevices(): Dictionary<string, T> {
        return this._devices;
    }

    deleteAllDevices():void {
        this._devices.clear();
    }

    getDeviceByKey(key: string): T {
        return this._devices.getValue(key);
    }

    everythingOn(): void {
        for (let val of this._devices.values()) {
            val.on();
        }
    }

    everythingOff(): void {
        for (let val of this._devices.values()) {
            val.off();
        }
    }
}

