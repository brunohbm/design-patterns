// Também conhecido como: Peso mosca, Cache
// O estado intrínseco de um objeto é imutável e interno, acessível apenas para
// leitura por outros objetos. O estado extrínseco, por outro lado, é alterado
// externamente por outros objetos. O padrão Flyweight propõe que o estado extrínseco
// não seja armazenado no objeto, mas passado para métodos específicos conforme
// necessário. Dessa forma, apenas o estado intrínseco permanece dentro do objeto,
// permitindo sua reutilização em diferentes contextos e reduzindo a quantidade de
// objetos necessários, pois eles diferem apenas em seu estado intrínseco, que tem
// menos variações que o extrínseco.