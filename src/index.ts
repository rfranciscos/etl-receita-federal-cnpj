import { StreamFile } from './helpers';
import { CNAEsProvider, EmpresasProvider, EstabelecimentosProvider, MunicipiosProvider, NaturezasJuridicasProvider, PaisesProvider, QualificacaoSociosProvider, SociosProvider } from './provider';

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

  estabelecimentos = (): void => {
    const estabelecimentosProvider = new EstabelecimentosProvider();
    this.streamFile.readLineAsync(estabelecimentosProvider.getSql, 'estabelecimentos');
  }

  socios = (): void => {
    const sociosProvider = new SociosProvider();
    this.streamFile.readLineAsync(sociosProvider.getSql, 'socios');
  }

  empresas = (): void => {
    const empresasProvider = new EmpresasProvider();
    this.streamFile.readLineAsync(empresasProvider.getSql, 'empresas');
  }
}
