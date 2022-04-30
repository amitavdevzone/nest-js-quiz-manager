import {MigrationInterface, QueryRunner} from "typeorm";

export class addUserRoleColumn1651075479367 implements MigrationInterface {
    name = 'addUserRoleColumn1651075479367'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`role\` enum ('admin', 'member') NOT NULL DEFAULT 'member'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`role\``);
    }

}
