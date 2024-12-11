import { PrismaService } from 'src/modules/prisma/prisma.service';
import { OrderEntity } from '../entities/orders.entity';
import { IOrdersRepository } from './orders.repository';
import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from '../dtos/create-orders.dto';

@Injectable()
export class OrdersPrismaRepository implements IOrdersRepository {
  constructor(private readonly prisma: PrismaService) {}
  create(data: CreateOrderDto): Promise<OrderEntity> {
    return this.prisma.order.create({ data });
  }
  list(): Promise<OrderEntity[]> {
    return this.prisma.order.findMany();
  }
}
