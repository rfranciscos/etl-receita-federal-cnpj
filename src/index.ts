import { StreamFile } from './helpers';
import { CNAEsProvider, EstabelecimentosProvider, MunicipiosProvider, NaturezasJuridicasProvider, PaisesProvider, QualificacaoSociosProvider } from './provider';

export class ReceitaFederal {
  streamFile: StreamFile;

  constructor(path: string) {
    this.streamFile = new StreamFile(path)
  }

  qualificacaoSocios = async () => {
    const qualificacaoSociosProvider = new QualificacaoSociosProvider();
    this.streamFile.readLineAsync(qualificacaoSociosProvider.getSql, 'qualificacao-socios')
  }

  paises = async () => {
    const paisesProvider = new PaisesProvider();
    this.streamFile.readLineAsync(paisesProvider.getSql, 'paises')
  }

  municipios = async () => {
    const municipiosProvider = new MunicipiosProvider();
    this.streamFile.readLineAsync(municipiosProvider.getSql, 'municipios')
  }

  naturezasJuridicas = async () => {
    const municipiosProvider = new NaturezasJuridicasProvider();
    this.streamFile.readLineAsync(municipiosProvider.getSql, 'naturezas-juridicas')
  }

  cnaes = async () => {
    const municipiosProvider = new CNAEsProvider();
    this.streamFile.readLineAsync(municipiosProvider.getSql, 'cnaes')
  }

  estabelecimentos = async () => {
    const estabelecimentosProvider = new EstabelecimentosProvider();
    this.streamFile.readLineAsync(estabelecimentosProvider.getSql, 'estabelecimentos')
  }
}
