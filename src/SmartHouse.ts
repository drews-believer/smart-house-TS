import { DeviceInterface } from "./DeviceInterface"
import * as Collections from 'typescript-collections';
import Dictionary from "typescript-collections/dist/lib/Dictionary";
import { AbstractDevice } from "./AbstractDevice";



export class SmartHouse<T extends DeviceInterface> {
    public _devices = new Collections.Dictionary<string, T>();

    constructor() {}

    addDevice(key:string, entity:T):void {
        this._devices.setValue(key, entity);
    }

    deleteDevice(key:string):void {
        this._devices.remove(key);
    }

    get allDevices(): Dictionary<string, DeviceInterface> {
        return this._devices;
    }

    deleteAllDevices():void {
        this._devices.clear();
    }

    getDeviceByKey(key: string) {
        return this._devices.getValue(key);
    }
}

