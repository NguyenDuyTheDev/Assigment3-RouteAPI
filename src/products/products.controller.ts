import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import * as ROUTELIST from './Station.json'
import * as ROUTEDETAIL from './StationDetail.json'
import * as ROUTESTOPS from './RouteStops.json'
import * as ROUTETIMETABLE from './RouteTimetable.json'
import * as NOTFOUND from './Notfound.json'

// localhost:3000/products
@Controller('routes')
export class ProductsController {
  // GET /routes
  @Get()
  getAllProducts() {
    return ROUTELIST;
  }

  // GET /routes/:id
  @Get(':id')
  getProduct(@Param('id') prodId: number) {
    for (let index = 0; index < ROUTEDETAIL.length; ++index) {
      if (ROUTEDETAIL[index]["RouteId"] == prodId) {
        return ROUTEDETAIL[index];
      } 
    }
    return NOTFOUND;
  }

  @Get(':id/stops/start')
  getRouteStartStops(@Param('id') prodId: number) {
    for (let index = 0; index < ROUTESTOPS.length; ++index) {
      if (ROUTESTOPS[index]["RouteId"] == prodId) {
        return ROUTESTOPS[index]['RouteDetail'];
      } 
    }
    return NOTFOUND;
  }
  
  @Get(':id/stops/end')
  getRouteEndStops(@Param('id') prodId: number) {
    for (let index = 0; index < ROUTESTOPS.length; ++index) {
      if (ROUTESTOPS[index]["RouteId"] == prodId) {
        return ROUTESTOPS[index + 1]['RouteDetail'];
      } 
    }
    return NOTFOUND;
  }

  @Get(':id/timetable/start')
  getRouteStartTimeTable(@Param('id') prodId: number) {
    for (let index = 0; index < ROUTETIMETABLE.length; ++index) {
      if (ROUTETIMETABLE[index]["RouteId"] == prodId) {
        return ROUTETIMETABLE[index]['TimeTable'];
      } 
    }
    return NOTFOUND;
  }

  @Get(':id/timetable/end')
  getRouteEndTimeTable(@Param('id') prodId: number) {
    for (let index = 0; index < ROUTETIMETABLE.length; ++index) {
      if (ROUTETIMETABLE[index]["RouteId"] == prodId) {
        for (let subindex = index + 1; subindex < ROUTETIMETABLE.length; ++subindex) {
          if (ROUTETIMETABLE[subindex]["RouteId"] == prodId) {
            return ROUTETIMETABLE[subindex]["TimeTable"];
          }
        }
      } 
    }
    return NOTFOUND;
  }
}


