import { AbstractDevice } from "./AbstractDevice"
import { Colors } from "./Enums"

export class DigitalWatch extends AbstractDevice {
    protected currentColor: string;
    protected colors: string[] = Object.keys(Colors);
    protected brightness: number = 0;
    protected clock: null | number = null;

    on(): void {
        super.on();
        this.clockStart();
    }

    off(): void {
        super.off();
        this.clockStop();
    }

    changeColor(str: string): void {
        for (let item of this.colors) {
            if (str === item) {
                this.currentColor = str;
            }
        }
    }

    getColor(): string {
        return this.currentColor;
    }

    increaseBrightness(): void {
        if (this.state === true && this.brightness < 10) {
            this.brightness++;
        }
    }

    decreaseBrightness(): void {
        if (this.state === true && this.brightness > 0) {
            this.brightness--;
        }
    }

    getBrightness(): number {
        return this.brightness;
    }

    protected setUpClock(): void {
        const dateStr: string = String(new Date());
        const regExp: RegExp = /(\w{3}\s){2}\d{2}\s\d{4}\s(\d{2}:){2}\d{2}/;
        const currentDate: string = dateStr.match(regExp)[0];
        document.getElementById("root").innerText = `Date&Time: ${currentDate}`;
    }

    protected clockStart(): void {
        this.clock = window.setInterval(this.setUpClock, 1000);
    }

    protected clockStop(): void {
        window.clearInterval(this.clock);
        this.clock = null;
        document.getElementById("root").innerText = ``;
    }
}
