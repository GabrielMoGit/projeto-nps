import { Column, MigrationInterface, QueryRunner, Table } from "typeorm";
import { Timestamp } from "typeorm/browser";

export class CreateSurveys1771559750378 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"Surveys",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "title",
                        type: "varchar",

                    },
                    {
                        name: "description",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                ]
            })
        )
    }




    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Surveys");
    }

}
