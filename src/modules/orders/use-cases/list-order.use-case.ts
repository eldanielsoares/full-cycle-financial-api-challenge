import { Injectable } from '@nestjs/common';
import { IOrdersRepository } from '../repositories/orders.repository';

@Injectable()
export class ListOrdersUseCase {
  constructor(private readonly orderRepository: IOrdersRepository) {}

  execute() {
    return this.orderRepository.list();
  }
}
