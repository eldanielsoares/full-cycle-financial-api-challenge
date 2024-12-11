import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from '../dtos/create-orders.dto';
import { IOrdersRepository } from '../repositories/orders.repository';

@Injectable()
export class CreateOrderUseCase {
  constructor(private readonly orderRepository: IOrdersRepository) {}

  execute(data: CreateOrderDto) {
    return this.orderRepository.create(data);
  }
}
