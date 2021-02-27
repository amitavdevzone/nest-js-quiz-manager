import { EntityRepository, Repository } from 'typeorm';
import { Option } from '../entities/option.entity';

@EntityRepository(Option)
export class OptionRepository extends Repository<Option> {}
