import { Column, MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1770181854362 implements MigrationInterface {
//CRIANDO A TABELA DE USUARIO DO BANCO DE DADOS URANDO ORM "TYPEORM"
    public async up(queryRunner: QueryRunner): Promise<void> { // "UP" PARA QUANDO QUER CRIAR A MIGRATION
        await queryRunner.createTable(      //PARA CRIAR A TABELA
            new Table({                     //NOVA TABELA
                name: "users",              //NOME DA TABELA
                columns: [                  //DECLARANDO QUE VAI SER CRIADA AS COLUNAS
                    {
                        name: "id",         //NOME DA COLUNA
                        type: "uuid",       //TIPO DA COLUNA
                        isPrimary: true     //DECLARANDO CHAVE PRIMARIA
                    },
                    {
                        name: "name", 
                        type: "varchar",
                    },
                    {
                        name: "email",
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

    public async down(queryRunner: QueryRunner): Promise<void> { //"DOWN" PARA QUANTO QUISER DAR DROP NA MIGRATION
        await queryRunner.dropTable("users"); //CASO QUEIRA DAR UM DROP DA TABELA 
    }

}
