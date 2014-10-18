# --- Created by Slick DDL
# To stop Slick DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table "Event" ("id" BIGSERIAL NOT NULL PRIMARY KEY,"title" VARCHAR(254) NOT NULL,"description" VARCHAR(254),"eventTypeId" BIGINT NOT NULL,"lat" DOUBLE PRECISION NOT NULL,"lon" DOUBLE PRECISION NOT NULL,"startDate" TIMESTAMP NOT NULL,"endDate" TIMESTAMP NOT NULL);
create table "EventType" ("id" BIGSERIAL NOT NULL PRIMARY KEY,"title" VARCHAR(254) NOT NULL);
create table "User" ("id" BIGSERIAL NOT NULL PRIMARY KEY,"login" VARCHAR(254),"email" VARCHAR(254) NOT NULL,"password" VARCHAR(254) NOT NULL);
alter table "Event" add constraint "eventTypeFK" foreign key("eventTypeId") references "EventType"("id") on update NO ACTION on delete NO ACTION;

# --- !Downs

alter table "Event" drop constraint "eventTypeFK";
drop table "User";
drop table "EventType";
drop table "Event";

