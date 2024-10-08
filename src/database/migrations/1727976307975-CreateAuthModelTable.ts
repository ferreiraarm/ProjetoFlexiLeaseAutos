import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateAuthModelTable1727976307975 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'auth',
        columns: [
          { name: 'id', type: 'int', isPrimary: true },
          { name: 'email', type: 'string' },
          { name: 'password', type: 'string' },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('auth');
  }
}
