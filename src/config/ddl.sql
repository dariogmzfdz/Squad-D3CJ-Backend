CREATE SCHEMA IF NOT EXISTS D3CJ;

CREATE SEQUENCE IF NOT EXISTS D3CJ."users_userId_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE test_schema."users_userId_seq"
    OWNER TO postgres;

CREATE TABLE IF NOT EXISTS test_schema.users
(
    "userId" integer NOT NULL DEFAULT nextval('test_schema."users_userId_seq"'::regclass),
    username character varying(255) COLLATE pg_catalog."default",
    password character varying(255) COLLATE pg_catalog."default",
    email character varying(255) COLLATE pg_catalog."default",
    role character varying(255) COLLATE pg_catalog."default",
/*     "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL, */
    CONSTRAINT users_pkey PRIMARY KEY ("userId")
);

ALTER TABLE IF EXISTS D3CJ.User
    OWNER to postgres;