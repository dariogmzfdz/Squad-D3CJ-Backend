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
    "userId" character varying(50) COLLATE pg_catalog."default" NOT NULL,
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

INSERT INTO "D3CJ"."Users" ("userId", "username", "password", email, "role_user", "createdAt", "updatedAt") VALUES ('a97903b5-117b-4e24-894e-66215f6757c5', 'caram', 'admin', 'admin@caram.com', 'admin', now(), now());
INSERT INTO "D3CJ"."Users" ("userId", "username", "password", email, "role_user", "createdAt", "updatedAt") VALUES ('2ab0e7b9-eb0e-4535-8e59-aef89ea73376', 'user1', 'user1', 'user1@caram.com', 'user', now(), now());
INSERT INTO "D3CJ"."Users" ("userId", "username", "password", email, "role_user", "createdAt", "updatedAt") VALUES ('4732b8b3-d2ea-4f3a-9522-d154ebf0999f', 'user2', 'user2', 'user2@caram.com', 'user', now(), now());
INSERT INTO "D3CJ"."Users" ("userId", "username", "password", email, "role_user", "createdAt", "updatedAt") VALUES ('f5f74c67-ad80-4526-a0da-419f5fd837cf', 'user2', 'user2', 'user2@caram.com', 'user', now(), now());
INSERT INTO "D3CJ"."Users" ("userId", "username", "password", email, "role_user", "createdAt", "updatedAt") VALUES ('97366d7f-918f-4b3e-80e5-b8ef036969f6', 'user2', 'user2', 'user2@caram.com', 'user', now(), now());
INSERT INTO "D3CJ"."Users" ("userId", "username", "password", email, "role_user", "createdAt", "updatedAt") VALUES ('cc27b6dd-72da-48fc-88a3-06375d2b4bc2', 'user2', 'user2', 'user2@caram.com', 'user', now(), now());

