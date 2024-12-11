import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateAssetUseCase } from './use-cases/create-asset.use-case';
import { ListAssetsUseCase } from './use-cases/list-assets.use-case';
import { CreateAssetDto } from './dtos/create-asset.dto';

@Controller('assets')
export class AssetsController {
  @Inject(CreateAssetUseCase)
  private readonly createAssetUseCase: CreateAssetUseCase;

  @Inject(ListAssetsUseCase)
  private readonly listAssetsUseCase: ListAssetsUseCase;

  @Get()
  async listAssets() {
    return this.listAssetsUseCase.execute();
  }

  @Post()
  async createAsset(@Body() data: CreateAssetDto) {
    return this.createAssetUseCase.execute(data);
  }
}
