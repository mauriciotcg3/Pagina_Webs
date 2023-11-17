import axios from "axios";
import Contatos from "../models/Contatos";

const baseURL = "http://localhost:8080/contato";
const baseTelefoneUrl = "http://localhost:8080/telefone";
let idContato = 0

export const buscar = async() => {
  const resposta = await axios.get(`${baseURL}`)
  const data = resposta.data
  console.log("sadfa wfwfa atg",resposta)
  return data;
}

export const cadastrar = async(dados: Contatos ) => {
  console.log("dados", dados)


  const dataContato = {
    nome: dados.nome,
    idade: dados.idade,
  }
  console.log("dataContato", dataContato)
  const dataTelefone = {
    numero: dados.telefones
  }
  console.log("dataTelefone", dataTelefone)
  try {
    await axios.post(`${baseURL}`, dataContato)

    await axios.post(`${baseTelefoneUrl}`, dataTelefone)
  } catch (error) {
    throw error
  }
}

export const atualizar = async(url: string, dados: Object, setDados: Function, header: Object) => {
  const resposta = await axios.put(url, dados, header)
  setDados(resposta.data)
}

export const deletar = async(id: number) => {
  console.log(id)
  await axios.delete(`${baseURL}/${id}`)
}