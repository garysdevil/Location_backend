-- CREATE DATABASE gary
CREATE DATABASE gary;

\c gary;
drop table if exists "hunter","prey";

CREATE TABLE "hunter" (
  "id" SERIAL PRIMARY KEY,
  "createTime" TIMESTAMP default now(),
  "publickKey" VARCHAR,
  "secretKey" VARCHAR,
  "ip" VARCHAR,
  "device" VARCHAR,
  "ua" VARCHAR,
  "userId" VARCHAR
);

CREATE TABLE "prey"(
    "id" SERIAL PRIMARY KEY,
    "hunterId" int,
    "clickTime" TIMESTAMP default now(),
    "ip" VARCHAR,
    "device" VARCHAR,
    "ua" VARCHAR,
    "province" VARCHAR,
    "city" VARCHAR,
    "detail" VARCHAR,
    "mark" int
)

