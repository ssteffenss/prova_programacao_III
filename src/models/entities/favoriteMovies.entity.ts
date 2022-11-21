import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('melhores_filmes')
export default class bestMoviesEntity {
  @PrimaryColumn()
  id?: number;

  @Column({ name: 'titulo', type: 'varchar' })
  titulo: string;

  @Column({ name: 'imagem', type: 'varchar' })
  imagem: string;

  @Column({ name: 'user_Id', type: 'varchar' })
  user_id: string;

  @Column({
    name: 'feito_em',
    type: 'timestamp',
  })
  createdAt: Date;

  @Column({
    name: 'atualizado_em',
    type: 'timestamp',
  })
  updatedAt: Date;
}
