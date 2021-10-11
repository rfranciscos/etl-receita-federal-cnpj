SET check_function_bodies = false;
CREATE TABLE public."ECNAEs" (
    valor text NOT NULL,
    descricao text NOT NULL
);
CREATE TABLE public."EFaixaEtaria" (
    valor text NOT NULL,
    descricao text NOT NULL
);
CREATE TABLE public."EMunicipios" (
    valor text NOT NULL,
    descricao text NOT NULL
);
CREATE TABLE public."ENaturezasJuridicas" (
    valor text NOT NULL,
    descricao text NOT NULL
);
CREATE TABLE public."EPaises" (
    valor text NOT NULL,
    descricao text NOT NULL
);
CREATE TABLE public."EPorteEmpresa" (
    valor text NOT NULL,
    descricao text NOT NULL
);
CREATE TABLE public."EQualificacaoSocios" (
    valor text NOT NULL,
    descricao text NOT NULL
);
CREATE TABLE public."ETipoAtividade" (
    valor text NOT NULL,
    descricao text NOT NULL
);
CREATE TABLE public."ETipoContatos" (
    valor text NOT NULL,
    descricao text NOT NULL
);
CREATE TABLE public."ETipoPessoa" (
    valor text NOT NULL,
    descricao text NOT NULL
);
CREATE TABLE public."ETipoPessoaJuridica" (
    valor text NOT NULL,
    descricao text NOT NULL
);
CREATE TABLE public."ETipoPortes" (
    valor text NOT NULL,
    descricao text NOT NULL
);
CREATE TABLE public."ETipoSituacoesCadastrais" (
    valor text NOT NULL,
    descricao text NOT NULL
);
CREATE TABLE public."ETipoSocios" (
    valor text NOT NULL,
    descricao text NOT NULL
);
CREATE TABLE public."EUF" (
    value text NOT NULL,
    description text NOT NULL
);
CREATE TABLE public."Empresas" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    "prefixoCnpj" text NOT NULL,
    "razaoSocial" text NOT NULL,
    "naturezaJuridica" text NOT NULL,
    "qualificacaoResponsavel" text NOT NULL,
    porte text NOT NULL,
    "enteFederativoResponsavel" text,
    "capitalSocial" integer DEFAULT 0 NOT NULL
);
CREATE TABLE public."Enderecos" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    tipo text NOT NULL,
    logradouro text NOT NULL,
    numero text NOT NULL,
    complemento text NOT NULL,
    bairro text NOT NULL,
    cep text NOT NULL,
    uf text NOT NULL,
    municipio text NOT NULL,
    latitude text NOT NULL,
    longitude text NOT NULL
);
CREATE TABLE public."PessoaFisica" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    nome text NOT NULL,
    cpf text NOT NULL,
    pais text NOT NULL,
    "faixaEtaria" text NOT NULL
);
CREATE TABLE public."PessoaJuridica" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    cnpj text NOT NULL,
    tipo text NOT NULL,
    situacao text NOT NULL,
    "dataSituacao" date NOT NULL,
    "motivoSituacao" text NOT NULL,
    "cidadeExterior" text NOT NULL,
    pais text NOT NULL,
    "dataInicioAtividade" date NOT NULL,
    "situacaoEspecial" text NOT NULL,
    "dataSituacaoEspecial" date NOT NULL,
    "enderecoId" uuid NOT NULL,
    "empresaId" uuid NOT NULL,
    "nomeFantasia" text NOT NULL
);
CREATE TABLE public."PessoaJuridicaAtividades" (
    id uuid NOT NULL,
    "pessoaJuridicaId" uuid NOT NULL,
    atividade text NOT NULL,
    tipo text NOT NULL
);
CREATE TABLE public."PessoaJuridicaContatos" (
    id uuid NOT NULL,
    tipo text NOT NULL,
    valor text NOT NULL,
    "pessoaJuridicaId" uuid NOT NULL
);
CREATE TABLE public."Pessoas" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    tipo text NOT NULL,
    "pessoaFisicaId" uuid NOT NULL,
    "pessoaJuridicaId" uuid NOT NULL
);
CREATE TABLE public."Socios" (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    tipo text NOT NULL,
    "qualificacaoId" text NOT NULL,
    "dataInicioSociedade" date NOT NULL,
    "empresaId" uuid NOT NULL,
    "pessoaId" uuid NOT NULL
);
ALTER TABLE ONLY public."ECNAEs"
    ADD CONSTRAINT "ECNAEs_pkey" PRIMARY KEY (valor);
