// O Memento é um padrão de projeto comportamental que permite tirar 
// um “retrato” do estado de um objeto e restaurá-lo no futuro.

class Originator {
    private state: string;


    constructor(state: string) {
        this.state = state;
        console.log(`My initial state is ${state}`);
    }

    public doSomething(): void {
        this.state = this.generateRandomString(30);
    }

    private generateRandomString(length: number = 10): string {
        const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        return Array
            .apply(null, { length })
            .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
            .join('');
    }

    public save(): Memento {
        return new ConcreteMemento(this.state);
    }

    public restore(memento: Memento): void {
        this.state = memento.getState();
    }
}

interface Memento {
    getState(): string;
    getDate(): string;
    getName(): string;
}

class ConcreteMemento implements Memento {
    private state: string;
    private date: string;

    constructor(state: string) {
        this.state = state;
        this.date = new Date().toISOString();
    }

    public getDate(): string {
        return this.date;
    }

    public getState(): string {
        return this.state;
    }

    public getName(): string {
        return `${this.state}_${this.date}`;
    }
}

class Caretaker {
    private mementos: Memento[] = [];

    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
    }

    public backup(): void {
        this.mementos.push(this.originator.save());
    }

    public undo(): void {
        if (!this.mementos.length) {
            return;
        }

        const memento = this.mementos.pop();
        this.originator.restore(memento!);
    }

    public showHistory(): void {
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}

const originator = new Originator('Super-duper-super-puper-super.');
const caretaker = new Caretaker(originator);

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.backup();
originator.doSomething();

caretaker.showHistory();

caretaker.undo();

caretaker.undo();