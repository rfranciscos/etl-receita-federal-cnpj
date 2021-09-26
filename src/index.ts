import { StreamFile } from './helpers';
import { QualificacaoSociosProvider } from './provider';
import { PaisesProvider } from './provider/Paises.provider';

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
}
