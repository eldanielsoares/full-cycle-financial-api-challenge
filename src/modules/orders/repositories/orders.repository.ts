import { CreateOrderDto } from '../dtos/create-orders.dto';
import { OrderEntity } from '../entities/orders.entity';

export abstract class IOrdersRepository {
  abstract create(data: CreateOrderDto): Promise<OrderEntity>;
  abstract list(): Promise<OrderEntity[]>;
}
