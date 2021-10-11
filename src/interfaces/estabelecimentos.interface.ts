export interface  IPessoa {
  id: string;
  tipo: string;
  pessoaJuridicaId: string;
}
export interface  IPessoaJuridicaAtividades {
  id: string;
  tipo: string;
  atividade: string;
  pessoaJuridicaId: string;
}
export interface  IPessoaJuridicaContatos {
  id: string;
  tipo: string;
  valor: string;
  pessoaJuridicaId: string;
}
export interface IPessoaJuridica {
  id: string;
  cnpj: string;
  tipo: string;
  situacao: string;
  dataSituacao: string;
  motivoSituacao: string;
  cidadeExterior: string;
  pais: string;
  dataInicioAtividade: string;
  situacaoEspecial: string;
  dataSituacaoEspecial: string;
  enderecoId: string;
  empresaId: string;
  nomeFantasia: string;
}

export interface IEndereco {
  id: string;
  tipo: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  uf: string;
  municipio: string;
  latitude?: string;
  longitude?: string;
}

export interface Estabelecimentos {
  cnpjBasico: string;
  cnpjOrdem: string;
  cnpjDv: string;
  tipoEmpresaId: string;
  situacaoCadastralId: string;
  dataSituacaoCadastral: string;
  motivoSituacaoCadastralId: string;
  nomeCidadeExterior: string;
  paisId: string;
  dataInicioAtividade: string;
  CnaePrincipalId: string;
  CnaeSegundarioId: string;
  tipoLogradouro: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  uf: string;
  municipioId: string;
  ddd1: string;
  telefone1: string;
  ddd2: string;
  telefone2: string;
  dddFax: string;
  fax: string;
  email: string;
  situacaoEspecial: string;
  dataSituacaoEspecial: string;
}


