alter table "public"."PessoaJuridica"
  add constraint "PessoaJuridica_prefixoCnpj_fkey"
  foreign key ("prefixoCnpj")
  references "public"."Empresas"
  ("prefixoCnpj") on update cascade on delete cascade;
