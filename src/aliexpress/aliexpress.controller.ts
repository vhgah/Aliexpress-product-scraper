import { Controller, Get, Param, Query } from '@nestjs/common';
import { AliexpressService } from './aliexpress.service';

@Controller('aliexpress')
export class AliexpressController {
  constructor(private readonly aliexpressService: AliexpressService) {}

  @Get(':productId')
  async scrapeProduct(
    @Param('productId') productId: string,
  ): Promise<any> {
    const scrapedData = await this.aliexpressService.scrapeProductDetails(productId);
    return scrapedData;
  }
}
