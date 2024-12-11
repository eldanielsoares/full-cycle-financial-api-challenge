import { Module } from '@nestjs/common';
import { AssetsController } from './assets.controller';
import { CreateAssetUseCase } from './use-cases/create-asset.use-case';
import { ListAssetsUseCase } from './use-cases/list-assets.use-case';
import { IAssetRepository } from './repositories/asset.repository';
import { AssetPrismaRepository } from './repositories/asset-prisma.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AssetsController],
  providers: [
    CreateAssetUseCase,
    ListAssetsUseCase,
    AssetPrismaRepository,
    {
      provide: IAssetRepository,
      useClass: AssetPrismaRepository,
    },
  ],
  exports: [AssetPrismaRepository],
})
export class AssetsModule {}
