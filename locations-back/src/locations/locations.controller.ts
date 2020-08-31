import { Controller, Get, Res, HttpStatus, Param, Post, Body } from '@nestjs/common';
import { LocationsService } from './locations.service';
import { LocationDTO } from './location.dto';

@Controller('locations')
export class LocationsController {
  constructor(private readonly locationsService: LocationsService){}

  @Get('home')
  getHome(): string {
    return this.locationsService.getHome();
  }
  
  @Get()
  getAll(@Res() response){
    this.locationsService.getLocations().then(locations => {
      response.status(HttpStatus.OK).json(locations);
    }).catch(err => {
      response.status(HttpStatus.FORBIDDEN).json({ message: err.message });
    });
  }

  @Get(':id')
  getById(@Res() response, @Param('id') id){
    this.locationsService.getLocationById(id).then(location => {
      response.status(HttpStatus.OK).json(location);
    }).catch(err => {
      response.status(HttpStatus.FORBIDDEN).json({ message: err.message });
    });
  }

  @Post()
  create(@Body() location: LocationDTO, @Res() response){
    this.locationsService.createLocation(location).then(location => {
      response.status(HttpStatus.OK).json(location);
    }).catch(err => {
      response.status(HttpStatus.FORBIDDEN).json({ message: err.message });
    });
  }
}
