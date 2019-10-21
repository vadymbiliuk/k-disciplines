import {MigrationInterface, QueryRunner} from "typeorm";

export class Migrations1571666830474 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "discipline" DROP CONSTRAINT "FK_463a9e10e833909fa1186512478"`, undefined);
        await queryRunner.query(`ALTER TABLE "discipline" RENAME COLUMN "categoryId" TO "category_id"`, undefined);
        await queryRunner.query(`ALTER TABLE "discipline" ADD CONSTRAINT "FK_37f35a250f9900cddda9d714947" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "discipline" DROP CONSTRAINT "FK_37f35a250f9900cddda9d714947"`, undefined);
        await queryRunner.query(`ALTER TABLE "discipline" RENAME COLUMN "category_id" TO "categoryId"`, undefined);
        await queryRunner.query(`ALTER TABLE "discipline" ADD CONSTRAINT "FK_463a9e10e833909fa1186512478" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

}
