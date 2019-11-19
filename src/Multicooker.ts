import { AbstractDevice } from "./AbstractDevice"
import { TaskList } from "./Enums"

export class Multicooker  extends AbstractDevice {
    protected task: null | string  = null;
    protected currentTask: number = 0;
    protected taskList: string[] = Object.keys(TaskList);
    protected temperature: number = 100;

    getTasklist(): string[] {
        return this.taskList;
    }

    getTask(): string {
        if (this.task != null) {
            return this.task;
        }
    }

    setUpTask(): void {
        this.state === true ? this.task = this.taskList[this.currentTask] : this.task = this.taskList[0];
        console.log(this.taskList[this.currentTask]);
    }

    getCurrentTask() {
        return this.taskList[this.currentTask];
    }

    nextTask() {
        return this.state === true &&
        this.currentTask > this.taskList.length - 1
            ? this.currentTask
            : ++this.currentTask;
    }

    previousTask() {
        return this.state === true && this.currentTask <= 0
            ? this.currentTask
            : --this.currentTask;
    }

    getTemperature() {
        return this.temperature;
    }

    increaseTemperature(): number{
        return this.state === true && this.temperature >= 100
            ? this.temperature
            : ++this.temperature;
    }
    decreaseTemperature(): number {
        return this.state === true && this.temperature <= 0
            ? this.temperature
            : --this.temperature;
    }

    async setUpTaskWithTimer(str: string): Promise<void> {
        await super.timer(str, true);
        this.task = this.taskList[this.currentTask];
        console.log("task is set");
    }
}
