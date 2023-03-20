CREATE SCHEMA IF NOT EXISTS "D3CJ"
    AUTHORIZATION postgres;

GRANT ALL ON SCHEMA "D3CJ" TO postgres;

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA "D3CJ"
GRANT ALL ON TABLES TO postgres;

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA "D3CJ"
GRANT ALL ON SEQUENCES TO postgres;

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA "D3CJ"
GRANT EXECUTE ON FUNCTIONS TO postgres;

ALTER DEFAULT PRIVILEGES FOR ROLE postgres IN SCHEMA "D3CJ"
GRANT USAGE ON TYPES TO postgres;


CREATE SEQUENCE IF NOT EXISTS "D3CJ"."users_userId_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE "D3CJ"."users_userId_seq"
    OWNER TO postgres;

CREATE TABLE IF NOT EXISTS "D3CJ"."Role"
(
    "role_ID" integer NOT NULL,
    role_name character varying(10) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "Role_pkey" PRIMARY KEY ("role_ID"),
    CONSTRAINT role_name UNIQUE (role_name)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS "D3CJ"."Role"
    OWNER to postgres;

INSERT INTO "D3CJ"."Role" ("role_ID", role_name) VALUES (1, 'admin');
INSERT INTO "D3CJ"."Role" ("role_ID", role_name) VALUES (2, 'user');

CREATE TABLE IF NOT EXISTS "D3CJ"."Users"
(
    "userId" integer NOT NULL DEFAULT nextval('"D3CJ"."users_userId_seq"'::regclass),
    "username" character varying(255) COLLATE pg_catalog."default",
    "password" character varying(255) COLLATE pg_catalog."default",
    email character varying(255) COLLATE pg_catalog."default",
    "status" character varying(10) NOT NULL DEFAULT 'active'::character varying COLLATE pg_catalog."default",
    "role_user" character varying(10) COLLATE pg_catalog."default",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT users_pkey PRIMARY KEY ("userId")
);

ALTER TABLE IF EXISTS "D3CJ"."Users"
    OWNER to postgres;

INSERT INTO "D3CJ"."Users" ("username", "password", email, "role_user", "createdAt", "updatedAt") VALUES ('admin', 'admin', 'admin@caram.com', 'admin', now(), now());
INSERT INTO "D3CJ"."Users" ("username", "password", email, "role_user", "createdAt", "updatedAt") VALUES ('user1', 'user1', 'user1@caram.com', 'user', now(), now());
INSERT INTO "D3CJ"."Users" ("username", "password", email, "role_user", "createdAt", "updatedAt") VALUES ('user2', 'user2', 'user2@caram.com', 'user', now(), now());
INSERT INTO "D3CJ"."Users" ("username", "password", email, "role_user", "createdAt", "updatedAt") VALUES ('user2', 'user2', 'user2@caram.com', 'user', now(), now());
INSERT INTO "D3CJ"."Users" ("username", "password", email, "role_user", "createdAt", "updatedAt") VALUES ('user2', 'user2', 'user2@caram.com', 'user', now(), now());
INSERT INTO "D3CJ"."Users" ("username", "password", email, "role_user", "createdAt", "updatedAt") VALUES ('user2', 'user2', 'user2@caram.com', 'user', now(), now());

CREATE TABLE IF NOT EXISTS "D3CJ"."Product"
(
    "productId" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 26500 CACHE 1 ),
    color character varying(15) COLLATE pg_catalog."default",
    model character varying(20) COLLATE pg_catalog."default",
    brand character varying(20) COLLATE pg_catalog."default",
    "carYear" integer,
    material character varying(20) COLLATE pg_catalog."default",
    amount integer,
    "secondHand" character varying(1) COLLATE pg_catalog."default",
    scale integer,
    type character varying(50) COLLATE pg_catalog."default",
    price real NOT NULL,
    CONSTRAINT "Product_pkey" PRIMARY KEY ("productId")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS "D3CJ"."Product"
    OWNER to postgres;

INSERT INTO "D3CJ"."Product" (color, model, brand, "carYear", material, amount, "secondHand", scale, type, price) VALUES ('red', 'Mustang One', 'Mustang', 2003, 'metal', 10, 'N', 18, 'Fast and Furious', 79.99);
INSERT INTO "D3CJ"."Product" (color, model, brand, "carYear", material, amount, "secondHand", scale, type, price) VALUES ('red', 'Ferrari One', 'Ferrari', 1996, 'metal', 10, 'N', 24, 'Fast and Furious', 149.99);
INSERT INTO "D3CJ"."Product" (color, model, brand, "carYear", material, amount, "secondHand", scale, type, price) VALUES ('red', 'Beyond One', 'Other Brands', 2015, 'metal', 10, 'N', 12, 'Police', 4.99);
INSERT INTO "D3CJ"."Product" (color, model, brand, "carYear", material, amount, "secondHand", scale, type, price) VALUES ('red', 'Mustang one', 'Mustang', 2021, 'metal', 4, 'Y', 24, 'Rally', 109.99);
INSERT INTO "D3CJ"."Product" (color, model, brand, "carYear", material, amount, "secondHand", scale, type, price) VALUES ('red', 'Mustang one', 'Mustang', 2003, 'metal', 4, 'N', 18, 'Fast and Furious', 250);
INSERT INTO "D3CJ"."Product" (color, model, brand, "carYear", material, amount, "secondHand", scale, type, price) VALUES ('red', 'Mustang two', 'Mustang', 2003, 'metal', 4, 'N', 18, 'Police', 79.99);
INSERT INTO "D3CJ"."Product" (color, model, brand, "carYear", material, amount, "secondHand", scale, type, price) VALUES ('red', 'BMW one', 'BMW', 2003, 'metal', 4, 'N', 32, 'Fast and Furious', 14.99);
