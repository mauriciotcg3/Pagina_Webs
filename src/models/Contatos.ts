import Telefone from "./Telefone";

export default interface Contatos {
  idContato: number;
  nome: string;
  idade: number;
  telefones?: Telefone[];
}