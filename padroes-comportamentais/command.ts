// O Command é um padrão de projeto comportamental que converte solicitações ou operações simples em objetos.
// A conversão permite a execução adiada ou remota de comandos, armazenamento do histórico de comandos, etc.

interface Command {
    execute(): void;
}

class SimpleCommand implements Command {
    private payload: string;

    constructor(payload: string) {
        this.payload = payload;
    }

    public execute(): void {
        console.log(`SimpleCommand: I can do simple things: ${this.payload}`);
    }
}

class ComplexCommand implements Command {
    private receiver: Receiver;
    private paramA: string;
    private paramB: string;

    constructor(receiver: Receiver, paramA: string, paramB: string) {
        this.receiver = receiver;
        this.paramA = paramA;
        this.paramB = paramB;
    }

    public execute(): void {
        console.log('ComplexCommand: Wow, complex stuff happening here.');
        this.receiver.doSomething(this.paramA);
        this.receiver.doSomethingElse(this.paramB);
    }
}

class Receiver {
    public doSomething(param: string) {
        console.log(`Receiver: Working on ${param}`);
    }

    public doSomethingElse(param: string) {
        console.log(`Receiver: Working on ${param} too`);
    }
}

class Invoker {
    private onStart: Command;
    private onFinish: Command;

    public setOnStart(command: Command): void {
        this.onStart = command;
    }

    public setOnFinish(command: Command): void {
        this.onFinish = command;
    }

    public doSomethingImportant(): void {
        console.log('Invoker: Does anybody want something done before I begin?');
        if (this.isCommand(this.onStart)) this.onStart.execute();
        console.log('Invoker: ...doing something really important...');
        console.log('Invoker: Does anybody want something done after I finish?');
        if (this.isCommand(this.onFinish)) this.onFinish.execute();
    }

    private isCommand(object): object is Command {
        return object.execute !== undefined;
    }
 }

 const invoker = new Invoker();
 invoker.setOnStart(new SimpleCommand('Say Hi!'));

 const receiver = new Receiver();
 invoker.setOnFinish(new ComplexCommand(receiver, 'Send SMS', 'Save file'));

 invoker.doSomethingImportant();