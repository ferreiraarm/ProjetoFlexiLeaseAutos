import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class CreateCarModelTable1727976244334 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'car',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          { name: 'cars_id', type: 'int' },
          { name: 'model', type: 'string' },
          { name: 'color', type: 'string' },
          { name: 'ano', type: 'int' },
          { name: 'valuePerDay', type: 'int' },
          { name: 'numberOfPassengers', type: 'int' },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'car',
      new TableForeignKey({
        columnNames: ['cars_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'cars',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('car');
  }
}
