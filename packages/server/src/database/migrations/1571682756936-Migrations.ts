import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1571682756936 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "role" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(100) NOT NULL, CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying(100) NOT NULL, "password_hash" character varying(100) NOT NULL, "first_name" character varying(50) NOT NULL, "last_name" character varying(50) NOT NULL, "role_id" uuid, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "course" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "course" smallint NOT NULL, "semester" smallint NOT NULL, CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "student" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying(100) NOT NULL, "password_hash" character varying(100) NOT NULL, "first_name" character varying(50) NOT NULL, "last_name" character varying(50) NOT NULL, "role_id" uuid, "course_id" uuid, "faculty_id" uuid, CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "faculty" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(100) NOT NULL, CONSTRAINT "PK_635ca3484f9c747b6635a494ad9" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "discipline" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(100) NOT NULL, "max_amount_of_students" smallint NOT NULL, "amount_of_possible_semesters" text NOT NULL, "category_id" uuid, CONSTRAINT "PK_139512aefbb11a5b2fa92696828" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "category" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying(100) NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "faculty_disciplines" ("discipline_id" uuid NOT NULL, "faculty_id" uuid NOT NULL, CONSTRAINT "PK_c2344d2f7b5d79ace3d86954ab8" PRIMARY KEY ("discipline_id", "faculty_id"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_2b8e98aaaac03814212b6389a3" ON "faculty_disciplines" ("discipline_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_3cadd7448fc6157dec7c98c273" ON "faculty_disciplines" ("faculty_id") `, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_fb2e442d14add3cefbdf33c4561" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_ffc0d7fecec8c0b216986095154" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_140d2607308f60eda2ae0d72a4f" FOREIGN KEY ("course_id") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_2ecb4c169c96c00705e993f30bb" FOREIGN KEY ("faculty_id") REFERENCES "faculty"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "discipline" ADD CONSTRAINT "FK_37f35a250f9900cddda9d714947" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "faculty_disciplines" ADD CONSTRAINT "FK_2b8e98aaaac03814212b6389a3d" FOREIGN KEY ("discipline_id") REFERENCES "discipline"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "faculty_disciplines" ADD CONSTRAINT "FK_3cadd7448fc6157dec7c98c273f" FOREIGN KEY ("faculty_id") REFERENCES "faculty"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "faculty_disciplines" DROP CONSTRAINT "FK_3cadd7448fc6157dec7c98c273f"`, undefined);
        await queryRunner.query(`ALTER TABLE "faculty_disciplines" DROP CONSTRAINT "FK_2b8e98aaaac03814212b6389a3d"`, undefined);
        await queryRunner.query(`ALTER TABLE "discipline" DROP CONSTRAINT "FK_37f35a250f9900cddda9d714947"`, undefined);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_2ecb4c169c96c00705e993f30bb"`, undefined);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_140d2607308f60eda2ae0d72a4f"`, undefined);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_ffc0d7fecec8c0b216986095154"`, undefined);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_fb2e442d14add3cefbdf33c4561"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_3cadd7448fc6157dec7c98c273"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_2b8e98aaaac03814212b6389a3"`, undefined);
        await queryRunner.query(`DROP TABLE "faculty_disciplines"`, undefined);
        await queryRunner.query(`DROP TABLE "category"`, undefined);
        await queryRunner.query(`DROP TABLE "discipline"`, undefined);
        await queryRunner.query(`DROP TABLE "faculty"`, undefined);
        await queryRunner.query(`DROP TABLE "student"`, undefined);
        await queryRunner.query(`DROP TABLE "course"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`DROP TABLE "role"`, undefined);
    }

}
