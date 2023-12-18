import React, { /* useState, useEffect, useRef */memo } from 'react';
import PropTypes from 'prop-types';

// https://www.npmjs.com/package/react-countup
import CountUp from 'react-countup';
// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';

import easingFn from '../helpers/EasingFn.js';

function NumberAnimation({
  decimal, decimals, labels, prefix, suffix, values
}) {
  const divider = (Math.abs(values[1]) < Math.abs(values[0]) ? Math.abs(values[0]) : Math.abs(values[1]));
  return (
    <div className="numbers_container">
      <div className="numbers_wrapper">
        <div className="number_value" style={{ fontSize: `${Math.max((Math.abs(values[0]) / divider) * 100, 70)}%` }}>
          <IsVisible once>
            {(isVisible) => (
              <div className={(values[0] < 0) ? 'negative' : ''}>
                {isVisible && (<CountUp easingFn={easingFn} start={0} delay={0.7} end={values[0]} decimals={decimals} duration={4} separator="," decimal={decimal} useEasing prefix={(values[0] > 0) ? prefix : ''} suffix={suffix} />)}
              </div>
            )}
          </IsVisible>
        </div>
        <div className="number_label">{labels[0]}</div>
      </div>
      <div className="numbers_wrapper">
        <div className="number_value" style={{ fontSize: `${(Math.max(Math.abs(values[1]) / divider) * 100, 70)}%` }}>
          <IsVisible once>
            {(isVisible) => (
              <div className={(values[1] < 0) ? 'negative' : ''}>
                {isVisible && (<CountUp easingFn={easingFn} start={0} delay={0.7} end={values[1]} decimals={decimals} duration={4} separator="," decimal={decimal} useEasing prefix={(values[1] > 0) ? prefix : ''} suffix={suffix} />)}
              </div>
            )}
          </IsVisible>
        </div>
        <div className="number_label">{labels[1]}</div>
      </div>
    </div>
  );
}

NumberAnimation.propTypes = {
  decimal: PropTypes.string,
  decimals: PropTypes.number,
  labels: PropTypes.instanceOf(Array).isRequired,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  values: PropTypes.instanceOf(Array).isRequired
};

NumberAnimation.defaultProps = {
  decimal: '.',
  decimals: 1,
  prefix: '',
  suffix: ''
};

export default memo(NumberAnimation);
