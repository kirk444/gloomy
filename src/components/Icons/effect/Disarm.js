import React from 'react';
import classNames from 'classnames';

export default ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 800"
    className={classNames('svg svg-effect svg-effect-disarm', className)}
    {...props}
  >
    <g transform="matrix(1.33333 0 0 -1.33333 0 800)">
      <path
        d="M300 15.652a14.588 14.588 0 0 0-10.382 4.3L19.952 289.618a14.59 14.59 0 0 0-4.3 10.382 14.59 14.59 0 0 0 4.3 10.381l269.666 269.667a14.592 14.592 0 0 0 10.382 4.3c3.922 0 7.608-1.528 10.382-4.3l269.666-269.667a14.59 14.59 0 0 0 4.3-10.38 14.59 14.59 0 0 0-4.3-10.383L310.382 19.952a14.588 14.588 0 0 0-10.382-4.3"
        fill="#62747a"
      />
      <path
        d="M300 589.348a19.621 19.621 0 0 1-13.917-5.764L16.417 313.917c-7.687-7.686-7.687-20.147 0-27.834L286.083 16.417A19.625 19.625 0 0 1 300 10.653a19.625 19.625 0 0 1 13.917 5.764l269.666 269.666c7.687 7.687 7.687 20.148 0 27.834L313.917 583.584A19.621 19.621 0 0 1 300 589.348m0-10a9.621 9.621 0 0 0 6.846-2.835l269.667-269.667c3.774-3.775 3.774-9.917 0-13.691L306.846 23.488A9.621 9.621 0 0 0 300 20.653a9.618 9.618 0 0 0-6.846 2.836L23.487 293.155c-3.774 3.774-3.774 9.916 0 13.69l269.667 269.668a9.621 9.621 0 0 0 6.846 2.835"
        fill="#fff"
      />
    </g>
    <g transform="matrix(1.33333 0 0 -1.33333 0 800)">
      <path
        d="M470.778 154.568s-27.653 34.08-28.102 36.065c-.447 1.987 3.322 23.517 3.05 39.527-.27 16.01-11.265 44.43-9.739 50.617 1.526 6.188 13.731 60.188 13.335 63.334-.397 3.146-12.624 11.554-25.465 4.17-12.84-7.383-17.067-32.13-19.477-38.1-2.41-5.97-4.513-12.487-11.62-16.54-11.132-6.352-15.945 2.35-24.2 11.654-4.014 4.523-29.133 66.554-34.184 75.537-5.053 8.983-11.087 32.64-28.886 25.408-18.84-7.654 5.282-53.87 7.62-59.604 2.336-5.735 14.245-35.399 15.308-39.647 1.062-4.248-1.478-6.153-4.399-7.543-2.922-1.39-4.01-4.685-13.93 7.374-9.92 12.06-33.678 38.831-37.169 42.74-3.49 3.908-23.364 26.048-29.718 27.85-6.355 1.802-22.892-6.312-18.379-19.382 4.514-13.07 29.06-32.89 40.09-46.16 11.027-13.272 35.657-34.035 32.207-41.47-3.197-6.893-18.797 4.814-33.312 13.344-14.513 8.531-44.183 29.228-48.27 29.767-4.087.54-16.555-2.482-16.238-15.455.318-12.972 27.551-26.536 34.854-31.15 7.302-4.614 45.083-27.384 42.276-35.716-1.75-5.195-21.979 2.14-33.92 6.96-11.94 4.82-40.934 15.527-44.974 6.627-5.648-12.439-2.736-23.233 29.544-34.945 32.28-11.713 38.744-16.427 45.495-21.374 6.751-4.948 27.178-32.689 52.373-42.639 15.81-6.244 34.422-12.959 45.403-11.212 9.374-3.769 29.104-35.2 29.104-35.2s22.841 5.941 40.275 19.848c17.435 13.905 31.048 35.315 31.048 35.315"
        fill="#fff"
      />
    </g>
    <g transform="matrix(1.33333 0 0 -1.33333 0 800)">
      <path
        d="M410.08 429.762l-27.074-68.728c-1.584-4.022-3.811-3.433-3.198.847l10.469 73.122c.42 2.93 1.987 5.594 3.114 5.296l16.604-4.394c1.127-.299 1.169-3.39.085-6.143m-160.063 18.236l14.682-36.225c.859-2.12-.512-2.938-1.97-1.175l-24.907 30.124c-.998 1.206-1.306 2.848-.612 3.262l10.226 6.102c.694.414 1.993-.637 2.58-2.088m-87.898-66.433l36.477-34.289c2.134-2.007 1.187-3.292-1.36-1.846l-43.545 24.704c-1.744.99-3.025 2.652-2.546 3.302l7.067 9.585c.48.65 2.445-.082 3.907-1.456M136.49 279.627l33.014-13.757c1.931-.806 1.633-1.829-.429-1.472l-35.239 6.118c-1.41.245-2.689 1.018-2.537 1.537l2.224 7.639c.151.519 1.644.486 2.966-.065m47.206-92.191l37.143 6.404c2.173.375 2.637-1.034.667-2.024l-33.68-16.919c-1.35-.678-2.955-.64-3.19.072l-3.462 10.515c-.235.713 1.034 1.696 2.522 1.952m150.675 275.63l-9.43-31.857c-.55-1.865-1.954-1.684-2.014.26l-1.03 33.207c-.042 1.33.635 2.585 1.345 2.494l10.46-1.351c.71-.091 1.046-1.477.668-2.753"
        fill="#fff"
      />
    </g>
  </svg>
);
