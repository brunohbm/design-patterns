// Também conhecido como: Peso mosca, Cache
// O estado intrínseco de um objeto é imutável e interno, acessível apenas para
// leitura por outros objetos. O estado extrínseco, por outro lado, é alterado
// externamente por outros objetos. O padrão Flyweight propõe que o estado extrínseco
// não seja armazenado no objeto, mas passado para métodos específicos conforme
// necessário. Dessa forma, apenas o estado intrínseco permanece dentro do objeto,
// permitindo sua reutilização em diferentes contextos e reduzindo a quantidade de
// objetos necessários, pois eles diferem apenas em seu estado intrínseco, que tem
// menos variações que o extrínseco.

class Flyweight {
    private sharedState: any;

    constructor(sharedState: any) {
        this.sharedState = sharedState;
    }

    public operation(uniqueState): void {
        const shared = JSON.stringify(this.sharedState);
        const unique = JSON.stringify(uniqueState);
        console.log(`Flyweight: Displaying shared (${shared}) and unique (${unique}) state.`);
    }
}

class FlyweightFactory {
    private flyweights: { [key: string]: Flyweight } = <any>{};

    constructor(initialFlyweights: string[][]) {
        for(const state of initialFlyweights) {
            this.flyweights[this.getKey(state)] = new Flyweight(state);
        }
    }

    private getKey(state: string[]): string {
        return state.join('_');
    }

    public getFlyweight(sharedState: string[]): Flyweight {
        const key = this.getKey(sharedState);

        if(!(key in this.flyweights)) {
            console.log('FlyweightFactory could not find a flyweight, creating a new one.');
            this.flyweights[key] = new Flyweight(sharedState);
        } else {
            console.log('FlyweightFactory: Reusing existing flyweight.');
        }

        return this.flyweights[key];
    }

    public listFlyweights(): void {
        const count = Object.keys(this.flyweights).length;
        console.log(`FlyweightFactory: I have ${count} flyweights`);
        for(const key in this.flyweights) {
            console.log(key);
        }
    }
}

const factory = new FlyweightFactory([
    ['Chevrolet', 'Camaro2018', 'pink'],
    ['Mercedes Benz', 'C300', 'black'],
    ['Mercedes Benz', 'C500', 'red'],
    ['BMW', 'M5', 'red'],
    ['BMW', 'X6', 'white'],
]);

factory.listFlyweights();

function addCarToPoliceDatabase({
    flyweightFactory, 
    plates, owner, brand, 
    model, color
} : {
    flyweightFactory: FlyweightFactory, 
    plates: string, owner: string, brand: string, 
    model: string, color: string
}) {
    console.log('Client: Adding a car to database');
    const flyweight = flyweightFactory.getFlyweight([brand, model, color]);

    flyweight.operation([plates, owner]);
}

addCarToPoliceDatabase({
    flyweightFactory: factory, 
    plates: 'CL234IR', 
    owner: 'James Doe', 
    brand: 'BMW', 
    model: 'X1', 
    color: 'red'
});

addCarToPoliceDatabase({
    flyweightFactory: factory, 
    plates: 'CL234IR', 
    owner: 'James Doe', 
    brand: 'BMW', 
    model: 'M5', 
    color: 'red'
});

factory.listFlyweights();