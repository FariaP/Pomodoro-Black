import type { TaskStateModels } from "./taskStateModels";

export type taskModel = {
    id: number;
    name: string;
    startDuration: number;
    completeDuration: number | null;
    interruptDuration: number | null;
    type: keyof TaskStateModels['config'];
}