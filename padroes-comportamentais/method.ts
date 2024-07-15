// O Template Method é um padrão de projeto comportamental que permite 
// definir o esqueleto de um algoritmo em uma classe base e permitir que 
// as subclasses substituam as etapas sem alterar a estrutura geral do algoritmo

abstract class AbstractClass {
    public templateMethod(): void {
        this.baseOperation1();
        this.requiredOperation1();
        this.baseOperation2();
        this.hook1();
        this.requiredOperation2();
        this.baseOperation3();
        this.hook2();
    }

    // Essas operações já possuem implementações.
    protected baseOperation1(): void {
        console.log('baseOperation1')
    }

    protected baseOperation2(): void {
        console.log('baseOperation2')
    }

    protected baseOperation3(): void {
        console.log('baseOperation3')
    }

    // Essas operações devem ser implementadas em subclasses.
    protected abstract requiredOperation1(): void;

    protected abstract requiredOperation2(): void;

    // Esses são "ganchos". Subclasses podem substituí-los, mas não é obrigatório 
    // já que os ganchos já têm implementação padrão (mas vazia). Ganchos 
    // fornecem pontos de extensão adicionais em alguns lugares cruciais do algoritmo.
    protected hook1(): void { }

    protected hook2(): void { }
}

// As classes concretas devem implementar todas as operações abstratas da classe base. 
// Eles também podem substituir algumas operações por uma implementação padrão.

class ConcreteClass1 extends AbstractClass {
    protected requiredOperation1(): void {
        console.log('ConcreteClass1 requiredOperation1')
    }

    protected requiredOperation2(): void {
        console.log('ConcreteClass1 requiredOperation1')
    }
}

// Normalmente, as classes concretas substituem apenas uma 
// fração das operações da classe base.

class ConcreteClass2 extends AbstractClass {
    protected requiredOperation1(): void {
        console.log('ConcreteClass2 requiredOperation1')
    }

    protected requiredOperation2(): void {
        console.log('ConcreteClass2 requiredOperation1')
    }

    protected hook1(): void {
        console.log('ConcreteClass1 hook1')
    }
}

function clientCode(abstractClass: AbstractClass) {
    abstractClass.templateMethod();
}

clientCode(new ConcreteClass1());
clientCode(new ConcreteClass2());