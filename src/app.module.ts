import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AliexpressModule } from './aliexpress/aliexpress.module';

@Module({
  imports: [AliexpressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
