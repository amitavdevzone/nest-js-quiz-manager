import { Connection, getManager } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { User } from '../../modules/user/user.entity';

export class UserCreateSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await getManager().query('TRUNCATE users');

    await factory(User)().create({
      name: 'Amitav Roy',
      email: 'reachme@amitavroy.com',
      password: 'Password@123',
    });

    await factory(User)().createMany(20);
  }
}
