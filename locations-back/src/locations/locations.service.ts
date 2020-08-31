import { Injectable } from '@nestjs/common';
import { Location } from './locations.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocationDTO } from './location.dto';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>
    ){}

  getHome(): string {
    return 'Soy locations';
  }

  async getLocations(): Promise<Location[]>{
    return await this.locationRepository.createQueryBuilder('loc')
      .leftJoinAndSelect('loc.parentLocation', 'pLoc')
      .getMany();
  }

  async getLocationById(id: number): Promise<Location>{
    return await this.locationRepository.createQueryBuilder('loc')
    .leftJoinAndSelect('loc.parentLocation', 'pLoc')
    .leftJoinAndSelect('loc.internalLocations', 'iLoc')
    .where('loc.id = :id', { id })
    .getOne();
  }

  async createLocation(location: LocationDTO): Promise<Location>{
    const loc = new Location;
    loc.name = location.name;
    loc.area = location.area;
    if (location.parentLocation) {
      loc.parentLocation = await this.locationRepository.findOne(location.parentLocation); 
    }
    return await this.locationRepository.save(loc);
  }
}
