// Também conhecido como: CoR, Corrente de responsabilidade, Corrente de comando, Chain of command
// O Chain of Responsibility é um padrão de projeto comportamental que permite 
// passar a solicitação ao longo da cadeia de handlers em potencial até que um 
// deles lide com a solicitação.

interface Handler<Request = string, Result = string> {
    setNext(handler: Handler<Request, Result>): Handler<Request, Result>;

    handle(request: Request): Result;
}

abstract class AbstractHandler implements Handler {
    private nextHandler: Handler;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return '';
    }
}

class MonkeyHandler extends AbstractHandler {
    public handle(request: string): string {
        if(request === 'Banana') {
            return `Monkey: I will eat the ${request}`;
        }

        return super.handle(request);
    }
}

class SquirrelHandler extends AbstractHandler {
    public handle(request: string): string {
        if(request === 'Nut') {
            return `Squirrel: I will eat the ${request}`;
        }

        return super.handle(request);
    }
}

class DogHandler extends AbstractHandler {
    public handle(request: string): string {
        if(request === 'MeatBall') {
            return `Dog: I will eat the ${request}`;
        }

        return super.handle(request);
    }
}

function clientCode(handler: Handler) {
    const foods = ['Nut', 'Banana', 'Cup of coffee'];

    for( const food of foods) {
        console.log(`Client: Who wants a ${food}?`);

        const result = handler.handle(food);

        if(result) {
            console.log(` ${result}`);
        } else {
            console.log(` ${food} was left untouched.`);
        }
    }
}

const monkey = new MonkeyHandler();
const squirrel = new SquirrelHandler();
const dog = new DogHandler();

monkey
    .setNext(squirrel)
    .setNext(dog);

    clientCode(monkey);