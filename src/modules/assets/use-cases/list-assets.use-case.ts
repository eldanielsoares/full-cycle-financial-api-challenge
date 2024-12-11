import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from '../dtos/create-asset.dto';
import { IAssetRepository } from '../repositories/asset.repository';

@Injectable()
export class ListAssetsUseCase {
  constructor(private readonly assetRepository: IAssetRepository) {}

  execute() {
    return this.assetRepository.list();
  }
}
