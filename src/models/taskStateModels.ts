import type { taskModel } from "./taskModel"

export type TaskStateModels = {
    task: taskModel[];
    secondsRemaining: number;
    formattedSecondsRemaining: string;
    activeTask: taskModel | null;
    currentyCircle: number;
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
    }
}