import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateAcessoriesModelTable1727976285179
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'acessories',
        columns: [
          { name: 'id', type: 'int', isPrimary: true },
          { name: 'car_id', type: 'int' },
          { name: 'name', type: 'string' },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'acessories',
      new TableForeignKey({
        columnNames: ['car_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'car',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('acessories');
  }
}
