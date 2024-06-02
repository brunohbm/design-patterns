// Também conhecido como: Protótipo, Clone
// O Prototype é um padrão de projeto criacional que permite a clonagem de 
// objetos, mesmo complexos, sem acoplamento à suas classes específicas.
// O Prototype permite que os objetos sejam criados de forma independente
// de sua classe base. Isso permite que os objetos sejam compartilhados entre
// classes diferentes, sem a necessidade de que as classes base sejam
// compartilhadas.

class Prototype {
    public primitive: any;
    public component: object;
    public circularReference: ComponentWithBackReference;

    public clone(): this {
        const clone = Object.create(this);

        clone.component = Object.create(this.component);

        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this }
        }

        return clone;
    }
}

class ComponentWithBackReference {
    public prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}

function clientCode() {
    const p1 = new Prototype();
    p1.primitive = 245;
    p1.component = new Date();
    p1.circularReference = new ComponentWithBackReference(p1);

    const p2 = p1.clone();

    console.log(p2);
}