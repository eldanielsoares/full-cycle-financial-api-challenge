import { CreateAssetDto } from '../dtos/create-asset.dto';
import { AssetEntity } from '../entities/asset.entity';

export abstract class IAssetRepository {
  abstract create(data: CreateAssetDto): Promise<AssetEntity>;
  abstract list(): Promise<AssetEntity[]>;
}
