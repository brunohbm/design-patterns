/**
 * O Abstract Factory é um padrão de projeto criacional, que resolve o problema de criar famílias inteiras de produtos sem especificar suas classes concretas.
 * O Abstract Factory define uma interface para criar todos os produtos distintos, mas deixa a criação real do produto para classes fábrica concretas. Cada tipo de fábrica corresponde a uma determinada variedade de produtos.
 * O código cliente chama os métodos de criação de um objeto fábrica em vez de criar produtos diretamente com uma chamada de construtor (usando operador new). Como uma fábrica corresponde a uma única variante de produto, todos os seus produtos serão compatíveis.
 * O código cliente trabalha com fábricas e produtos somente através de suas interfaces abstratas. Ele permite que o mesmo código cliente funcione com produtos diferentes. Você apenas cria uma nova classe fábrica concreta e a passa para o código cliente.
 */

interface SistemaOperacionalAbstractFactory {
    criarBotao(): Botao;
    criarCheckbox(): Checkbox;
}

class WindowsSistemaOperacionalConcreteFactory implements SistemaOperacionalAbstractFactory {
    public criarBotao(): Botao {
        return new WindowsBotao();
    }

    public criarCheckbox(): Checkbox {
        return new WindowsCheckbox();
    }
}

class MacSistemaOperacionalConcreteFactory implements SistemaOperacionalAbstractFactory {
    public criarBotao(): Botao {
        return new MacBotao();
    }

    public criarCheckbox(): Botao {
        return new MacCheckbox();
    }
}

interface Botao {
    click(): string;
}

interface Checkbox {
    click(): string;
}

class MacBotao implements Botao {
    public click(): string {
        return 'Você precisa comprar o novo mack para este botão funcionar.';
    }
}

class MacCheckbox implements Checkbox {
    public click(): string {
        return 'Você precisa comprar o novo mack para este botão funcionar.';
    }
}


class WindowsBotao implements Botao {
    public click(): string {
        return 'Botão clicado';
    }
}

class WindowsCheckbox implements Checkbox {
    public click(): string {
        return 'Checkbox clicado';
    }
}

function clientCode(factory: SistemaOperacionalAbstractFactory) {
    const botao = factory.criarBotao();
    const checkbox = factory.criarCheckbox();

    console.log(botao.click());
    console.log(checkbox.click());
}

// Sistema operacional Windows
clientCode(new WindowsSistemaOperacionalConcreteFactory());

// Sistema operacional Mac
clientCode(new MacSistemaOperacionalConcreteFactory());