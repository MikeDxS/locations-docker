import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, Unique } from "typeorm";

@Entity('locations')
@Unique(['name', 'parentLocation'])
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  area: number;

  @ManyToOne(() => Location, parentLocation => parentLocation.internalLocations, { nullable: true })
  parentLocation: Location;

  @OneToMany(() => Location, childLocation => childLocation.parentLocation, { nullable: true })
  internalLocations: Location[];
}