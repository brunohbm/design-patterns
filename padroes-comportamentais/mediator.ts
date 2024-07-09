// O Mediator é um padrão de projeto comportamental que reduz o acoplamento 
// entre os componentes de um programa, fazendo-os se comunicar indiretamente, 
// por meio de um objeto mediador especial.

interface Mediator {
    notify(sender: object, event: string): void;
}

class ConcreteMediator implements Mediator {
    private component1: Component1;
    private component2: Component2;

    constructor(c1: Component1, c2: Component2) {
        this.component1 = c1;
        this.component1.setMediator(this);
        this.component2 = c2;
        this.component2.setMediator(this);
    }

    public notify(sender: object, event: string) {
        if (event === 'A') {
            console.log("Mediator has been triggered with event A");
            this.component2.doC();
        }

        if (event === 'D') {
            console.log("Mediator has been triggered with event D");
            this.component1.doB();
            this.component2.doC();
        }
    }
}

class BaseComponent {
    protected mediator: Mediator;

    constructor(mediator?: Mediator) {
        this.mediator = mediator!;
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator!;
    }
}

class Component1 extends BaseComponent {
    public doA() : void {
        this.mediator.notify(this, 'A');
    }

    public doB(): void {
        this.mediator.notify(this, 'B');
    }
}

class Component2 extends BaseComponent {
    public doC() : void {
        this.mediator.notify(this, 'C');
    }

    public doD() : void {
        this.mediator.notify(this, 'D');
    }
}

const c1 = new Component1();
const c2 = new Component2();
const mediator = new ConcreteMediator(c1, c2);

c1.doA();
c2.doD();
