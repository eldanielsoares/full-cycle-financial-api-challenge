import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { AssetsModule } from './modules/assets/assets.module';
import { OrdersModule } from './modules/orders/orders.module';

@Module({
  imports: [AssetsModule, OrdersModule],
  controllers: [],
  providers: [PrismaModule],
})
export class AppModule {}
