import { Module } from '@nestjs/common';
import { AliexpressController } from './aliexpress.controller';
import { AliexpressService } from './aliexpress.service';

@Module({
  controllers: [AliexpressController],
  providers: [AliexpressService],
})
export class AliexpressModule {}
