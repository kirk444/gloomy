import React from 'react';
import classNames from 'classnames';

export default ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 400 400"
    className={classNames('svg svg-symbol svg-symbol-Persistent', className)}
    {...props}
  >
    <g transform="matrix(1.33333 0 0 -1.33333 0 400)">
      <path
        className="bg"
        d="M114.729 170.8c-6.286-6.971-15.215-11-24.823-11-18.472 0-33.5 15.028-33.5 33.5 0 18.473 15.028 33.5 33.5 33.5 9.604 0 18.536-4.028 24.828-11h48.359v26.658c0 5.524-4.477 10-10 10H26.723c-5.521 0-10-4.476-10-10V57.541c0-5.522 4.479-10 10-10h126.37c5.523 0 10 4.478 10 10V170.8z"
        fill="#231f20"
      />
      <path
        d="M229.306 162.14v18.66h-119.51c-4.395-7-12.389-11.51-21.384-10.953-11.711.725-21.243 10.26-21.96 21.973-.837 13.65 9.995 24.98 23.454 24.98 8.39 0 15.74-4.39 19.9-11h119.5v18.67l53.97-31.17z"
        fill="#e34e61"
      />
      <path
        className="hl"
        d="M118.66 78.638c-13.895-1.684-22.83 7.298-22.83 7.298s4.304 6.597 7.72 11.884c8.748-8.983 23.671-5.428 26.993 6.127 3.32 11.556-4.726 20.35-15.157 20.865-9.113.45-16.861-14.11-19.804-19.063-11.603-20.585-20.53-25.808-31.757-26.135-11.229-.33-29.147 9.589-29.66 28.63-.515 19.04 13.099 29.987 26.993 31.67 13.894 1.685 22.83-7.297 22.83-7.297s-4.306-6.596-7.72-11.882c-8.75 8.982-23.671 5.425-26.993-6.13-3.321-11.554 4.726-20.35 15.157-20.864 9.106-.448 16.851 14.09 19.798 19.054 11.603 20.583 20.536 25.818 31.764 26.146 11.228.327 29.145-9.592 29.659-28.631.515-19.04-13.098-29.987-26.993-31.672"
        fill="#fff"
      />
    </g>
  </svg>
);
