package com.contatos.model;

import java.util.List;

public class ContatoTelefoneDTO {
	
	private Long idContato;
	
	private String nome;
	
	private int idade;

    private List<String> telefones;
 
	public ContatoTelefoneDTO() {
	}

	public ContatoTelefoneDTO(String nome, int idade) {
		this.nome = nome;
		this.idade = idade;
	}

	public ContatoTelefoneDTO(Long idContato, String nome, int idade, List<String> telefones) {
		this.idContato = idContato;
		this.nome = nome;
		this.idade = idade;
		this.telefones = telefones;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public int getIdade() {
		return idade;
	}

	public void setIdade(int idade) {
		this.idade = idade;
	}

	public List<String> getTelefones() {
		return telefones;
	}

	public void setTelefones(List<String> telefones) {
		this.telefones = telefones;
	}

	public Long getIdContato() {
		return idContato;
	}

	public void setIdContato(Long idContato) {
		this.idContato = idContato;
	}
	
	
	
}
