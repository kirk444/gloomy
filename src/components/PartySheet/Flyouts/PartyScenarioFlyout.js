import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem } from 'reactstrap';

import { Flyout } from '../../Flyout';
import { ScenarioIcon, StarIcon } from '../../Icons';

const PartyScenarioFlyout = ({ mode, campaign, party, onSuggestedLevelClick, onFinishScenarioClick }) => {
  const { location } = party;
  const { gloomhaven, scenario, region } = location;

  if (!campaign.scenarios.length)
    return (
      <span>
        <StarIcon title="Travel to Gloomhaven" /> Unknown
      </span>
    );

  if (!gloomhaven) {
    if (!scenario || !scenario.id) return 'Unknown';
    if (location.campaign && scenario.complete) return scenario.name;
  }

  const name = gloomhaven ? 'Gloomhaven' : region.unknown ? scenario.name : `${scenario.name}, ${region.name}`;
  const prefix = mode !== 'party' ? 'Party: ' : '';

  return (
    <Flyout text={name} className="scenario-name">
      <Flyout.Head>Actions</Flyout.Head>
      <ListGroup>
        <ListGroupItem tag="button" action onClick={onSuggestedLevelClick}>
          {prefix}Suggested Level&hellip;
        </ListGroupItem>
        {!gloomhaven && (
          <ListGroupItem tag="button" action onClick={onFinishScenarioClick}>
            <ScenarioIcon /> {prefix}Finish Scenario&hellip;
          </ListGroupItem>
        )}
      </ListGroup>
    </Flyout>
  );
};

PartyScenarioFlyout.propTypes = {
  campaign: PropTypes.object.isRequired,
  party: PropTypes.object.isRequired,
  onSuggestedLevelClick: PropTypes.func.isRequired,
  onFinishScenarioClick: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['party', 'character']),
};

PartyScenarioFlyout.defaultProps = {
  mode: 'party',
};

export default PartyScenarioFlyout;
