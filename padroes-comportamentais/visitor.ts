// O Visitor é um padrão de projeto comportamental que permite 
// adicionar novos comportamentos à hierarquia de classes existente 
// sem alterar nenhum código existente.

interface Component {
    accept(visitor: Visitor): void;
}

class ConcreteComponentA implements Component {
    accept(visitor: Visitor): void {
        visitor.visitConcreteComponentA(this);
    }

    exclusiveMethodOfConcreteComponentA(): string {
        return 'ConcreteComponentA';
    }
}

class ConcreteComponentB implements Component {
    accept(visitor: Visitor): void {
        visitor.visitConcreteComponentB(this);
    }

    exclusiveMethodOfConcreteComponentB(): string {
        return 'ConcreteComponentB';
    }
}

interface Visitor {
    visitConcreteComponentA(element: ConcreteComponentA): void;
    visitConcreteComponentB(element: ConcreteComponentB): void;
}

class ConcreteVisitor1 implements Visitor {
    visitConcreteComponentA(element: ConcreteComponentA): void {
        console.log(`ConcreteVisitor1 executed ${element.exclusiveMethodOfConcreteComponentA()}`)
    }

    visitConcreteComponentB(element: ConcreteComponentB): void {
        console.log(`ConcreteVisitor1 executed ${element.exclusiveMethodOfConcreteComponentB()}`)
    }
}

class ConcreteVisitor2 implements Visitor {
    visitConcreteComponentA(element: ConcreteComponentA): void {
        console.log(`ConcreteVisitor2 executed ${element.exclusiveMethodOfConcreteComponentA()}`)
    }

    visitConcreteComponentB(element: ConcreteComponentB): void {
        console.log(`ConcreteVisitor2 executed ${element.exclusiveMethodOfConcreteComponentB()}`)
    }
}

function clientCode(components: Component[], visitor: Visitor) {
    for(const component of components) {
        component.accept(visitor);
    }
}

const components = [
    new ConcreteComponentA(),
    new ConcreteComponentB(),
];

const visitor1 = new ConcreteVisitor1();
clientCode(components, visitor1);

const visitor2 = new ConcreteVisitor1();
clientCode(components, visitor2);
