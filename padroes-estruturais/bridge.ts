// O Bridge é um padrão de projeto estrutural que divide a lógica de negócio ou uma 
// enorme classe em hierarquias de classe separadas que podem ser desenvolvidas independentemente.
// Uma dessas hierarquias (geralmente chamada de Abstração) obterá uma referência a um objeto 
// da segunda hierarquia (Implementação). A abstração poderá delegar algumas 
// (às vezes, a maioria) de suas chamadas para o objeto de implementações. 
// Como todas as implementações terão uma interface comum, 
// elas seriam intercambiáveis dentro da abstração.

// ControleRemoto: Implementa aquilo que tem de comum nas outras abstrações.
class Abstraction {
    protected implementation: Implementation;

    constructor(implementation: Implementation) {
        this.implementation = implementation;
    }

    public operation(): string {
        const result = this.implementation.operationImplementation();
        return `Abstraction: Base operation with: ${result}`;
    }
}

// ControleRemotoAtual: Extende aquilo que é relativo ao tipo de abstração específica.
class ExtendedAbstraction extends Abstraction {
    public operation(): string {
        const result = this.implementation.operationImplementation();
        return `ExtendedAbstraction: Extended operation with: ${result}`;
    }
}

// Dispositivo: Declara os métodos comuns a todas as classes concretas de implementação.
interface Implementation {
    operationImplementation(): string;
}

// Televisão
class ConcreteImplementationA implements Implementation {
    public operationImplementation(): string {
        return 'ConcreteImplementationA: Here is the result on the platform A.';
    }
}

// Radio
class ConcreteImplementationB implements Implementation {
    public operationImplementation(): string {
        return 'ConcreteImplementation: Here is the result on the platform B';    
    }
}

function clientCode(abstraction: Abstraction) {
    console.log(abstraction.operation());
}

let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

implementation = new ConcreteImplementationB();
abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);