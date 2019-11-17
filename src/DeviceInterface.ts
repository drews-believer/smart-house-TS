/*namespace Devices {*/
    export interface DeviceInterface {
        on(): void;
        off(): void;
        timer(str: string, toggler: boolean): void;
    }
/*}*/
