// Singleton, Também conhecido como: Carta única
// O Singleton é um padrão de projeto criacional que permite a 
// você garantir que uma classe tenha apenas uma instância, enquanto 
// provê um ponto de acesso global para essa instância.


class Singleton {
    static #instance: Singleton;

    private constructor() {}

    public static get instance(): Singleton {
        if (!Singleton.#instance) {
            Singleton.#instance = new Singleton();
        }

        return Singleton.#instance;
    }

    public someBusinessLogic() {
        // ...
    }
}

function clientCode() {
    const s1 = Singleton.instance;
    const s2 = Singleton.instance;

    if (s1 === s2) {
        console.log("Singleton works, both variables contain the same instance.");
    } else {
        console.log("Singleton failed, variables contain different instances.");
    }
}