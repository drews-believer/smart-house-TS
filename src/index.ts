import { DigitalWatch } from "./DigitalWatch";
import { Multicooker } from "./Multicooker";
import { SmartHouse } from "./SmartHouse";
import {AbstractDevice} from "./AbstractDevice";

declare global {
    interface Window {
        sh: object;
        DigitalWatch: Function;
        Multicooker: Function;
        dw1: object;
        dw2: object;
        mc1: object;
        mc2: object;
    }
}

window.sh = new SmartHouse<AbstractDevice>();

console.log(window.sh);

window.dw1 = new DigitalWatch("samsung");
window.dw2 = new DigitalWatch("panasonic");
window.mc1 = new Multicooker("redmond");
window.mc2 = new Multicooker("foxfox");
