import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import * as NOTFOUND from './Notfound.json'
import * as STOPSLIST from './StopsDetail.json'

// localhost:3000/products
@Controller('stops')
export class StopsController {
  // GET /routes
  @Get()
  getAllStops() {
    return STOPSLIST;
  }

  // GET /routes/:id
  @Get(':id')
  getStop(@Param('id') StopId: number) {
    for (let index = 0; index < STOPSLIST.length; ++index) {
      if (STOPSLIST[index]["StopId"] == StopId) {
        return STOPSLIST[index];
      } 
    }
    return NOTFOUND;
  }
}


