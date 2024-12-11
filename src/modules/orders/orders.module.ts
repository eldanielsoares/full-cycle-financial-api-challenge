import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { CreateOrderUseCase } from './use-cases/create-order.use-case';
import { ListOrdersUseCase } from './use-cases/list-order.use-case';
import { PrismaModule } from '../prisma/prisma.module';
import { IOrdersRepository } from './repositories/orders.repository';
import { OrdersPrismaRepository } from './repositories/orders-prisma.repository';

@Module({
  imports: [PrismaModule],
  controllers: [OrdersController],
  providers: [
    CreateOrderUseCase,
    ListOrdersUseCase,
    OrdersPrismaRepository,
    {
      provide: IOrdersRepository,
      useClass: OrdersPrismaRepository,
    },
  ],
  exports: [OrdersPrismaRepository],
})
export class OrdersModule {}
