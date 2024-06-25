
// Também conhecido como: Decorador, Envoltório, Wrapper
// Usando decoradores, você pode agrupar objetos inúmeras vezes, 
// pois os objetos de destino e os decoradores seguem a mesma interface. 
// O objeto resultante terá um comportamento de empilhamento de todos os wrappers.

interface Component {
    operation(): string;
}

class ConcreteComponent implements Component {
    public operation(): string {
        return 'Concrete Component';    
    }
}

class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }
    
    public operation(): string {
        return this.component.operation();
    }
}

class ConcreteDecoratorA extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorA(${super.operation()})`;
    }
}

class ConcreteDecoratorB extends Decorator {
    public operation(): string {
        return `ConcreteDecoratorB(${super.operation()})`;
    }
}

function clientCode(component: Component) {
    console.log(component.operation());
}

const simple = new ConcreteComponent();
console.log('Client: I have got a simple component');
clientCode(simple);
console.log('');

const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log('Client: Now I have got a decorated component');
clientCode(decorator2);