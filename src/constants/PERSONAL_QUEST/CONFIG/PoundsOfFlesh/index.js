import { CLASS } from '../../../CLASS';
import REWARD_TYPE from '../../REWARD_TYPE';
import ID from '../../ID';
import initialState from './initialState';
import reduce from './reduce';

export default {
  id: ID.POUNDS_OF_FLESH,
  name: 'Pounds of Flesh',
  reward: { type: REWARD_TYPE.CLASS, class: CLASS.BERSERKER },
  initialState,
  reduce,
};
