import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateOrderUseCase } from './use-cases/create-order.use-case';
import { ListOrdersUseCase } from './use-cases/list-order.use-case';
import { CreateOrderDto } from './dtos/create-orders.dto';

@Controller('orders')
export class OrdersController {
  @Inject(CreateOrderUseCase)
  private readonly createOrderUseCase: CreateOrderUseCase;

  @Inject(ListOrdersUseCase)
  private readonly listOrdersUseCase: ListOrdersUseCase;

  @Get()
  listOrders() {
    return this.listOrdersUseCase.execute();
  }

  @Post()
  createOrder(@Body() data: CreateOrderDto) {
    return this.createOrderUseCase.execute(data);
  }
}
