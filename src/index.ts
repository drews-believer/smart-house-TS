import { DigitalWatch } from "./DigitalWatch";
import { Multicooker } from "./Multicooker";
import { SmartHouse } from "./SmartHouse";

const dw1 = new DigitalWatch("samsung");
const dw2 = new DigitalWatch("panasonic");
const mc1 = new Multicooker("redmond");

const sm = new SmartHouse<DigitalWatch | Multicooker>();

sm.addDevice("samsung",dw1);
sm.addDevice("panasonic",dw2);
sm.addDevice("redmond",mc1);
sm.everythingOn();


/*(sm.getDeviceByKey("samsung") as DigitalWatch).on();*/
sm.getDeviceByKey("redmond");
sm.deleteAllDevices();

console.log(sm.allDevices);
