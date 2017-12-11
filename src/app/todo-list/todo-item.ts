export class TodoItem {
    action: string;
    isComplete: boolean;

    constructor(action: string, isComplete) {
        this.action = action;
        this.isComplete = isComplete;
    }
}