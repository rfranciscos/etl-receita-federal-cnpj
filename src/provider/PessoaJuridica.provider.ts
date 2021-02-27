import { sanitizeData } from "../helpers";
import { CnaeSegundario, PessoaJuridica, Socio } from "../interfaces";

export class ReceitaFederalProvider {  
    buildPessoaJuridica = (data: string): PessoaJuridica => {
      const pessoaJuridica = {} as PessoaJuridica;
  
      // pessoaJuridica.tipoRegistro = this.sanitizeData(data.substr(0,1));
      // pessoaJuridica.indicadorFullDiario = this.sanitizeData(data.substr(1, 1));
      // pessoaJuridica.tipoAtualizacao = this.sanitizeData(data.substr(2, 1));
      pessoaJuridica.cnpj = sanitizeData(data.substr(3, 14));
      pessoaJuridica.identificador = sanitizeData(data.substr(17, 1));
      pessoaJuridica.razaoSocial = sanitizeData(data.substr(18, 150));
      pessoaJuridica.nomeFantasia = sanitizeData(data.substr(168, 55));
      pessoaJuridica.situacao = sanitizeData(data.substr(223, 2));
      pessoaJuridica.dataSituacao = sanitizeData(data.substr(225, 8));
      pessoaJuridica.motivoSituacao = sanitizeData(data.substr(233, 2));
      pessoaJuridica.cidadeExterior = sanitizeData(data.substr(235, 55));
      pessoaJuridica.codigoPais = sanitizeData(data.substr(290, 3));
      pessoaJuridica.nomePais = sanitizeData(data.substr(293, 70));
      pessoaJuridica.naturezaJuridica = sanitizeData(data.substr(363, 4));
      pessoaJuridica.dataIncio = sanitizeData(data.substr(367, 8));
      pessoaJuridica.cnaeFiscal = sanitizeData(data.substr(375, 7));
      pessoaJuridica.tipoLogradouro = sanitizeData(data.substr(382, 20));
      pessoaJuridica.logradouro = sanitizeData(data.substr(402, 60));
      pessoaJuridica.numero = sanitizeData(data.substr(462, 6));
      pessoaJuridica.complemento = sanitizeData(data.substr(468, 156));
      pessoaJuridica.bairro = sanitizeData(data.substr(624, 50));
      pessoaJuridica.cep = sanitizeData(data.substr(674, 8));
      pessoaJuridica.uf = sanitizeData(data.substr(682, 2));
      pessoaJuridica.codigoMunicipio = sanitizeData(data.substr(684, 4));
      pessoaJuridica.municipio = sanitizeData(data.substr(688, 50));
      pessoaJuridica.telefone = sanitizeData(data.substr(738, 12));
      pessoaJuridica.telefone2 = sanitizeData(data.substr(750, 12));
      pessoaJuridica.fax = sanitizeData(data.substr(762, 12));
      pessoaJuridica.email = sanitizeData(data.substr(774, 115));
      pessoaJuridica.qualificacaoResponsavel = sanitizeData(data.substr(889, 2));
      pessoaJuridica.capitalSocial = sanitizeData(data.substr(891, 14));
      pessoaJuridica.porte = sanitizeData(data.substr(905, 2));
      pessoaJuridica.opcaoSimples = sanitizeData(data.substr(907, 1));
      pessoaJuridica.dataOpcaoSimples = sanitizeData(data.substr(908, 8));
      pessoaJuridica.dataExclusaoSimples = sanitizeData(data.substr(916, 8));
      pessoaJuridica.opcaoMei = sanitizeData(data.substr(924, 1));
      pessoaJuridica.situacaoEspecial = sanitizeData(data.substr(925, 23));
      pessoaJuridica.dataSituacaoEspecial = sanitizeData(data.substr(948, 8));
      // pessoaJuridica.filler = this.sanitizeData(data.substr(956, 243));
      // pessoaJuridica.fimRegistro = this.sanitizeData(data.substr(1199, 1));
  
      return pessoaJuridica;
    };
  
    buildSocio = (data: string): Socio => {
      const socio = {} as Socio;
  
      socio.tipoRegistro = sanitizeData(data.substr(0,1));
      socio.indicadorFullDiario = sanitizeData(data.substr(1, 1));
      socio.tipoAtualizacao = sanitizeData(data.substr(2, 1));
      socio.cnpj = sanitizeData(data.substr(3, 14));
      socio.identificador = sanitizeData(data.substr(17, 1));
      socio.nomeRazaoSocial = sanitizeData(data.substr(18, 150));
      socio.cpfCnpj = sanitizeData(data.substr(168, 14));
      socio.qualificacao = sanitizeData(data.substr(182, 2));
      socio.percentualCapitalSocial = sanitizeData(data.substr(184, 5));
      socio.dataEntradaSociedade = sanitizeData(data.substr(189, 8));
      socio.codigoPais = sanitizeData(data.substr(197, 3));
      socio.nomePais = sanitizeData(data.substr(200, 70));
      socio.cpfRepLegal = sanitizeData(data.substr(270, 11));
      socio.nomeRep = sanitizeData(data.substr(281, 60));
      socio.qualificacaoRepLegal = sanitizeData(data.substr(341, 2));
      socio.filler = sanitizeData(data.substr(343, 855));
      socio.fimRegistro = sanitizeData(data.substr(1199, 1));
  
      return socio;
    };
  
    buildCnaeSegundario = (data: string): CnaeSegundario => {
      const cnaeSegundario = {} as CnaeSegundario;
  
      cnaeSegundario.tipoRegistro = sanitizeData(data.substr(0,1));
      cnaeSegundario.indicadorFullDiario = sanitizeData(data.substr(1, 1));
      cnaeSegundario.tipoAtualizacao = sanitizeData(data.substr(2, 1));
      cnaeSegundario.cnpj = sanitizeData(data.substr(3, 14));
      cnaeSegundario.cnaeSegundario = sanitizeData(data.substr(17, 693));
      cnaeSegundario.filler = sanitizeData(data.substr(710, 489));
      cnaeSegundario.fimRegistro = sanitizeData(data.substr(1199, 1));
      
      return cnaeSegundario;
    };
  }