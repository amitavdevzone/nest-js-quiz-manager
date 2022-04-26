import { randEmail, randFullName, randPassword } from '@ngneat/falso';
import { define } from 'typeorm-seeding';
import { User } from '../../modules/user/user.entity';

define(User, () => {
  const user = new User();
  user.name = randFullName();
  user.email = randEmail();
  user.password = randPassword();
  return user;
});
