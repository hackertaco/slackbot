import { getConnection, Repository } from 'typeorm';
import { BaseModel } from '../model/BaseModel';
export type ObjectType<T> = { new (): T } | Function;
export type listForm<T> = Promise<[T[], number]>;
const listForm = Promise;

// you can extends this BaseService to use common method

export abstract class BaseService<T extends BaseModel> {
  protected genericRepository: Repository<T>;
  constructor(repo: ObjectType<T>) {
    this.genericRepository = getConnection().getRepository(repo);
  }
  async getByWhere(
    where: [] | {},
    relations?: string[],
    skip?: number,
    take?: number,
  ): listForm<T> {
    return await this.genericRepository.findAndCount({
      where,
      order: { createdAt: 'DESC' },
      relations,
      take,
      skip,
    });
  }
}
