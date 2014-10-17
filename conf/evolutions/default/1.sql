# --- Created by Slick DDL
# To stop Slick DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table "Event" ("id" BIGSERIAL NOT NULL PRIMARY KEY,"login" VARCHAR(254) NOT NULL,"description" VARCHAR(254));
create table "User" ("id" BIGSERIAL NOT NULL PRIMARY KEY,"login" VARCHAR(254),"email" VARCHAR(254) NOT NULL,"password" VARCHAR(254) NOT NULL);

# --- !Downs

drop table "User";
drop table "Event";

