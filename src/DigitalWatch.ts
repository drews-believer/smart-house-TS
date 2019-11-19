import { AbstractDevice } from "./AbstractDevice"
import { colors } from "./Colors"

export class DigitalWatch extends AbstractDevice {
    protected _currentColor: null | string = null;
    protected _brightness: number = 0;
    protected _clock: null | number = null;

    constructor(name: string) {
        super(name);
    }

    on(): void {
        super.on();
        this._clockStart();
    }

    off(): void {
        super.off();
        this._clockStop();
    }

    changeColor(val: string): void {
        for (let key in colors ) {
            if (this.state === true && val === colors[key]) {
                this._currentColor = val;
            }
        }
    }

    get color(): string {
        return this._currentColor;
    }

    increaseBrightness(): void {
        if (this._state === true && this._brightness < 10) {
            this._brightness++;
        }
    }

    decreaseBrightness(): void {
        if (this._state === true && this._brightness > 0) {
            this._brightness--;
        }
    }

    get brightness(): number {
        return this._brightness;
    }

    protected _setUpClock(): void {
        const dateStr: string = String(new Date());
        const regExp: RegExp = /(\w{3}\s){2}\d{2}\s\d{4}\s(\d{2}:){2}\d{2}/;
        const currentDate: string = dateStr.match(regExp)[0];
        document.getElementById("root").innerText = `Date&Time: ${currentDate}`;
    }

    protected _clockStart(): void {
        this._clock = window.setInterval(this._setUpClock, 1000);
    }

    protected _clockStop(): void {
        window.clearInterval(this._clock);
        this._clock = null;
        document.getElementById("root").innerText = ``;
    }
}
