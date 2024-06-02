/**
 * Use o padrão Builder quando você quer que seu código seja capaz de criar diferentes representações do mesmo produto (por exemplo, casas de pedra e madeira).
 * O padrão Builder pode ser aplicado quando a construção de várias representações do produto envolvem etapas similares que diferem apenas nos detalhes.
 * A interface base do builder define todas as etapas de construção possíveis, e os buildrs concretos implementam essas etapas para construir representações particulares do produto. Enquanto isso, a classe diretor guia a ordem de construção.
 */

interface RoboBuilder {
    criarCorpo(): void;
    criarArmadura(): void;
    criarArma(): void;
    criarEscudo(): void;
}

class FullPowerRoboBuilder implements RoboBuilder {

    private robo: FullPowerRobo;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.robo = new FullPowerRobo();
    }

    criarArma(): void {
        this.robo.partes.push('ARMA_PEDRA');
    }

    criarArmadura(): void {
        this.robo.partes.push('ARMADURA_OURO');
    }

    criarCorpo(): void {
        this.robo.partes.push('CORPO_FLEXIVEL');
    }

    criarEscudo(): void {
        this.robo.partes.push('ESCUDO_CELESTIAL');
    }

    public getRobo(): FullPowerRobo {
        const roboFinal = this.robo;
        this.reset();
        return roboFinal;
    }
}

class FullPowerRobo {
    public partes: string[] = [];

    public listarPartes(): void {
        console.log(this.partes.join(', '));
    }

    public lutar(): void {
        console.log('LUTANDO!');
    }
}

class RoboCovardeBuilder implements RoboBuilder {
    private robo: RoboCovarde;

    constructor() {
        this.reset();
    }

    reset(): void {
        this.robo = new RoboCovarde();
    }

    criarArma(): void {
        this.robo.partes.push('ESCUDO_DE_ATAQUE');
    }

    criarArmadura(): void {
        this.robo.partes.push('ARMADURA_MAXIMA');
    }

    criarCorpo(): void {
        this.robo.partes.push('CORPO_FORTE');
    }

    criarEscudo(): void {
        this.robo.partes.push('ESCUDO_MAXIMO');
    }

    public getRobo() {
        const finalRobo = this.robo;
        this.reset();
        return finalRobo;
    }
}

class RoboCovarde {
    public partes: string[] = [];

    public listarPartes(): void {
        console.log(this.partes.join(', '));
    }

    public fugir(): void {
        console.log('FUGINDO');
    }
}

class Diretor {
    private buider: RoboBuilder;

    public setBuilder(newBuilder: RoboBuilder): void {
        this.buider = newBuilder;
    }

    public construirRoboInicial(): void {
        this.buider.criarCorpo();
        this.buider.criarArmadura();
    }

    public construirRoboComDuasArmas(): void {
        this.buider.criarCorpo();
        this.buider.criarArmadura();
        this.buider.criarArma();
        this.buider.criarArma();
    }

    public construirRoboCompleto(): void {
        this.buider.criarCorpo();
        this.buider.criarArmadura();
        this.buider.criarArma();
        this.buider.criarEscudo();
    }
}

function codidoDoCliente(diretor: Diretor) {
    const fullPowerRoboBuilder = new FullPowerRoboBuilder();
    diretor.setBuilder(fullPowerRoboBuilder);

    console.log('Robo super forte completo!');
    diretor.construirRoboCompleto();
    fullPowerRoboBuilder.getRobo().listarPartes();

    console.log('Robo super forte inicial!');
    diretor.construirRoboInicial();
    fullPowerRoboBuilder.getRobo().listarPartes();


    const roboCovardeBuilder = new RoboCovardeBuilder();
    diretor.setBuilder(roboCovardeBuilder);

    console.log('Robo super covarde!');
    diretor.construirRoboComDuasArmas();
    roboCovardeBuilder.getRobo().fugir();
}

const director = new Diretor();
codidoDoCliente(director);