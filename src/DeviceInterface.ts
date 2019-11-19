export interface DeviceInterface {
    name: string;
    state: boolean;
    on(): void;
    off(): void;
    timer(str: string, toggler: boolean): void;
}

