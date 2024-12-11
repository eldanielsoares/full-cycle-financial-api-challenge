import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from '../dtos/create-asset.dto';
import { IAssetRepository } from '../repositories/asset.repository';

@Injectable()
export class CreateAssetUseCase {
  constructor(private readonly assetRepository: IAssetRepository) {}

  execute(createAssetDto: CreateAssetDto) {
    return this.assetRepository.create(createAssetDto);
  }
}
