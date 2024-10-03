import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserModelTable1727976414328 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          { name: 'id', type: 'int', isPrimary: true },
          { name: 'name', type: 'string' },
          { name: 'cpf', type: 'string' },
          { name: 'birth', type: 'string' },
          { name: 'cep', type: 'int' },
          { name: 'email', type: 'string' },
          { name: 'password', type: 'string' },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}
