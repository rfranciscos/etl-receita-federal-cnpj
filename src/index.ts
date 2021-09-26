import { StreamFile } from './helpers';
import { CNAEsProvider, EmpresasProvider, EstabelecimentosProvider, MunicipiosProvider, NaturezasJuridicasProvider, PaisesProvider, QualificacaoSociosProvider, SociosProvider } from './provider';

export class ReceitaFederal {
  streamFile: StreamFile;

  constructor(path: string) {
    this.streamFile = new StreamFile(path);
  }

  qualificacaoSocios = () => {
    const qualificacaoSociosProvider = new QualificacaoSociosProvider();
    this.streamFile.readLineAsync(qualificacaoSociosProvider.getSql, 'qualificacao-socios');
  }

  paises = () => {
    const paisesProvider = new PaisesProvider();
    this.streamFile.readLineAsync(paisesProvider.getSql, 'paises');
  }

  municipios = () => {
    const municipiosProvider = new MunicipiosProvider();
    this.streamFile.readLineAsync(municipiosProvider.getSql, 'municipios');
  }

  naturezasJuridicas = () => {
    const municipiosProvider = new NaturezasJuridicasProvider();
    this.streamFile.readLineAsync(municipiosProvider.getSql, 'naturezas-juridicas');
  }

  cnaes = () => {
    const municipiosProvider = new CNAEsProvider();
    this.streamFile.readLineAsync(municipiosProvider.getSql, 'cnaes');
  }

  estabelecimentos = () => {
    const estabelecimentosProvider = new EstabelecimentosProvider();
    this.streamFile.readLineAsync(estabelecimentosProvider.getSql, 'estabelecimentos');
  }

  socios = () => {
    const sociosProvider = new SociosProvider();
    this.streamFile.readLineAsync(sociosProvider.getSql, 'socios');
  }
  
  empresas = () => {
    const empresasProvider = new EmpresasProvider();
    this.streamFile.readLineAsync(empresasProvider.getSql, 'empresas');
  }
}
