import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';
import Contatos from '../../models/Contatos';
import Telefones from '../../models/Telefone';
import { cadastrar } from '../../service/Service';
import { buscarTelefonesPorContato, cadastrarTelefone } from '../../service/ServiceTelefone';
import Telefone from '../../models/Telefone';

interface FormProps {
  onSubmit: (contato: Contatos) => void;
  close: () => void;
}

const FormularioContatos: React.FC<FormProps> = ({ onSubmit, close }) => {
  const [contato, setContato] = useState<Contatos>({
    idContato: 0,
    nome: '',
    idade: 0,
    telefones: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // if (name == "telefones"){
    //   let t: string[]
    //   t = value.split(',').map((numero) => numero.trim())
    //   console.log(t)
    //   for(let i = 0; i < t.length; i++){
    //     telefone: {
    //       numero: t[i]
    //     }
    //     telefones: {
    //       t[i]
    //     }
    //   }
    // }
    setContato({
      ...contato,
      [name]: name === 'idade' ? parseInt(value, 10) : value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  
    await cadastrar(contato);
    // onSubmit(contato);
  
    setContato({
      idContato: 0,
      nome: "",
      idade: 0,
      telefones: "",
    });
  
    close();
  };

  return (
    <div className="flex h-screen bg-gray-800 justify-center items-center">
      <form className="max-w-400 mx-auto" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="text-white block font-bold mb-2" htmlFor="nome">
            Nome:
          </label>
          <input
            className="w-full px-4 py-2 border rounded"
            type="text"
            id="nome"
            name="nome"
            value={contato.nome}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label className="text-white block font-bold mb-2" htmlFor="idade">
            Idade:
          </label>
          <input
            className="w-full px-4 py-2 border rounded"
            type="number"
            id="idade"
            name="idade"
            value={contato.idade}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-6">
          <label className="text-white block font-bold mb-2" htmlFor="telefone">
            Telefone:
          </label>
          <input
            className="w-full px-4 py-2 border rounded"
            type="text"
            id="telefones"
            name="telefones"
            value={contato.telefones}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex space-x-52 w-full">
          <button className="bg-green-400 px-4 py-2 text-white rounded" type="submit">
            Salvar
          </button>
          <button className="bg-red-500 px-4 py-2 text-white rounded" onClick={() => close()}>
            Fechar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioContatos;