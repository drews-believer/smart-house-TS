import { AbstractDevice } from "./AbstractDevice"

export class Multicooker  extends AbstractDevice {
    protected _task: null | string  = null; //a task for device
    protected _currentTask: number = 0; //a task that is currently viewed in task list
    protected _temperature: number = 100;
    protected _taskList = (function() { enum taskList {  Fry, Cook, Bake, Boil } return taskList })();

    constructor(name: string) {
        super();
        this._name = name;
    }

    get tasklist(): string[]{
        const keys = Object.keys(this._taskList).filter(k => typeof this._taskList[k as any] === "string");
        const values = keys.map(k => this._taskList[k as any]);
        console.log(values);
        return values;
    }

    get task(): string {
        if (this._task != null) {
            return this._task;
        } else {
            console.log("Task is not set. Setting default task 'Fry'");
            return this._taskList[0];
        }
    }

    setUpTask(): void {
        this._state === true ? this._task = this._taskList[this._currentTask] : this._task = this._taskList[0];
        console.log(this._taskList[this._currentTask]);
    }

    get currentTask() {
        return this._taskList[this._currentTask];
    }

    nextTask() {
        return this._state === true &&
        this._currentTask > Object.keys(this._taskList).length -1
            ? this._currentTask
            : ++this._currentTask;
    }

    previousTask() {
        return this._state === true && this._currentTask <= 0
            ? this._currentTask
            : --this._currentTask;
    }

    get temperature() {
        return this._temperature;
    }

    increaseTemperature(): number{
        return this._state === true && this._temperature >= 100
            ? this._temperature
            : ++this._temperature;
    }
    decreaseTemperature(): number {
        return this._state === true && this._temperature <= 0
            ? this._temperature
            : --this._temperature;
    }

    async setUpTaskWithTimer(str: string): Promise<void> {
        await super.timer(str, true);
        this._task = this._taskList[this._currentTask];
        console.log("task is set");
    }
}
