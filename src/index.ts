import { StreamFile } from './helpers';
import { MunicipiosProvider, PaisesProvider, QualificacaoSociosProvider } from './provider';

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
}