ALTER TABLE ONLY public."EFaixaEtaria"
    ADD CONSTRAINT "EFaixaEtaria_pkey" PRIMARY KEY (valor);
ALTER TABLE ONLY public."EMunicipios"
    ADD CONSTRAINT "EMunicipios_pkey" PRIMARY KEY (valor);
ALTER TABLE ONLY public."ENaturezasJuridicas"
    ADD CONSTRAINT "ENaturezasJuridicas_pkey" PRIMARY KEY (valor);
ALTER TABLE ONLY public."EPorteEmpresa"
    ADD CONSTRAINT "EPorteEmpresa_pkey" PRIMARY KEY (valor);
ALTER TABLE ONLY public."EQualificacaoSocios"
    ADD CONSTRAINT "EQualificacaoSocios_pkey" PRIMARY KEY (valor);
ALTER TABLE ONLY public."ETipoAtividade"
    ADD CONSTRAINT "ETipoAtividade_pkey" PRIMARY KEY (valor);
ALTER TABLE ONLY public."ETipoPessoaJuridica"
    ADD CONSTRAINT "ETipoPessoaJuridica_pkey" PRIMARY KEY (valor);
ALTER TABLE ONLY public."Empresas"
    ADD CONSTRAINT "Empresas_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Enderecos"
    ADD CONSTRAINT "Enderecos_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."ETipoContatos"
    ADD CONSTRAINT "EtipoContatos_pkey" PRIMARY KEY (valor);
ALTER TABLE ONLY public."EPaises"
    ADD CONSTRAINT "Paises_pkey" PRIMARY KEY (valor);
ALTER TABLE ONLY public."PessoaFisica"
    ADD CONSTRAINT "PessoaFisica_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."PessoaJuridicaAtividades"
    ADD CONSTRAINT "PessoaJuridicaAtividades_pessoaJuridicaId_atividade_key" UNIQUE ("pessoaJuridicaId", atividade);
ALTER TABLE ONLY public."PessoaJuridicaAtividades"
    ADD CONSTRAINT "PessoaJuridicaAtividades_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."PessoaJuridicaContatos"
    ADD CONSTRAINT "PessoaJuridicaContatos_pessoaJuridicaId_tipo_valor_key" UNIQUE ("pessoaJuridicaId", tipo, valor);
ALTER TABLE ONLY public."PessoaJuridicaContatos"
    ADD CONSTRAINT "PessoaJuridicaContatos_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."PessoaJuridica"
    ADD CONSTRAINT "PessoaJuridica_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Pessoas"
    ADD CONSTRAINT "Pessoas_pessoaFisicaId_key" UNIQUE ("pessoaFisicaId");
ALTER TABLE ONLY public."Pessoas"
    ADD CONSTRAINT "Pessoas_pessoaJuridicaId_key" UNIQUE ("pessoaJuridicaId");
ALTER TABLE ONLY public."Pessoas"
    ADD CONSTRAINT "Pessoas_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."ETipoPortes"
    ADD CONSTRAINT "Portes_pkey" PRIMARY KEY (valor);
ALTER TABLE ONLY public."ETipoSituacoesCadastrais"
    ADD CONSTRAINT "SituacoesCadastrais_pkey" PRIMARY KEY (valor);
ALTER TABLE ONLY public."Socios"
    ADD CONSTRAINT "Socios_empresaId_pessoaId_key" UNIQUE ("empresaId", "pessoaId");
ALTER TABLE ONLY public."Socios"
    ADD CONSTRAINT "Socios_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."ETipoPessoa"
    ADD CONSTRAINT "TipoPessoa_pkey" PRIMARY KEY (valor);
ALTER TABLE ONLY public."ETipoSocios"
    ADD CONSTRAINT "TipoSocios_pkey" PRIMARY KEY (valor);
