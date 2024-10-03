import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCarsModelTable1727976339965 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cars',
        columns: [
          { name: 'id', type: 'int', isPrimary: true },
          { name: 'total', type: 'int' },
          { name: 'limit', type: 'int' },
          { name: 'offset', type: 'int' },
          { name: 'offsets', type: 'int' },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cars');
  }
}
