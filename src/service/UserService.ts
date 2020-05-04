import { Service } from 'typedi';
import { User } from '../model';
import { BaseService } from './BaseService';
import { IsString } from 'class-validator';

export type userType = Promise<[User, boolean]>;
const userType = Promise;

export class IuserDTO {
  @IsString()
  name!: string;
}

@Service()
export class UserService extends BaseService<User> {
  constructor() {
    super(User);
  }

  async create(user: IuserDTO): userType {
    const getUser = await this.findUser(user.name);
    //db exist
    if (getUser) {
      return [getUser, false];
    } else {
      const newUser = await this.genericRepository.save({
        name: user.name!,
      });
      return [newUser, true];
    }
  }

  async findUser(name: string): Promise<User> {
    return (this.getByWhere({ where: { name } }) as unknown) as User;
  }
}
