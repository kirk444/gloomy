import { default as ACTION } from '../ABILITY_CARD/ACTION';
import ID from './ID';

export default {
  [ID.BAT_SWARM]: {
    id: ID.BAT_SWARM,
    name: 'Bat Swarm',
    hp: { value: 4, augments: [1] },
    move: { value: 2, augments: [2] },
    attack: { value: 2, augments: [3] },
    range: { value: 0 },
    bonuses: [{ action: ACTION.FLYING }],
  },
  [ID.BATTLE_BOAR]: {
    id: ID.BATTLE_BOAR,
    name: 'Battle Boar',
    hp: { value: 7, augments: [1] },
    move: { value: 3, augments: [2] },
    attack: { value: 1, augments: [3] },
    range: { value: 0 },
    bonuses: [],
  },
  [ID.BATTLE_BOT]: {
    id: ID.BATTLE_BOT,
    name: 'Battle Bot',
    hp: { value: 6, augments: [1] },
    move: { value: 2, augments: [2] },
    attack: { value: 2, augments: [3] },
    range: { value: 0 },
    bonuses: [],
  },
  [ID.BLACK_UNICORN]: {
    id: ID.BLACK_UNICORN,
    name: 'Black Unicorn',
    hp: { value: 6, augments: [1] },
    move: { value: 4, augments: [2] },
    attack: { value: 4, augments: [3] },
    range: { value: 0 },
    bonuses: [{ action: ACTION.PIERCE, value: 3 }],
  },
  [ID.BURNING_AVATAR]: {
    id: ID.BURNING_AVATAR,
    name: 'Burning Avatar',
    hp: { value: 2, augments: [2] },
    move: { value: 3, augments: [3] },
    attack: { value: 2, augments: [4] },
    range: { value: 3, augments: [5] },
    bonuses: [
      { action: ACTION.NOTE, value: 'On death:' },
      {
        action: ACTION.ATTACK,
        value: 3,
        bonuses: [{ action: ACTION.NOTE, value: 'Target all\nadjacent enemies' }],
      },
    ],
  },
  [ID.DECOY]: {
    id: ID.DECOY,
    name: 'Decoy',
    hp: { value: 6, augments: [1] },
    move: { value: 2, augments: [2] },
    attack: { value: 0 },
    range: { value: 0 },
  },
  [ID.DOPPLEGANGER]: {
    id: ID.DOPPLEGANGER,
    name: 'Doppleganger',
    hp: { value: 10, augments: [2] },
    move: { value: 2, augments: [3] },
    attack: { value: 0 },
    range: { value: 0 },
    bonuses: [
      {
        action: ACTION.NOTE,
        value: "You may perform attack actions as if you occupy the summon's hex.",
        className: 'small',
      },
    ],
  },
  [ID.GIANT_TOAD]: {
    id: ID.GIANT_TOAD,
    name: 'Giant Toad',
    hp: { value: 7, augments: [1] },
    move: { value: 1, augments: [2] },
    attack: { value: 1, augments: [3] },
    range: { value: 0 },
    bonuses: [{ action: ACTION.STUN }],
  },
  [ID.GREEN_ADDER]: {
    id: ID.GREEN_ADDER,
    name: 'Green Adder',
    hp: { value: 4, augments: [1] },
    move: { value: 2, augments: [2] },
    attack: { value: 1, augments: [3] },
    range: { value: 0 },
    bonuses: [{ action: ACTION.POISON }],
  },
  [ID.HEALING_SPRITE]: {
    id: ID.HEALING_SPRITE,
    name: 'Healing Sprite',
    hp: { value: 2, augments: [1] },
    move: { value: 2, augments: [2] },
    attack: { value: 1 },
    range: { value: 3, augments: [3] },
    bonuses: [
      {
        action: ACTION.NOTE,
        value: 'Performs\nHeal(Symbol:Heal)2\nRange(Symbol:Range)2\nat end of turn',
        className: 'small',
      },
    ],
  },
  [ID.IRON_BEAST]: {
    id: ID.IRON_BEAST,
    name: 'Iron Beast',
    hp: { value: 5, augments: [1] },
    move: { value: 2, augments: [2] },
    attack: { value: 1, augments: [3] },
    range: { value: 0 },
    bonuses: [{ action: ACTION.RETALIATE, value: 1 }, { action: ACTION.SHIELD, value: 1 }],
    className: 'summon2',
  },
  [ID.JADE_FALCON]: {
    id: ID.JADE_FALCON,
    name: 'Jade Falcon',
    hp: { value: 2 },
    move: { value: 3 },
    attack: { value: 2 },
    range: { value: 0 },
    bonuses: [{ action: ACTION.FLYING }],
  },
  [ID.KILL_BOT]: {
    id: ID.KILL_BOT,
    name: 'Kill Bot',
    hp: { value: 6, augments: [1] },
    move: { value: 3, augments: [2] },
    attack: { value: 3, augments: [3] },
    range: { value: 0 },
    bonuses: [],
  },
  [ID.LAVA_GOLEM]: {
    id: ID.LAVA_GOLEM,
    name: 'Lava Golem',
    hp: { value: 7, augments: [1] },
    move: { value: 2, augments: [2] },
    attack: { value: 3, augments: [3] },
    range: { value: 0 },
    bonuses: [
      {
        action: ACTION.RETALIATE,
        value: 2,
        bonuses: [{ action: ACTION.RANGE, value: 2 }],
      },
      { action: ACTION.WOUND },
    ],
    className: 'summon2',
  },
  [ID.LIVING_BOMB]: {
    id: ID.LIVING_BOMB,
    name: 'Living Bomb',
    hp: { value: 1 },
    move: { value: 3, augments: [1] },
    attack: { value: 2, augments: [2] },
    range: { value: 0 },
    bonuses: [
      {
        action: ACTION.NOTE,
        value: 'On death:\nAttack(Symbol:Attack)3(Element:Fire)Target all enemies\nwithin Range(Symbol:Range)2',
        className: 'small',
      },
    ],
  },
  [ID.MANA_SPHERE]: {
    id: ID.MANA_SPHERE,
    name: 'Mana Sphere',
    hp: { value: 3, augments: [1] },
    move: { value: 3, augments: [2] },
    attack: { value: 2, augments: [3] },
    range: { value: 0 },
    bonuses: [],
  },
  [ID.MONOLITH]: {
    id: ID.MONOLITH,
    name: 'Monolith',
    hp: { value: 15 },
    move: { value: 0 },
    attack: { value: 0 },
    range: { value: 0 },
    bonuses: [{ action: ACTION.SHIELD, value: 2 }],
  },
  [ID.MONSTROUS_RAT]: {
    id: ID.MONSTROUS_RAT,
    name: 'Monstrous Rat',
    hp: { value: 4, augments: [1] },
    move: { value: 3, augments: [2] },
    attack: { value: 3, augments: [3] },
    range: { value: 0 },
  },
  [ID.MYSTIC_ALLY]: {
    id: ID.MYSTIC_ALLY,
    name: 'Mystic Ally',
    hp: { value: 2, augments: [3] },
    move: { value: 2, augments: [4] },
    attack: { value: 3, augments: [5] },
    range: { value: 2 },
  },
  [ID.NAIL_SPHERES]: {
    id: ID.NAIL_SPHERES,
    name: '3 Nail Spheres',
    hp: { value: 4, augments: [1] },
    move: { value: 2, augments: [2] },
    attack: { value: 0 },
    range: { value: 0 },
    bonuses: [{ action: ACTION.RETALIATE, value: 2 }, { action: ACTION.SHIELD, value: 1 }],
    className: 'summon2',
  },
  [ID.RAT_KING]: {
    id: ID.RAT_KING,
    name: 'Rat King',
    hp: { value: 9, augments: [1] },
    move: { value: 2, augments: [2] },
    attack: { value: 'X' },
    range: { value: 0 },
    bonuses: [
      {
        action: ACTION.NOTE,
        value: "Where X is half the rat's current hit point value (lparen)rounded up(rparen)",
        className: 'small',
      },
    ],
  },
  [ID.RAT_SWARM]: {
    id: ID.RAT_SWARM,
    name: 'Rat Swarm',
    hp: { value: 6, augments: [1] },
    move: { value: 1, augments: [2] },
    attack: { value: 2, augments: [3] },
    range: { value: 0 },
    bonuses: [{ action: ACTION.POISON }],
  },
  [ID.RED_FALCON]: {
    id: ID.RED_FALCON,
    name: 'Red Falcon',
    hp: { value: 2, augments: [1] },
    move: { value: 4, augments: [2] },
    attack: { value: 2 },
    range: { value: 0 },
    bonuses: [{ action: ACTION.FLYING }],
  },
  [ID.ROCK_COLOSSUS]: {
    id: ID.ROCK_COLOSSUS,
    name: 'Rock Colossus',
    hp: { value: 7, augments: [1] },
    move: { value: 1, augments: [2] },
    attack: { value: 3, augments: [3] },
    range: { value: 0 },
    bonuses: [],
  },
  [ID.SHADOW_WOLVES]: {
    id: ID.SHADOW_WOLVES,
    name: '2 Shadow Wolves',
    hp: { value: 3, augments: [1] },
    move: { value: 3 },
    attack: { value: 2, augments: [2] },
    range: { value: 0 },
    bonuses: [{ action: ACTION.PIERCE, value: 2 }],
  },
  [ID.SKELETON]: {
    id: ID.SKELETON,
    name: 'Skeleton',
    hp: { value: 3 },
    move: { value: 2 },
    attack: { value: 2 },
    range: { value: 0 },
  },
  [ID.SLIME_SPIRIT]: {
    id: ID.SLIME_SPIRIT,
    name: 'Slime Spirit',
    hp: { value: 4, augments: [1] },
    move: { value: 3, augments: [2] },
    attack: { value: 1, augments: [3] },
    range: { value: 0 },
    bonuses: [{ action: ACTION.SHIELD, value: 2 }, { action: ACTION.MUDDLE }],
    className: 'summon2',
  },
  [ID.SPIRIT_BANNER]: {
    id: ID.SPIRIT_BANNER,
    name: 'Spirit Banner',
    hp: { value: 8 },
    move: { value: 0 },
    attack: { value: 0 },
    range: { value: 0 },
    bonuses: [
      {
        action: ACTION.NOTE,
        value: 'All adjacent allies add +2 Attack (Symbol:Attack) to their Attack actions.',
        className: 'small',
      },
    ],
  },
  [ID.SPITTING_COBRA]: {
    id: ID.SPITTING_COBRA,
    name: 'Spitting Cobra',
    hp: { value: 5, augments: [1] },
    move: { value: 3, augments: [2] },
    attack: { value: 3, augments: [3] },
    range: { value: 3, augments: [4] },
    bonuses: [{ action: ACTION.POISON }],
  },
  [ID.STEEL_CONSTRUCT]: {
    id: ID.STEEL_CONSTRUCT,
    name: 'Steel Construct',
    hp: { value: 5 },
    move: { value: 2 },
    attack: { value: 3 },
    range: { value: 0 },
  },
  [ID.SWAMP_ALLIGATOR]: {
    id: ID.SWAMP_ALLIGATOR,
    name: 'Swamp Alligator',
    hp: { value: 5, augments: [1] },
    move: { value: 2, augments: [2] },
    attack: { value: 3, augments: [3] },
    range: { value: 0 },
    bonuses: [{ action: ACTION.IMMOBILIZE }],
  },
  [ID.TATTERED_WOLF]: {
    id: ID.TATTERED_WOLF,
    name: 'Tattered Wolf',
    hp: { value: 4, augments: [1] },
    move: { value: 3, augments: [2] },
    attack: { value: 2, augments: [3] },
    range: { value: 0 },
    bonuses: [],
  },
  [ID.THORN_SHOOTER]: {
    id: ID.THORN_SHOOTER,
    name: 'Thorn Shooter',
    hp: { value: 2, augments: [1] },
    move: { value: 1, augments: [2] },
    attack: { value: 2, augments: [3] },
    range: { value: 4, augments: [4] },
    bonuses: [{ action: ACTION.POISON }],
  },
  [ID.VICIOUS_JACKAL]: {
    id: ID.VICIOUS_JACKAL,
    name: 'Vicious Jackal',
    hp: { value: 5, augments: [1] },
    move: { value: 2, augments: [2] },
    attack: { value: 1, augments: [3] },
    range: { value: 0 },
    bonuses: [{ action: ACTION.RETALIATE, value: 1 }, { action: ACTION.WOUND }],
    className: 'summon2',
  },
  [ID.VOID_EATER]: {
    id: ID.VOID_EATER,
    name: 'Void Eater',
    hp: { value: 5, augments: [1] },
    move: { value: 3, augments: [2] },
    attack: { value: 2, augments: [3] },
    range: { value: 2, augments: [4] },
    bonuses: [{ action: ACTION.CURSE }],
  },
  [ID.WAR_HAWK]: {
    id: ID.WAR_HAWK,
    name: 'War Hawk',
    hp: { value: 3, augments: [1] },
    move: { value: 3, augments: [2] },
    attack: { value: 3, augments: [3] },
    range: { value: 0 },
    bonuses: [{ action: ACTION.FLYING }],
  },
  [ID.WARRIOR_SPIRIT]: {
    id: ID.WARRIOR_SPIRIT,
    name: 'Warrior Spirit',
    hp: { value: 4 },
    move: { value: 1 },
    attack: { value: 3 },
    range: { value: 0 },
  },
  [ID.WIND_TOTEM]: {
    id: ID.WIND_TOTEM,
    name: 'Wind Totem',
    hp: { value: 8 },
    move: { value: 0 },
    attack: { value: 1 },
    range: { value: 0 },
    bonuses: [
      { action: ACTION.NOTE, value: 'Target all adjacent enemies', className: 'small' },
      { action: ACTION.PUSH, value: 2 },
    ],
    className: 'summon2',
  },
};
