import React from 'react';
import classNames from 'classnames';

export default ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 750 750"
    className={classNames('svg svg-slot svg-slot-1H', className)}
    {...props}
  >
    <g transform="matrix(1.33333 0 0 -1.33333 -25 775)">
      <path
        className="bg"
        fill="#231f20"
        d="M161.379 503.345c-22.75-25.592-15.96-73.993 30.468-127.675-34.822 2.902-98.659 7.254-110.267-7.255-11.606-14.508 30.47-59.485 23.214-82.699 40.624 20.313 53.682 47.88 84.15 40.624-2.901-21.763-2.901-30.468-24.664-59.484-21.762-29.018-62.386-158.144 36.272-190.063 98.658-31.919 105.913-5.803 153.79-5.803 47.878 0 95.757-36.272 142.183 21.762C542.953 150.786 518.29 278.462 453 356.81c1.451 14.508 60.937 63.838 36.272 105.912-8.706 11.607-62.387 11.607-75.445 14.51 13.058 33.37-2.902 75.443-34.82 59.484-31.919-15.96-72.543-68.19-85.602-69.64-6.525-.726-33.929 3.265-60.935 17.41-27.033 14.157-53.673 38.457-71.092 18.86"
      />
      <path
        className="hl"
        d="M217.962 366.964l-4.353-39.173s68.19-11.606 97.207-7.254c29.018 4.353 97.208 21.763 108.815 17.41 11.607-4.352 11.607 21.763-13.058 26.116-24.664 4.352-103.01-5.804-124.773-2.902-21.764 2.902-63.839 5.803-63.839 5.803"
      />
    </g>
  </svg>
);
