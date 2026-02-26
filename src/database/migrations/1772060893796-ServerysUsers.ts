import { Column, MigrationInterface, QueryRunner, Table } from "typeorm";
import { Timestamp } from "typeorm/browser";

export class ServerysUsers1772060893796 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"ServeysUsers",
                columns:[
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },

                    {
                        name: "user_id",
                        type: "uuid"
                    },

                    {
                        name: "survey_id",
                        type: "uuid"
                    },

                    {
                        name: "value",
                        type: "number",
                        isNullable: true
                    },

                    {
                        name: "created_at",
                        type: "Timestamp",
                        default: "now()" 
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKuser",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "CASCADE",   //QUANDO REFERENCIAS UM USUARIO FOREM APAGADAS, AS FERERÊNCIAS AS ELE DEVEM SER TRATADAS TAMBÉM
                        onUpdate: "CASCADE"    //QUANDO REFERENCIAS UM USUARIO FOREM ATUALIZADAS, AS FERERÊNCIAS AS ELE DEVEM SER TRATADAS TAMBÉM
                    },                         //CASCADE FAZ A FUNCÇÃO EM CASCATA PARA REFERENCIAS AS CHAVES ESTRANGEIRAS

                    {
                        name: "FKsurvey",
                        referencedTableName: "surveys",
                        referencedColumnNames: ["id"],
                        columnNames: ["survey_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    } 
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("SurveysUsers");
    }

}
    