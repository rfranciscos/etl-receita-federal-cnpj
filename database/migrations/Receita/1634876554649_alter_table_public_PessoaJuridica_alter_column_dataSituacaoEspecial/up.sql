alter table "public"."PessoaJuridica" alter column "dataSituacaoEspecial" drop not null;
alter table "public"."PessoaJuridica" drop constraint "PessoaJuridica_dataSituacaoEspecial_key";
