import { DeviceInterface } from "./DeviceInterface"

export abstract class AbstractDevice implements DeviceInterface {
    protected _name: string;
    protected _state: boolean = false;
    protected _userTime: null | string = null;
    protected _currentTime: null | string = null;

    constructor(name: string) {
        this._name = name;
    }

    protected _isValidStr(regularExp: RegExp, str: string, reason: string) : string {
        const result: null | Array<string> = str.match(regularExp);
        let findValue: string;
        if (result !== null) {
            findValue = result[0];
            return findValue;
        } else console.error(reason);
    }

    set name(str: string) {
        const regExp: RegExp = /^\w{4,10}/i;
        this._name = this._isValidStr(regExp, str, "incorrect name");
    }

    get name() : string {
        return this._name;
    }

    on(): void {
        this._state = true;
    }

    off(): void {
        this._state = false;
    }

    get state(): boolean {
        return this._state;
    }

    async timer(str: string, toggler: boolean): Promise<void> {
        const regExp: RegExp = /^([01]\d|2[0-3]):[0-5][0-9]/;
        this._userTime = this._isValidStr(regExp, str, "incorrect format of time use -> hh:mm");
        this._currentTime = this._takeCurrentTime();
        const convertedTime: number = this._timeConverter(this._currentTime, this._userTime);
        await new Promise(function(resolve, reject) {
            if (toggler === true) {
                setTimeout(() => resolve("time to cook"), convertedTime);
            } else if (toggler === false) {
                setTimeout(() => resolve("wake up, work hard!"), convertedTime);
            } else {
                reject("Pls, put boolean data");
            }
        }).then(result => console.log(result), error => console.log(error));
    }

    protected _takeCurrentTime(): string {
        const date: Date = new Date();
        const hours: string | number =
            date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
        const minutes: string | number =
            date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        const result: string = `${hours}:${minutes}`;
        return result;
    }

    protected _timeConverter(currentTime: string, userTime: string): number {
        const currentTimeArray: string[] = currentTime.split(":");
        const userTimeArray: string[] = userTime.split(":");
        const currentMilliseconds: number =
            Number(currentTimeArray[0]) * 60 * 60 * 1000 +  Number(currentTimeArray[1]) * 60 * 1000;
        const userMilliseconds =
            Number(userTimeArray[0]) * 60 * 60 * 1000 + Number(userTimeArray[1]) * 60 * 1000;
        return Math.abs(userMilliseconds - currentMilliseconds);
    }
}

