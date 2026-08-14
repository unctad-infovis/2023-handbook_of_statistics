import React, { useRef, /* useState, useEffect, useRef */memo } from 'react';
import PropTypes from 'prop-types';
import '../../styles/arrows.less';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import { useIsVisible } from 'react-is-visible';

// https://www.npmjs.com/package/scroll-into-view
import scrollIntoView from 'scroll-into-view';

function Arrows({ next }) {
  const isVisibleRef1 = useRef();
  const isVisible1 = useIsVisible(isVisibleRef1, { once: true });
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
    <button ref={isVisibleRef1} type="button" aria-label="continue" className={`arrows_container ${isVisible1 ? 'visible' : ''}`} onClick={() => anchorClick(`.content_wrapper_${next}`, 'Videos')}>
      <svg className="arrows">
        <path className="a1" d="M0 0 L30 32 L60 0" />
        <path className="a2" d="M0 20 L30 52 L60 20" />
        <path className="a3" d="M0 40 L30 72 L60 40" />
      </svg>
    </button>
  );
}

Arrows.propTypes = {
  next: PropTypes.string.isRequired,
};

export default memo(Arrows);
