import { ABILITY_CARD_CONFIG } from '../../../../constants';
import { Convert } from '../../../../common/Convert';

export default (campaign, { payload: { character, ability, slot, augment } }) => {
  const curChar = campaign.characters[character];
  const augments = curChar.abilityDeck[ability].augments;
  const cost = Convert.abilityAugmentCost({
    ability: ABILITY_CARD_CONFIG[ability],
    augments,
    slotID: slot,
    augmentID: augment,
  });

  return {
    ...campaign,
    characters: {
      ...campaign.characters,
      [character]: {
        ...curChar,
        gold: curChar.gold - cost.cost,
        abilityDeck: {
          ...curChar.abilityDeck,
          [ability]: {
            ...curChar.abilityDeck[ability],
            augments: {
              ...augments,
              [slot]: augment,
            },
          },
        },
      },
    },
  };
};
