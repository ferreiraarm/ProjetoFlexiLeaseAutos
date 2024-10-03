import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateReservesModelTable1727976392008
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'reserves',
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
    await queryRunner.dropTable('reserves');
  }
}