CREATE TABLE IF NOT EXISTS "D3CJ"."Product"
(
    "productId" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    color character varying(15) COLLATE pg_catalog."default",
    model character varying(20) COLLATE pg_catalog."default",
    brand character varying(20) COLLATE pg_catalog."default",
    "carYear" integer,
    material character varying(20) COLLATE pg_catalog."default",
    scale integer,
    "type" character varying(50) COLLATE pg_catalog."default",
    CONSTRAINT "Product_pkey" PRIMARY KEY ("productId")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS "D3CJ"."Product"
    OWNER to postgres;

INSERT INTO "D3CJ"."Product" ("productId", color, model, brand, "carYear", material, scale, "type") VALUES ('cc811411-d7cb-49df-9d29-7301c6f04fcb', 'red', 'Mustang One', 'Mustang', 2003, 'metal', 18, 'Fast and Furious');
INSERT INTO "D3CJ"."Product" ("productId", color, model, brand, "carYear", material, scale, "type") VALUES ('711180c4-8bf2-498f-b88d-abbc25f19b46', 'red', 'Ferrari One', 'Ferrari', 1996, 'metal', 24, 'Fast and Furious');
INSERT INTO "D3CJ"."Product" ("productId", color, model, brand, "carYear", material, scale, "type") VALUES ('bc9cf37a-7f26-41b3-a1e4-ab23765e2b7d', 'red', 'Beyond One', 'Other Brands', 2015, 'metal', 12, 'Police');
INSERT INTO "D3CJ"."Product" ("productId", color, model, brand, "carYear", material, scale, "type") VALUES ('ddafd37b-145c-4050-9117-30a818e542d4', 'red', 'Mustang one', 'Mustang', 2021, 'metal', 24, 'Rally');
INSERT INTO "D3CJ"."Product" ("productId", color, model, brand, "carYear", material, scale, "type") VALUES ('f7bdd40d-f842-4d5e-bb51-156d42bc7e6e', 'red', 'Mustang one', 'Mustang', 2003, 'metal', 18, 'Fast and Furious');
INSERT INTO "D3CJ"."Product" ("productId", color, model, brand, "carYear", material, scale, "type") VALUES ('fe5008cc-8403-4f35-aad5-ad503411f11d', 'red', 'Mustang two', 'Mustang', 2003, 'metal', 18, 'Police');
INSERT INTO "D3CJ"."Product" ("productId", color, model, brand, "carYear", material, scale, "type") VALUES ('95f5769b-0d13-4001-b8ae-3b639ec44f78', 'red', 'BMW one', 'BMW', 2003, 'metal', 32, 'Fast and Furious');

CREATE TABLE IF NOT EXISTS "D3CJ".images
(
    "imageId" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "productId" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "path" character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "images_pkey" PRIMARY KEY ("imageId"),
    CONSTRAINT "productId" FOREIGN KEY ("productId")
        REFERENCES "D3CJ"."Product" ("productId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS "D3CJ".images
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS "D3CJ".cars
(
    "carId" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "userId" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "productId" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "description" character varying(255) COLLATE pg_catalog."default",
    amount integer,
    "secondHand" character varying(1) COLLATE pg_catalog."default",
    price real NOT NULL,
    CONSTRAINT "cars_pkey" PRIMARY KEY ("carId"),
    CONSTRAINT "userId" FOREIGN KEY ("userId")
        REFERENCES "D3CJ"."Users" ("userId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "productId" FOREIGN KEY ("productId")
        REFERENCES "D3CJ"."Product" ("productId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS "D3CJ".cars
    OWNER to postgres;

INSERT INTO "D3CJ".cars ("carId", "userId", "productId", description, amount, "secondHand", price) VALUES ('7a30940f-61f7-45fd-902e-23f6a585ee28', 'a97903b5-117b-4e24-894e-66215f6757c5', 'cc811411-d7cb-49df-9d29-7301c6f04fcb', 'This is a red Mustang One', 1, 'N', 79.99);
INSERT INTO "D3CJ".cars ("carId", "userId", "productId", description, amount, "secondHand", price) VALUES ('2c34a517-bb04-47c9-8a08-f5bb1b3de84d', '2ab0e7b9-eb0e-4535-8e59-aef89ea73376', '711180c4-8bf2-498f-b88d-abbc25f19b46', 'This is a red Ferrari One', 1, 'S', 79.99);
INSERT INTO "D3CJ".cars ("carId", "userId", "productId", description, amount, "secondHand", price) VALUES ('196f82c2-b629-4edf-913d-025377a09be3', '4732b8b3-d2ea-4f3a-9522-d154ebf0999f', 'bc9cf37a-7f26-41b3-a1e4-ab23765e2b7d', 'This is a red Beyond One', 1, 'S', 79.99);
INSERT INTO "D3CJ".cars ("carId", "userId", "productId", description, amount, "secondHand", price) VALUES ('4c6749f7-ffa5-4adf-8da9-f1f04e297212', 'a97903b5-117b-4e24-894e-66215f6757c5', 'ddafd37b-145c-4050-9117-30a818e542d4', 'This is a red BMW One', 1, 'N', 79.99);
INSERT INTO "D3CJ".cars ("carId", "userId", "productId", description, amount, "secondHand", price) VALUES ('79bd3688-9497-422b-bbcb-04c45450c407', 'a97903b5-117b-4e24-894e-66215f6757c5', 'f7bdd40d-f842-4d5e-bb51-156d42bc7e6e', 'This is a red Porsche One', 1, 'N', 79.99);
INSERT INTO "D3CJ".cars ("carId", "userId", "productId", description, amount, "secondHand", price) VALUES ('623028f7-571b-41c3-9e20-2c2bb616bf82', '4732b8b3-d2ea-4f3a-9522-d154ebf0999f', 'fe5008cc-8403-4f35-aad5-ad503411f11d', 'This is a red Mercedes One', 1, 'S', 79.99);
INSERT INTO "D3CJ".cars ("carId", "userId", "productId", description, amount, "secondHand", price) VALUES ('8311fd9e-aa80-4e19-87d7-534e796ef72a', 'a97903b5-117b-4e24-894e-66215f6757c5', '95f5769b-0d13-4001-b8ae-3b639ec44f78', 'This is a red Audi One', 1, 'N', 79.99);

CREATE TABLE IF NOT EXISTS "D3CJ".comments
(
    "commentId" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "userId" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "carId" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "comment" character varying(255) COLLATE pg_catalog."default",
    CONSTRAINT "comments_pkey" PRIMARY KEY ("commentId"),
    CONSTRAINT "carId" FOREIGN KEY ("carId")
        REFERENCES "D3CJ".cars ("carId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "userId" FOREIGN KEY ("userId")
        REFERENCES "D3CJ"."Users" ("userId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS "D3CJ".comments
    OWNER to postgres;

/* CREATE TABLE IF NOT EXISTS "D3CJ".invoices
(
    "invoiceId" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "userId" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "invoiceDate" timestamp with time zone NOT NULL,
    CONSTRAINT "invoices_pkey" PRIMARY KEY ("invoiceId")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS "D3CJ".invoices
    OWNER to postgres;

CREATE TABLE IF NOT EXISTS "D3CJ".sales
(
    "saleId" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "carId" character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "invoiceId" integer NOT NULL,
    CONSTRAINT "sales_pkey" PRIMARY KEY ("saleId"),
    CONSTRAINT "invoiceId" FOREIGN KEY ("invoiceId")
        REFERENCES "D3CJ".invoices ("invoiceId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID,
    CONSTRAINT "carId" FOREIGN KEY ("carId")
        REFERENCES "D3CJ"."cars" ("carId") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS "D3CJ".sales
    OWNER to postgres; */