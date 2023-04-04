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
    CONSTRAINT email UNIQUE (email)
        INCLUDE(email),
    CONSTRAINT username UNIQUE (username)
        INCLUDE(username)
);

ALTER TABLE IF EXISTS "D3CJ"."Users"
    OWNER to postgres;

INSERT INTO "D3CJ"."Users" ("userId", "username", "password", email, "role_user", "createdAt", "updatedAt") VALUES ('a97903b5-117b-4e24-894e-66215f6757c5', 'caram', 'admin', 'admin@caram.com', 'admin', now(), now());
INSERT INTO "D3CJ"."Users" ("userId", "username", "password", email, "role_user", "createdAt", "updatedAt") VALUES ('2ab0e7b9-eb0e-4535-8e59-aef89ea73376', 'user1', 'user1', 'user1@caram.com', 'user', now(), now());
INSERT INTO "D3CJ"."Users" ("userId", "username", "password", email, "role_user", "createdAt", "updatedAt") VALUES ('4732b8b3-d2ea-4f3a-9522-d154ebf0999f', 'user2', 'user2', 'user2@caram.com', 'user', now(), now());
INSERT INTO "D3CJ"."Users" ("userId", "username", "password", email, "role_user", "createdAt", "updatedAt") VALUES ('f5f74c67-ad80-4526-a0da-419f5fd837cf', 'user3', 'user3', 'user3@caram.com', 'user', now(), now());
INSERT INTO "D3CJ"."Users" ("userId", "username", "password", email, "role_user", "createdAt", "updatedAt") VALUES ('97366d7f-918f-4b3e-80e5-b8ef036969f6', 'user4', 'user4', 'user4@caram.com', 'user', now(), now());
INSERT INTO "D3CJ"."Users" ("userId", "username", "password", email, "role_user", "createdAt", "updatedAt") VALUES ('cc27b6dd-72da-48fc-88a3-06375d2b4bc2', 'user5', 'user5', 'user5@caram.com', 'user', now(), now());

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