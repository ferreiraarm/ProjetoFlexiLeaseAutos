import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateReserveModelTable1727976361704
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'reserve',
        columns: [
          { name: 'id', type: 'int', isPrimary: true },
          { name: 'stardate', type: 'string' },
          { name: 'enddate', type: 'string' },
          { name: 'finaldate', type: 'string' },
          { name: 'userId', type: 'int' },
          { name: 'carId', type: 'int' }, //verificar as chaves estranjeiras
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('reserve');
  }
}
