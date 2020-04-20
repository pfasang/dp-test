create table "public"."Activity"
(
    id          varchar(25)  not null
        constraint "Activity_pkey"
            primary key,
    name        text         not null,
    "startDate" timestamp(3) not null,
    "endDate"   timestamp(3),
    project     varchar(25)
        constraint "Activity_project_fkey"
            references "public"."Project"
            on delete set null,
    "user"      varchar(25)
        constraint "Activity_user_fkey"
            references "public"."Profile"
            on delete set null
);

alter table "public"."Activity"
    owner to userdb;

create table "public"."ActivitySkill"
(
    id    varchar(25) not null
        constraint "ActivitySkill_pkey"
            primary key,
    level integer     not null,
    owner varchar(25)
        constraint "ActivitySkill_owner_fkey"
            references "public"."Activity"
            on delete set null,
    skill varchar(25)
        constraint "ActivitySkill_skill_fkey"
            references "public"."Skill"
            on delete set null
);

alter table "public"."ActivitySkill"
    owner to userdb;

create table "public"."Profile"
(
    "user"      varchar(25)  not null
        constraint "Profile_pkey"
            primary key,
    "firstName" text         not null,
    "lastName"  text         not null,
    title       text,
    "createdAt" timestamp(3) not null,
    "updatedAt" timestamp(3) not null
);

alter table "public"."Profile"
    owner to userdb;

create table "public"."Project"
(
    id          varchar(25)  not null
        constraint "Project_pkey"
            primary key,
    name        text         not null,
    description text         not null,
    "startDate" timestamp(3) not null,
    "endDate"   timestamp(3),
    manager     varchar(25)
        constraint "Project_manager_fkey"
            references "public"."Profile"
            on delete set null
);

alter table "public"."Project"
    owner to userdb;

create unique index "public.Project.name._UNIQUE"
    on "public"."Project" (name);

create table "public"."Skill"
(
    id          varchar(25)  not null
        constraint "Skill_pkey"
            primary key,
    name        text         not null,
    "createdAt" timestamp(3) not null,
    "updatedAt" timestamp(3) not null
);

alter table "public"."Skill"
    owner to userdb;

create unique index "public.Skill.name._UNIQUE"
    on "public"."Skill" (name);

create table "public"."UserSkill"
(
    id    varchar(25) not null
        constraint "UserSkill_pkey"
            primary key,
    level integer     not null,
    skill varchar(25)
        constraint "UserSkill_skill_fkey"
            references "public"."Skill"
            on delete set null,
    owner varchar(25)
        constraint "UserSkill_owner_fkey"
            references "public"."Profile"
            on delete set null
);

alter table "public"."UserSkill"
    owner to userdb;

