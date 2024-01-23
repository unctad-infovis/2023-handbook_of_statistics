import React, { /* useState, */ } from 'react';
import '../styles/styles.less';

// https://www.npmjs.com/package/typewriter-effect
import Typewriter from 'typewriter-effect';

// https://www.npmjs.com/package/react-is-visible
import 'intersection-observer';
import IsVisible from 'react-is-visible';
// https://www.npmjs.com/package/react-countup
import CountUp from 'react-countup';
import easingFn from './helpers/EasingFn.js';

// Load helpers.
import Arrows from './components/Arrows.jsx';
import People from './components/People.jsx';
import NumberAnimation from './components/NumberAnimation.jsx';

const analytics = window.gtag || undefined;

// const appID = '#app-root-2023-handbook_of_statistics';

function App() {
  const track = (label, name) => {
    if (typeof analytics !== 'undefined') {
      analytics('event', name, {
        event_category: '2023-hbs_report',
        event_label: label,
        transport_type: 'beacon'
      });
    }
  };
  return (
    <div className="app">
      {/** ******
        Page 1
      ******** */}
      <div className="content_wrapper content_wrapper_1">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <>
                {
                  isVisible && track('Scroll', 'card_1')
                }
                <div className="content visible">
                  <h2>
                    <br />
                    <br />
                    <br />
                    <Typewriter
                      options={{
                        // delay: 'natural' // or milliseconds
                        delay: 'natural' // or milliseconds
                      }}
                      onInit={(typewriter) => {
                        typewriter.typeString('What are the major trends in ')
                          .pauseFor(50)
                          .pasteString('<span class="highlight">trade </span>')
                          .typeString(' and ')
                          .pauseFor(50)
                          .pasteString('<span class="highlight">development</span>?')
                          .typeString('')
                          .pauseFor(1500)
                          .pasteString('<br /><br /><strong>UNCTAD’s<br /><span class="highlight">Handbook of Statistics 2023</span> has all the data.</strong>')
                          .start();
                      }}
                    />
                  </h2>
                  <p>
                    Browse the key messages or
                    {' '}
                    <a href="#anchor_download" onClick={() => track('Click', 'downloads_link')}>download the report</a>
                    .
                  </p>
                </div>
                <div className="infograph_container">
                  <img className="infograph" src={`${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2023-handbook_of_statistics/' : './'}assets/img/2023-handbook_of_statistics_infograph.svg`} alt="Infograph" />
                </div>
                <div className="unctad_logo_container">
                  <img src={`${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2023-handbook_of_statistics/' : './'}assets/img/unctad_logo.png`} alt="UNCTAD logo" />
                </div>
              </>
            )}
          </IsVisible>
        </div>
        <Arrows next="2" />
      </div>
      {/** ******
        Page 3
      ******** */}
      <div className="content_wrapper content_wrapper_3">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <>
                {
                  isVisible && track('Scroll', 'card_4')
                }
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <h3>
                    <span className="highlight">Goods exports</span>
                    {' '}
                    value declined in the first half of 2023 after an increase in 2022.
                  </h3>
                  <NumberAnimation labels={['2022', 'Jan-Jun 2023']} prefix="+" suffix="%" values={[11.4, -4.6]} />
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/total-merchandise-trade/" onClick={() => track('Click', 'card_3_link')} className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
                  <div className="source">
                    <em>Source</em>
                    {' '}
                    UNCTAD Secretariat
                  </div>
                </div>
              </>
            )}
          </IsVisible>
        </div>
        <Arrows next="4" />
      </div>
      {/** ******
        Page 4
      ******** */}
      <div className="content_wrapper content_wrapper_4">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <>
                {
                  isVisible && track('Scroll', 'card_4')
                }
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <h3>
                    <span className="highlight">Services exports</span>
                    {' '}
                    value rebounded in 2022 and UNCTAD nowcasts growth in 2023.
                  </h3>
                  <NumberAnimation labels={['2022', '2023']} prefix="+" suffix="%" values={[14.8, 7.0]} />
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/total-trade-in-services/" onClick={() => track('Click', 'card_4_link')} className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
                  <div className="source">
                    <em>Source</em>
                    {' '}
                    UNCTAD Secretariat
                  </div>
                </div>
              </>
            )}
          </IsVisible>
        </div>
        <Arrows next="5" />
      </div>
      {/** ******
        Page 5
      ******** */}
      <div className="content_wrapper content_wrapper_5">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <>
                {
                  isVisible && track('Scroll', 'card_5')
                }
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <h3>
                    <span className="highlight">Global goods trade deficit</span>
                    {' '}
                    increased for developed economies in 2022 reaching
                    {' '}
                  </h3>
                  <div className="numbers_container">
                    <div className="numbers_wrapper">
                      <span className="number_value">
                        {isVisible && (<CountUp easingFn={easingFn} start={0} delay={0.7} end={1.6} decimals={1} duration={4} separator="," useEasing prefix="" suffix=" trillion" />)}
                        .
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/total-merchandise-trade/" onClick={() => track('Click', 'card_5_link')} className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
                  <div className="source">
                    <em>Source</em>
                    {' '}
                    UNCTAD Secretariat
                  </div>
                </div>
              </>
            )}
          </IsVisible>
        </div>
        <Arrows next="6" />
      </div>
      {/** ******
        Page 6
      ******** */}
      <div className="content_wrapper content_wrapper_6">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <>
                {
                  isVisible && track('Scroll', 'card_6')
                }
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <div className="icon_container"><img src={`${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2023-handbook_of_statistics/' : './'}assets/img/2023-handbook_of_statistics_commodities.svg`} alt="Commodities icon" /></div>
                  <h3>
                    <span className="highlight">Commodity exports</span>
                    {' '}
                    value increased in 2022.
                  </h3>
                  <NumberAnimation labels={['Fuel', 'Food']} prefix="+" suffix="%" decimals={0} values={[62, 10]} />
                  <p>Fuel exports grew due to higher prices.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/merchandise-trade-by-product/" onClick={() => track('Click', 'card_6_link')} className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
                  <div className="source">
                    <em>Source</em>
                    {' '}
                    UNCTAD Secretariat
                  </div>
                </div>
              </>
            )}
          </IsVisible>
        </div>
        <Arrows next="7" />
      </div>
      {/** ******
        Page 7
      ******** */}
      <div className="content_wrapper content_wrapper_7">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <>
                {
                  isVisible && track('Scroll', 'card_7')
                }
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <h3>
                    UNCTAD nowcasts
                    {' '}
                    <span className="highlight">GDP growth</span>
                    {' '}
                    to slow in 2023.
                  </h3>
                  <NumberAnimation labels={['2022', '2023']} prefix="+" suffix="%" decimals={1} values={[3.1, 2.2]} />
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/gross-domestic-product/" onClick={() => track('Click', 'card_7_link')} className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
                  <div className="source">
                    <em>Source</em>
                    {' '}
                    UNCTAD Secretariat
                  </div>
                </div>
              </>
            )}
          </IsVisible>
        </div>
        <Arrows next="8" />
      </div>
      {/** ******
        Page 8
      ******** */}
      <div className="content_wrapper content_wrapper_8">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <>
                {
                  isVisible && track('Scroll', 'card_8')
                }
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <h3>
                    <span className="highlight">Reduction of economic inequality</span>
                    {' '}
                    stalls.
                  </h3>
                  <NumberAnimation labels={['GDP', 'Population']} prefix="" suffix="%" decimals={0} values={[63, 17]} />
                  <p>The richest economies in the world account for most of the GDP but about one sixth of the global population.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/gross-domestic-product/" onClick={() => track('Click', 'card_8_link')} className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
                  <div className="source">
                    <em>Source</em>
                    {' '}
                    UNCTAD Secretariat
                  </div>
                </div>
              </>
            )}
          </IsVisible>
        </div>
        <Arrows next="9" />
      </div>
      {/** ******
        Page 9
      ******** */}
      <div className="content_wrapper content_wrapper_9">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <>
                {
                  isVisible && track('Scroll', 'card_10')
                }
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <h3>
                    The world’s population surpassed
                    {' '}
                    <span className="highlight">8&nbsp;billion people</span>
                    {' '}
                    in 2022
                  </h3>
                  <People />
                  <p>
                    Five in six people live in a
                    {' '}
                    <span style={{ color: '#72bf44', fontWeight: '500' }}>developing economy</span>
                    .
                  </p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/total-and-urban-population/" onClick={() => track('Click', 'card_10_link')} className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
                  <div className="source">
                    <em>Source</em>
                    {' '}
                    UNCTAD Secretariat
                  </div>
                </div>
              </>
            )}
          </IsVisible>
        </div>
        <Arrows next="10" />
      </div>
      {/** ******
        Page 10
      ******** */}
      <div className="content_wrapper content_wrapper_10">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <>
                {
                  isVisible && track('Scroll', 'card_10')
                }
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <h3>
                    <span className="highlight">Old-age dependency</span>
                    {' '}
                    increases, causing total dependency ratios to increase
                  </h3>
                  <p>Total dependency ratios are increasing everywhere except in Africa, where it’s expected to continue to decline beyond 2050.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/age-structure/" onClick={() => track('Click', 'card_10_link')} className="readmore" target="_blank" rel="noreferrer">Dive into the data</a>
                  <div className="source">
                    <em>Source</em>
                    {' '}
                    UNCTAD Secretariat
                  </div>
                </div>
              </>
            )}
          </IsVisible>
        </div>
        <Arrows next="11" />
      </div>
      {/** ******
        Page 11
      ******** */}
      <div className="content_wrapper content_wrapper_11 content_wrapper_last">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <>
                {
                  isVisible && track('Scroll', 'card_11')
                }
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <div className="icon_container"><img src={`${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2023-handbook_of_statistics/' : './'}assets/img/2023-handbook_of_statistics_computer.svg`} alt="Commodities icon" /></div>
                  <h3>
                    <div>See the e-version of the Handbook.</div>
                    <div className="highlight">Interact with the data.</div>
                  </h3>
                  <a href="https://hbs.unctad.org/" onClick={() => track('Click', 'card_11_link')} className="readmore" target="_blank" rel="noreferrer">e-Handbook of Statistics 2023</a>
                  {/* <a href="https://www.youtube.com/watch?v=goQ_gEP3ihk" onClick={() => track('Click', 'video_link')} className="readmore" target="_blank" rel="noreferrer">Watch the video</a> */}
                </div>
              </>
            )}
          </IsVisible>
        </div>
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
