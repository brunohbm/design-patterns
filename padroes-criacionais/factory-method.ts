/**
 * O Factory Method define um método, que deve ser usado para criar objetos 
 * em vez da chamada direta ao construtor (operador new). As subclasses podem 
 * substituir esse método para alterar a classe de objetos que serão criados.
 * Sendo assim nós podemos criar uma classe Entrega, e esta clase realiza um grupo de ações
 * dentro desta classe há uma função que cria um meio de transporte. Atráves desta classe são criadas
 * novas classes que a implementão e subscrevem este método meio de transporte, criando assim tipos diferentes de entrega.
 */

abstract class Entrega {
    public abstract criarMeioDeEntrega(): MeioDeEntrega;

    public entregarPacote(): string {
        const meioDeEntrega = this.criarMeioDeEntrega();
        return meioDeEntrega.entregarPacote();
    }
}

class EntregaMaritima extends Entrega {
    public criarMeioDeEntrega(): MeioDeEntrega {
        return new Barco();
    }
}

class EntregaTerrestre extends Entrega {
    public criarMeioDeEntrega(): MeioDeEntrega {
        return new Caminhao();
    }
}

interface MeioDeEntrega {
    entregarPacote(): string;
}

class Caminhao implements MeioDeEntrega {
    entregarPacote(): string {
        return 'Pacote a caminho pela estrada X.'
    }
}

class Barco implements MeioDeEntrega {
    entregarPacote(): string {
        return 'Pacote jogado no rio.'
    }
}

function realizaEntrega(meioDeEntrega: MeioDeEntrega) {
    console.log(meioDeEntrega.entregarPacote());
}

realizaEntrega(new EntregaMaritima());

realizaEntrega(new EntregaTerrestre());