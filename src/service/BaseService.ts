import { getConnection, Repository } from 'typeorm';
import { BaseModel } from '../model/BaseModel';
export type ObjectType<T> = { new (): T } | Function;

// you can extends this BaseService to use common method

export abstract class BaseService<T extends BaseModel> {
  protected genericRepository: Repository<T>;
  constructor(repo: ObjectType<T>) {
    this.genericRepository = getConnection().getRepository(repo);
  }
  async getByWhere(where: [] | {}): Promise<T | undefined> {
    return await this.genericRepository.findOne({
      where,
    });
  }
}
