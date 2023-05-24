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
import * as NOTFOUND from './Notfound.json'

// localhost:3000/products
@Controller('routes')
export class ProductsController {
  // GET /products
  @Get()
  getAllProducts() {
    const DATA = ROUTELIST.sort((a, b) => {
      const RouteNoA = a.RouteNo.toUpperCase();
      const RouteNoB = b.RouteNo.toUpperCase();

      if (RouteNoA < RouteNoB) {
        return -1;
      }
      if (RouteNoA > RouteNoB) {
        return 1;
      }
      return 0;
    });
    return ROUTELIST;
  }

  // GET /products/:id
  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    for (let index = 0; index < ROUTEDETAIL.length; ++index) {
      if (ROUTEDETAIL[index]["RouteNo"] == prodId) {
        return ROUTEDETAIL[index];
      } 
    }
    return NOTFOUND;
  }

  @Get(':id/route')
  getRoute(@Param('id') prodId: string) {
    for (let index = 0; index < ROUTEDETAIL.length; ++index) {
      if (ROUTEDETAIL[index]["RouteNo"] == prodId) {
        return ROUTEDETAIL[index]['InBoundDescription'];
      } 
    }
    return NOTFOUND;
  }
}


