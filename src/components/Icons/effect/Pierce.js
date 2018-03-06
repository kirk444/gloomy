import React from 'react';
import classNames from 'classnames';

export default ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 800"
    className={classNames('svg svg-effect svg-effect-pierce', className)}
    {...props}
  >
    <g transform="matrix(1.33333 0 0 -1.33333 0 800)">
      <path
        d="M300 15.652a14.588 14.588 0 0 0-10.382 4.3L19.952 289.618c-5.723 5.724-5.723 15.04 0 20.763l269.666 269.667a14.59 14.59 0 0 0 10.382 4.3 14.59 14.59 0 0 0 10.382-4.3l269.666-269.667c5.723-5.724 5.723-15.039 0-20.763L310.382 19.952a14.588 14.588 0 0 0-10.382-4.3"
        fill="#c6833f"
      />
      <path
        d="M300 589.347a19.616 19.616 0 0 1-13.917-5.765L16.417 313.916c-7.687-7.686-7.687-20.147 0-27.834L286.083 16.416A19.624 19.624 0 0 1 300 10.652a19.625 19.625 0 0 1 13.917 5.764l269.666 269.666c7.687 7.687 7.687 20.148 0 27.834L313.917 583.583A19.618 19.618 0 0 1 300 589.346m0-10a9.621 9.621 0 0 0 6.846-2.835l269.667-269.666a9.62 9.62 0 0 0 2.835-6.847 9.616 9.616 0 0 0-2.836-6.845L306.846 23.488A9.618 9.618 0 0 0 300 20.652a9.616 9.616 0 0 0-6.846 2.836L23.487 293.154c-3.774 3.774-3.774 9.917 0 13.691l269.667 269.667a9.62 9.62 0 0 0 6.846 2.835"
        fill="#fff"
      />
      <path
        d="M446.575 330l-18.052-18.182H81.221L74.001 300l7.22-11.818h347.302L446.575 270 526 300zm-89.614 1.524l30.093 23.392h-26.632l26.632 46.162-42.61-32.847V486.3l-36.398-94.987-23.08 45.275v-48.38l-25.634 9.32 23.94-40.728c.874-1.488 2.816-1.963 4.261-1.022 5.714 3.725 20.408 11.101 38.452 3.368 13.682-5.863 22.9-20.293 26.454-26.704a3.035 3.035 0 0 1 4.522-.917m0-65.249l30.093-23.392h-26.632l26.632-46.162-42.61 32.846V111.5l-36.398 94.987-23.08-45.274v48.381l-25.634-9.32L283.272 241c.874 1.487 2.816 1.963 4.261 1.021 5.714-3.724 20.408-11.1 38.452-3.367 13.682 5.863 22.9 20.293 26.454 26.704a3.035 3.035 0 0 0 4.522.917"
        fill="#fff"
      />
    </g>
  </svg>
);
