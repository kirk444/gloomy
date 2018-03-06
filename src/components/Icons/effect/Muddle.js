import React from 'react';
import classNames from 'classnames';

export default ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 800"
    className={classNames('svg svg-effect svg-effect-muddle', className)}
    {...props}
  >
    <g transform="matrix(1.33333 0 0 -1.33333 0 800)">
      <path
        d="M300 15.652a14.585 14.585 0 0 0-10.381 4.3L19.952 289.618c-5.724 5.724-5.724 15.04 0 20.763l269.667 269.667a14.588 14.588 0 0 0 10.381 4.3 14.59 14.59 0 0 0 10.382-4.3l269.666-269.667c5.723-5.724 5.723-15.039 0-20.763L310.382 19.952a14.588 14.588 0 0 0-10.382-4.3"
        fill="#694e3b"
      />
      <path
        d="M300 589.347a19.616 19.616 0 0 1-13.917-5.765L16.417 313.916c-7.687-7.686-7.687-20.147 0-27.834L286.083 16.416A19.624 19.624 0 0 1 300 10.652a19.625 19.625 0 0 1 13.917 5.764l269.666 269.666c7.687 7.687 7.687 20.148 0 27.834L313.917 583.583A19.618 19.618 0 0 1 300 589.346m0-10a9.62 9.62 0 0 0 6.846-2.835l269.667-269.666a9.62 9.62 0 0 0 2.835-6.847 9.616 9.616 0 0 0-2.836-6.845L306.846 23.488A9.616 9.616 0 0 0 300 20.652a9.618 9.618 0 0 0-6.846 2.836L23.488 293.154A9.616 9.616 0 0 0 20.652 300a9.616 9.616 0 0 0 2.836 6.846l269.666 269.667a9.621 9.621 0 0 0 6.846 2.835"
        fill="#fff"
      />
      <path
        d="M264.946 153.556l-2.483 23.845c-.08.782 5.073 3.75 15.468 8.92 10.391 5.165 16.435 7.837 18.132 8.013 1.693.176 4.398-1.782 8.12-5.871 3.717-4.095 5.823-8.482 6.312-13.173l2.972-28.536c.082-.781-4.885-3.73-14.883-8.86-10.006-5.121-16.178-7.81-18.524-8.053-2.345-.244-5.259 1.762-8.725 6.006-3.475 4.25-5.602 10.153-6.389 17.709m19.184 271.088l3.338-32.054c.624-5.997.014-10.272-1.824-12.834-1.845-2.563-4.378-4.804-7.598-6.72l-38.619-23.778-6.042 4.902c6.222 8.552 8.872 17.255 7.95 26.117l-4.642 44.563c-.163 1.564 12.915 9.378 39.245 23.449 26.324 14.066 41.897 21.355 46.722 21.857 4.82.502 12.001-4.615 21.553-15.34 9.545-10.73 14.645-19.218 15.296-25.473l7.043-67.625c.707-6.78-4.665-16.557-16.109-29.338-11.448-12.788-23-23.87-34.669-33.246l-17.5-14.072 1.14-10.945c.841-8.08 2.867-14.26 6.077-18.531 3.212-4.278 6.274-6.527 9.2-6.748l3.99-.374.896-8.6c-23.735-17.486-36.514-26.326-38.334-26.516-1.826-.19-6.23 2.248-13.209 7.318-6.986 5.065-10.758 10.338-11.327 15.81l-5.496 52.774c-.299 2.864 7.548 10.33 23.548 22.406 15.993 12.069 27.558 21.837 34.684 29.296 7.127 7.46 10.445 13.535 9.957 18.225l-4.723 45.345c-1.194 11.464-3.14 19.36-5.827 23.694-2.69 4.326-6.576 6.23-11.657 5.7-5.082-.528-9.44-3.62-13.063-9.262"
        fill="#fff"
      />
    </g>
  </svg>
);
