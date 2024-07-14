// O State é um padrão de projeto comportamental que permite 
// que um objeto altere o comportamento quando seu estado interno for alterado.

class Context {
    private state: State;

    constructor(state: State) {
        this.transitionTo(state);
    }

    public transitionTo(state: State) {
        this.state;
        this.state.setContext(this);
    }

    public request1() {
        this.state.handle1();
    }

    public request2() {
        this.state.handle2();
    }

    public request3() {
       console.log('Function that is not related to the state.');
    }
}

abstract class State {
    protected context: Context;

    public setContext(context: Context) {
        this.context = context;
    }

    public abstract handle1(): void;
    public abstract handle2(): void;
}

class ConcreteStateA extends State {
    public handle1(): void {
        this.context.transitionTo(new ConcreteStateB());
    }

    public handle2(): void {
        console.log('Handle request 2');
    }
}

class ConcreteStateB extends State {
    public handle1(): void {
        console.log('Handle request 1');
    }

    public handle2(): void {
        this.context.transitionTo(new ConcreteStateA());
    }
}

const context = new Context(new ConcreteStateA());
context.request1();
context.request2();