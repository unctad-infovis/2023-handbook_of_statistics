import React, { /* useState, useEffect, useRef */memo } from 'react';
import PropTypes from 'prop-types';
import '../../styles/arrows.less';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';

// https://www.npmjs.com/package/scroll-into-view
import scrollIntoView from 'scroll-into-view';

function Arrows({ next }) {
  const anchorClick = (target) => {
    // track(name);
    scrollIntoView(document.querySelector(target), {
      align: {
        left: 0,
        leftOffset: 0,
        lockX: true,
        lockY: false,
        top: 0,
        topOffset: 0
      },
      cancellable: false,
      time: 0
    });
  };

  return (
    <IsVisible once>
      {(isVisible) => (
        <button type="button" className={`arrows_container ${isVisible ? 'visible' : ''}`} onClick={() => anchorClick(`.content_wrapper_${next}`, 'Videos')}>
          <svg className="arrows">
            <path className="a1" d="M0 0 L30 32 L60 0" />
            <path className="a2" d="M0 20 L30 52 L60 20" />
            <path className="a3" d="M0 40 L30 72 L60 40" />
          </svg>
        </button>
      )}
    </IsVisible>
  );
}

Arrows.propTypes = {
  next: PropTypes.string.isRequired,
};

Arrows.defaultProps = {
};

export default memo(Arrows);
