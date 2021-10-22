alter table "public"."PessoaJuridica" add constraint "PessoaJuridica_dataSituacaoEspecial_key" unique ("dataSituacaoEspecial");
alter table "public"."PessoaJuridica" alter column "dataSituacaoEspecial" set not null;
