// O Strategy é um padrão de projeto comportamental que transforma um 
// conjunto de comportamentos em objetos e os torna intercambiáveis 
// dentro do objeto de contexto original.

// O objeto original, chamado contexto, mantém uma referência a um objeto 
// strategy e o delega a execução do comportamento. Para alterar a maneira 
// como o contexto executa seu trabalho, outros objetos podem substituir o
//  objeto strategy atualmente vinculado por outro.

class Context {
    private strategy: Strategy;

    constructor(strategy: Strategy) {
        this.strategy = strategy;
    }

    public setStrategy(strategy: Strategy) {
        this.strategy = strategy;
    }

    public doSomeLogic() {
        const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
        console.log(result.join(','));
    }
}

interface Strategy {
    doAlgorithm(data: string[]): string[];
}

class ConcreteStrategyA implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.sort();    
    }
}

class ConcreteStrategyB implements Strategy {
    public doAlgorithm(data: string[]): string[] {
        return data.reverse();    
    }
}


const context = new Context(new ConcreteStrategyA());
context.doSomeLogic();

context.setStrategy(new ConcreteStrategyB());
context.doSomeLogic();