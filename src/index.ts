import { DigitalWatch } from "./DigitalWatch";
import { Multicooker } from "./Multicooker";
import { SmartHouse } from "./SmartHouse";
import {AbstractDevice} from "./AbstractDevice";


/*this code is needed to implement the work of a smartHouse using the browser console*/
declare global {
    interface Window {
        sh: object;
        DigitalWatch: Function;
        Multicooker: Function;
    }
}

window.sh = new SmartHouse<AbstractDevice>();
window.DigitalWatch = DigitalWatch;
window.Multicooker = Multicooker;


