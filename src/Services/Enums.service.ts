import axios from 'axios';

export class EnumsService {
  naturezasJuridicas = async () => {
    const response = await axios.get<{ ENaturezasJuridicas: []}>('http://localhost:8080/api/rest/naturezas-juridicas');
    return response.data.ENaturezasJuridicas
  }

  qualificacoesSocios = async () => {
    const response = await axios.get<{ EQualificacaoSocios: []}>('http://localhost:8080/api/rest/qualificacoes-socios');
    return response.data.EQualificacaoSocios
  }

  porteEmpresa = async () => {
    const response = await axios.get<{ EPorteEmpresa: []}>('http://localhost:8080/api/rest/porte-empresas');
    return response.data.EPorteEmpresa
  }

  tipoPessoaJuridica = async () => {
    const response = await axios.get<{ ETipoPessoaJuridica: []}>('http://localhost:8080/api/rest/tipo-pessoa-juridica');
    return response.data.ETipoPessoaJuridica
  }

  tipoSituacao = async () => {
    const response = await axios.get<{ ETipoSituacoesCadastrais: []}>('http://localhost:8080/api/rest/porte-empresas');
    return response.data.ETipoSituacoesCadastrais
  }

  tipoMotivoSituacao = async () => {
    const response = await axios.get<{ EPorteEmpresa: []}>('http://localhost:8080/api/rest/tipo-situacoes-cadastrais');
    return response.data.EPorteEmpresa
  }

  tipoPais = async () => {
    const response = await axios.get<{ EPorteEmpresa: []}>('http://localhost:8080/api/rest/tipo-pais');
    return response.data.EPorteEmpresa
  }
}
