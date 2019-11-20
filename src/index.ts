import { DigitalWatch } from "./DigitalWatch";
import { Multicooker } from "./Multicooker";
import { SmartHouse } from "./SmartHouse";
import {AbstractDevice} from "./AbstractDevice";


const sh = new SmartHouse<AbstractDevice>();
const dw1 = new DigitalWatch("panasonic");
const mc1 = new Multicooker("redmond");

sh.addDevice(dw1);
sh.addDevice(mc1);

console.log(sh.allDevices);

