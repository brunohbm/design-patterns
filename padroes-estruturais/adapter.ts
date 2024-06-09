// O Adapter é um padrão de projeto estrutural que 
// permite objetos com interfaces incompatíveis colaborarem entre si.
// O adapter é reconhecível por um construtor que utiliza uma instância de 
// tipo abstrato/interface diferente. Quando o adaptador recebe uma chamada 
// para qualquer um de seus métodos, ele converte parâmetros para o formato 
// apropriado e direciona a chamada para um ou vários métodos do objeto envolvido.

class Target {
    public request(): string {
        return 'Target: The default target\'s behavior.';
    }
}

class ClassToAdaptee {
    public specificRequest(): string {
        return '.eetpadA eht fo roivaheb laicepS';
    }
}

class Adapter extends Target {
    private adaptee: ClassToAdaptee;

    constructor(adaptee: ClassToAdaptee) {
        super();
        this.adaptee = adaptee;
    }

    public request(): string {
        const result = this.adaptee.specificRequest().split('').reverse().join('');
        return `Adapter: (TRANSLATED) ${result}`;
    }
}

function clientCode(target: Target) {
    console.log(target.request());
}

console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
clientCode(target);

const adaptee = new ClassToAdaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
console.log(`Adaptee: ${adaptee.specificRequest()}`);

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);