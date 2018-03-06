import React from 'react';
import classNames from 'classnames';

import { Polarity } from '../../Common';
import { SymbolIcon } from '../../Icons';

export default props => {
  const { action: { value, style, className }, augments } = props;
  const classes = classNames('action action-modify-retaliate', className);

  return (
    <div className={classes} style={style}>
      <Polarity number={value} /> Attack <SymbolIcon symbol="Retaliate" noText className="light" />
      {augments}
    </div>
  );
};
