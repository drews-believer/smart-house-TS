import { DigitalWatch } from "./DigitalWatch";
import { Multicooker } from "./Multicooker";
import { SmartHouse } from "./SmartHouse";
import { AbstractDevice } from "./AbstractDevice";
import {DeviceInterface} from "./DeviceInterface";

const dw1 = new DigitalWatch("samsung");
const dw2 = new DigitalWatch("panasonic");
const mc1 = new Multicooker("redmond");

const sm = new SmartHouse<AbstractDevice>();


sm.addDevice("samsung",dw1);
sm.addDevice("panasonic",dw2);
sm.addDevice("redmond",mc1);

sm.getDeviceByKey("samsung");
sm.getDeviceByKey("redmond");

console.log(sm.allDevices);
