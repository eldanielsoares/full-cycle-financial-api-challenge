import { Injectable } from '@nestjs/common';
import { AssetEntity } from '../entities/asset.entity';
import { IAssetRepository } from './asset.repository';
import { PrismaService } from 'src/modules/prisma/prisma.service';
import { CreateAssetDto } from '../dtos/create-asset.dto';

@Injectable()
export class AssetPrismaRepository implements IAssetRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateAssetDto): Promise<AssetEntity> {
    return this.prisma.asset.create({ data });
  }

  list(): Promise<AssetEntity[]> {
    return this.prisma.asset.findMany();
  }
}
