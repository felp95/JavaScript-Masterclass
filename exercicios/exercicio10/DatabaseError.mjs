export default class DatabaseError {
    constructor(command, message) {
        this.command = command;
        this.message = message;
    }
};