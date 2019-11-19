import { DeviceInterface } from "./DeviceInterface"

export abstract class AbstractDevice implements DeviceInterface {
    protected name: string;
    protected state: boolean = false;
    protected userTime: string;
    protected currentTime: string;

    constructor(name: string) {
        this.name = name;
    }

    protected isValidStr(regularExp: RegExp, str: string): string {
        const result: Array<string> = str.match(regularExp);
        let findValue: string = result[0];
        return findValue;
    }

    setName(str: string): void {
        const regExp: RegExp = /^\w{4,10}/i;
        this.name = this.isValidStr(regExp, str);
    }

    getName(): string {
        return this.name;
    }

    on(): void {
        this.state = true;
    }

    off(): void {
        this.state = false;
    }

    getState(): boolean {
        return this.state;
    }

    async timer(str: string, toggler: boolean): Promise<void> {
        const regExp: RegExp = /^([01]\d|2[0-3]):[0-5][0-9]/;
        this.userTime = this.isValidStr(regExp, str);
        this.currentTime = this.takeCurrentTime();
        const convertedTime: number = this.timeConverter(this.currentTime, this.userTime);
        await new Promise(function (resolve, reject) {
            if (toggler === true) {
                setTimeout(() => resolve("time to cook"), convertedTime);
            } else if (toggler === false) {
                setTimeout(() => resolve("wake up, work hard!"), convertedTime);
            } else {
                reject("Pls, put boolean data");
            }
        }).then(result => console.log(result), error => console.log(error));
    }

    protected takeCurrentTime(): string {
        const date: Date = new Date();
        const hours: number =
            date.getHours() < 10 ? Number("0" + date.getHours()) : date.getHours();
        const minutes: number =
            date.getMinutes() < 10 ? Number("0" + date.getMinutes()) : date.getMinutes();
        const result: string = `${hours}:${minutes}`;
        return result;
    }

    protected timeConverter(currentTime: string, userTime: string): number {
        const currentTimeArray: string[] = currentTime.split(":");
        const userTimeArray: string[] = userTime.split(":");
        const currentMilliseconds: number =
            Number(currentTimeArray[0]) * 60 * 60 * 1000 + Number(currentTimeArray[1]) * 60 * 1000;
        const userMilliseconds =
            Number(userTimeArray[0]) * 60 * 60 * 1000 + Number(userTimeArray[1]) * 60 * 1000;
        return Math.abs(userMilliseconds - currentMilliseconds);
    }
}
