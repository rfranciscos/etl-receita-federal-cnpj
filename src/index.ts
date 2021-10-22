import { StreamFile } from './helpers';
import {
  CNAEsProvider,
  EmpresasProvider,
  EstabelecimentosProvider,
  MotivoSituacoesCadastraisProvider,
  MunicipiosProvider,
  NaturezasJuridicasProvider,
  PaisesProvider,
  QualificacaoSociosProvider,
  SociosProvider
} from './provider';
import { EnumsService } from './Services';

export class ReceitaFederal {
  streamFile: StreamFile;

  constructor(path: string) {
    this.streamFile = new StreamFile(path);
  }

  qualificacaoSocios = (): void => {
    const qualificacaoSociosProvider = new QualificacaoSociosProvider();
    this.streamFile.readLineAsync(qualificacaoSociosProvider.getSql, 'qualificacao-socios');
  }

  paises = (): void => {
    const paisesProvider = new PaisesProvider();
    this.streamFile.readLineAsync(paisesProvider.getSql, 'paises');
  }

  municipios = (): void => {
    const municipiosProvider = new MunicipiosProvider();
    this.streamFile.readLineAsync(municipiosProvider.getSql, 'municipios');
  }

  naturezasJuridicas = (): void => {
    const naturezasJuridicasProvider = new NaturezasJuridicasProvider();
    this.streamFile.readLineAsync(naturezasJuridicasProvider.getSql, 'naturezas-juridicas');
  }

  cnaes = (): void => {
    const cnaesProvider = new CNAEsProvider();
    this.streamFile.readLineAsync(cnaesProvider.getSql, 'cnaes');
  }

  estabelecimentos = async (): Promise<void> => {
    const enumService = new EnumsService();
    const tipoPessoaJuridica = await enumService.tipoPessoaJuridica()
    const tipoSituacao = await enumService.tipoSituacao()
    const tipoMotivoSituacao = await enumService.tipoMotivoSituacao()
    const tipoPais = await enumService.tipoPais()
    const estabelecimentosProvider = new EstabelecimentosProvider(tipoPessoaJuridica, tipoSituacao, tipoMotivoSituacao, tipoPais);
    this.streamFile.readLineWithMultiplesEntitiesAsync(estabelecimentosProvider.getSql, 'estabelecimentos', 1000);
  }

  socios = (): void => {
    const sociosProvider = new SociosProvider();
    this.streamFile.readLineAsync(sociosProvider.getSql, 'socios');
  }

  empresas = async (): Promise<void> => {
    const enumService = new EnumsService();
    const naturezasJuridicas = await enumService.naturezasJuridicas()
    const qualificacaoSocios = await enumService.qualificacoesSocios()
    const portesEmpresas = await enumService.porteEmpresa()
    const empresasProvider = new EmpresasProvider(naturezasJuridicas, qualificacaoSocios, portesEmpresas);
    this.streamFile.readLineAsync(empresasProvider.getSql, 'empresas');
  }

  motivoSituacoesCadastrais = (): void => {
    const cnaesProvider = new MotivoSituacoesCadastraisProvider();
    this.streamFile.readLineAsync(cnaesProvider.getSql, 'motivo-situacoes-cadastrais');
  }
}
