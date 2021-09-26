import { StreamFile } from './helpers';
import { QualificacaoSociosProvider } from './provider';

export class ReceitaFederal {
  streamFile: StreamFile;

  constructor(path: string) {
    this.streamFile = new StreamFile(path)
  }

  qualificacaoSocios = async () => {
    const qualificacaoSociosProvider = new QualificacaoSociosProvider();
    this.streamFile.readLineAsync(qualificacaoSociosProvider.getSql)
  }
}
