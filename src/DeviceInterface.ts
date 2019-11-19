export interface DeviceInterface {
    on(): void;
    off(): void;
    setName(str: string): void;
    getName() : string;
    getState(): boolean;
    timer(str: string, toggler: boolean): void;
}