ALTER TABLE ONLY public."EUF"
    ADD CONSTRAINT "UF_pkey" PRIMARY KEY (value);
ALTER TABLE ONLY public."Empresas"
    ADD CONSTRAINT "Empresas_naturezaJuridica_fkey" FOREIGN KEY ("naturezaJuridica") REFERENCES public."ENaturezasJuridicas"(valor) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Empresas"
    ADD CONSTRAINT "Empresas_porte_fkey" FOREIGN KEY (porte) REFERENCES public."EPorteEmpresa"(valor) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Empresas"
    ADD CONSTRAINT "Empresas_qualificacaoResponsavel_fkey" FOREIGN KEY ("qualificacaoResponsavel") REFERENCES public."EQualificacaoSocios"(valor) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Enderecos"
    ADD CONSTRAINT "Enderecos_uf_fkey" FOREIGN KEY (uf) REFERENCES public."EUF"(value) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."PessoaFisica"
    ADD CONSTRAINT "PessoaFisica_faixaEtaria_fkey" FOREIGN KEY ("faixaEtaria") REFERENCES public."EFaixaEtaria"(valor) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."PessoaFisica"
    ADD CONSTRAINT "PessoaFisica_paisId_fkey" FOREIGN KEY (pais) REFERENCES public."EPaises"(valor) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."PessoaJuridicaAtividades"
    ADD CONSTRAINT "PessoaJuridicaAtividades_pessoaJuridicaId_fkey" FOREIGN KEY ("pessoaJuridicaId") REFERENCES public."PessoaJuridica"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."PessoaJuridicaAtividades"
    ADD CONSTRAINT "PessoaJuridicaAtividades_tipo_fkey" FOREIGN KEY (tipo) REFERENCES public."ETipoAtividade"(valor) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."PessoaJuridicaContatos"
    ADD CONSTRAINT "PessoaJuridicaContatos_pessoaJuridicaId_fkey" FOREIGN KEY ("pessoaJuridicaId") REFERENCES public."PessoaJuridica"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."PessoaJuridicaContatos"
    ADD CONSTRAINT "PessoaJuridicaContatos_tipo_fkey" FOREIGN KEY (tipo) REFERENCES public."ETipoContatos"(valor) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."PessoaJuridica"
    ADD CONSTRAINT "PessoaJuridica_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES public."Empresas"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."PessoaJuridica"
    ADD CONSTRAINT "PessoaJuridica_enderecoId_fkey" FOREIGN KEY ("enderecoId") REFERENCES public."Enderecos"(id) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."PessoaJuridica"
    ADD CONSTRAINT "PessoaJuridica_pais_fkey" FOREIGN KEY (pais) REFERENCES public."EPaises"(valor) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."PessoaJuridica"
    ADD CONSTRAINT "PessoaJuridica_situacao_fkey" FOREIGN KEY (situacao) REFERENCES public."ETipoSituacoesCadastrais"(valor) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."PessoaJuridica"
    ADD CONSTRAINT "PessoaJuridica_tipo_fkey" FOREIGN KEY (tipo) REFERENCES public."ETipoPessoaJuridica"(valor) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Pessoas"
    ADD CONSTRAINT "Pessoas_pessoaFisicaId_fkey" FOREIGN KEY ("pessoaFisicaId") REFERENCES public."PessoaFisica"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."Pessoas"
    ADD CONSTRAINT "Pessoas_pessoaJuridicaId_fkey" FOREIGN KEY ("pessoaJuridicaId") REFERENCES public."PessoaJuridica"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."Pessoas"
    ADD CONSTRAINT "Pessoas_tipo_fkey" FOREIGN KEY (tipo) REFERENCES public."ETipoPessoa"(valor) ON UPDATE CASCADE ON DELETE RESTRICT;
ALTER TABLE ONLY public."Socios"
    ADD CONSTRAINT "Socios_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES public."Empresas"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."Socios"
    ADD CONSTRAINT "Socios_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES public."Pessoas"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."Socios"
    ADD CONSTRAINT "Socios_tipo_fkey" FOREIGN KEY (tipo) REFERENCES public."ETipoSocios"(valor) ON UPDATE CASCADE ON DELETE RESTRICT;
