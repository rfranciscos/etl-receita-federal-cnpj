alter table "public"."PessoaJuridica"
  add constraint "PessoaJuridica_empresaId_fkey"
  foreign key (empresaId)
  references "public"."Empresas"
  (id) on update cascade on delete cascade;
alter table "public"."PessoaJuridica" alter column "empresaId" drop not null;
alter table "public"."PessoaJuridica" add column "empresaId" uuid;
