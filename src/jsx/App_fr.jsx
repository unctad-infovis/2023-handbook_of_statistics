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

// const appID = '#app-root-2022-handbook_of_statistics';

function App() {
  const track = (label, name) => {
    if (typeof analytics !== 'undefined') {
      analytics('event', name, {
        event_category: '2022-hbs_report_es',
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
                        typewriter.typeString('Quelles sont les grandes tendances en matière ')
                          .pauseFor(50)
                          .pasteString('<span class="highlight">de commerce</span>')
                          .typeString(' et ')
                          .pauseFor(50)
                          .pasteString('<span class="highlight">de développement</span> ?')
                          .typeString('')
                          .pauseFor(1500)
                          .pasteString('<br /><br /><strong><span class="highlight">Le Manuel de statistiques 2022</span> de la CNUCED dispose de toutes les données.</strong>')
                          .start();
                      }}
                    />
                  </h2>
                  <p>
                    Parcourez les messages clés ou
                    {' '}
                    <a href="https://unctad.org/webflyer/handbook-statistics-2022" onClick={() => track('Click', 'webflyer_link')}>téléchargez le rapport</a>
                    .
                  </p>
                </div>
                <div className="unctad_logo_container">
                  <img src="https://unctad.org/sites/default/files/2022-12/unctad_logo_fr.svg" alt="UNCTAD logo" />
                </div>
              </>
            )}
          </IsVisible>
        </div>
        <Arrows next="2" />
      </div>
      {/** ******
        Page 2
      ********
      <div className="content_wrapper content_wrapper_2">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <>
                {
                  isVisible && track('Scroll', 'card_2')
                }
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <h3>
                    <span className="highlight">
                      Global economic growth
                    </span>
                    {' '}
                    will slow in 2022
                  </h3>
                  <NumberAnimation labels={['2021', '2022']} prefix="+" suffix="&nbsp;%" values={[5.7, 3.3]} />
                  <p>UNCTAD nowcasts show both trade in goods and services will slow down. Growth in merchandise exports is expected to decline by half.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/gross-domestic-product/" onClick={() => track('Click', 'card_2_link')} className="readmore" target="_blank" rel="noreferrer">Plongez dans les données</a>
                  <div className="source"><em>Source :</em> World’s real GDP in 2022 is based on UNCTAD nowcasts</div>
                </div>
              </>
            )}
          </IsVisible>
        </div>
        <Arrows next="3" />
      </div> */}
      {/** ******
        Page 3
      ******** */}
      <div className="content_wrapper content_wrapper_3">
        <div className="content_container">
          <IsVisible once>
            {(isVisible) => (
              <>
                {
                  isVisible && track('Scroll', 'card_3')
                }
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <h3>
                    <span className="highlight">L&apos;excédent commercial des économies</span>
                    {' '}
                    en développement a augmenté
                  </h3>
                  <p>Cette hausse a été accompagnée d&apos;un accroissement du déficit commercial des économies développées. L&apos;Afrique enregistre la plus forte hausse du surplus.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/total-merchandise-trade/" onClick={() => track('Click', 'card_3_link')} className="readmore" target="_blank" rel="noreferrer">Plongez dans les données</a>
                  <div className="source">
                    <em>Source :</em>
                    {' '}
                    Secrétariat de la CNUCED
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
                    <span className="highlight">Le commerce des services</span>
                    {' '}
                    a augmenté, mais n&apos;a pas atteint les niveaux pré-pandémiques
                  </h3>
                  <NumberAnimation labels={['2020', '2021']} prefix="+" suffix="&nbsp;%" values={[-17.7, 17.2]} decimal="," />
                  <p>En 2022, les prévisions de la CNUCED indiquent une croissance de +14,6&nbsp;%.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/total-trade-in-services/" onClick={() => track('Click', 'card_4_link')} className="readmore" target="_blank" rel="noreferrer">Plongez dans les données</a>
                  <div className="source">
                    <em>Source :</em>
                    {' '}
                    Secrétariat de la CNUCED
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
                    <span className="highlight">Le commerce de marchandises </span>
                    {' '}
                    a connu un rebond après la crise de la
                    {' '}
                    <span className="nowrap">COVID-19</span>
                  </h3>
                  <NumberAnimation labels={['2020', '2021']} prefix="+" suffix="&nbsp;%" values={[-7.2, 26.5]} decimal="," />
                  <p>La croissance a été largement dopée par les carburants (+72%). En 2022, les prévisions de la CNUCED indiquent une croissance régulière de 13,8&nbsp;%.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/total-merchandise-trade/" onClick={() => track('Click', 'card_5_link')} className="readmore" target="_blank" rel="noreferrer">Plongez dans les données</a>
                  <div className="source">
                    <em>Source :</em>
                    {' '}
                    Secrétariat de la CNUCED
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
                  <div className="icon_container"><img src={`${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-handbook_of_statistics/' : './'}assets/img/2022-handbook_of_statistics_commodities.svg`} alt="Commodities icon" /></div>
                  <h3>
                    <span className="highlight">Les prix des produits</span>
                    {' '}
                    de base ont grimpé en flèche en 2021
                  </h3>
                  <div className="numbers_container"><div className="numbers_wrapper"><span className="number_value">{isVisible && (<CountUp easingFn={easingFn} start={0} delay={0.7} end={55} decimals={0} duration={4} separator="," useEasing prefix="+" suffix="&nbsp;%" />)}</span></div></div>
                  <p>Les combustibles ont contribué à hauteur de 22 points de pourcentage à cette croissance. La tendance à la hausse s&apos;est poursuivie cette année, les prix atteignant leur plus haut niveau depuis près de trois décennies.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/prices/" onClick={() => track('Click', 'card_6_link')} className="readmore" target="_blank" rel="noreferrer">Plongez dans les données</a>
                  <div className="source">
                    <em>Source :</em>
                    {' '}
                    Secrétariat de la CNUCED
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
                  <div className="icon_container"><img src={`${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-handbook_of_statistics/' : './'}assets/img/2022-handbook_of_statistics_plane.svg`} alt="Commodities icon" /></div>
                  <h3>
                    <span className="highlight">Les voyages internationaux</span>
                    {' '}
                    n&apos;ont pas retrouvé leur niveau d&apos;avant la pandémie
                  </h3>
                  <p>En 2021, les exportations de services de voyage représentaient encore moins de la moitié (42&nbsp;%) de leur valeur de 2019.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/trade-in-services-by-category/" onClick={() => track('Click', 'card_7_link')} className="readmore" target="_blank" rel="noreferrer">Plongez dans les données</a>
                  <div className="source">
                    <em>Source :</em>
                    {' '}
                    Secrétariat de la CNUCED
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
                    <span className="highlight">La diversification des exportations</span>
                    {' '}
                    reste un défi pour les pays en développement
                  </h3>
                  <p>L&apos;Asie occidentale et l&apos;Afrique du Nord avaient le panier d&apos;exportations le moins diversifié, suivies par l&apos;Océanie et l&apos;Afrique subsaharienne.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/trade-indicators/" onClick={() => track('Click', 'card_8_link')} className="readmore" target="_blank" rel="noreferrer">Plongez dans les données</a>
                  <div className="source">
                    <em>Source :</em>
                    {' '}
                    Secrétariat de la CNUCED
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
                  isVisible && track('Scroll', 'card_9')
                }
                <div className={`content ${isVisible ? 'visible' : ''}`}>
                  <h3>
                    <span className="highlight">La croissance économique</span>
                    {' '}
                    des pays les moins avancés a été lente en 2021
                  </h3>
                  <NumberAnimation labels={['PMA', 'Monde']} prefix="+" suffix="&nbsp;%" values={[2.0, 5.7]} decimal="," />
                  <p>La croissance du PIB des PMA est loin d&apos;atteindre l&apos;objectif de 7&nbsp;% inscrit dans le programme de développement durable des Nations Unies pour 2030.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/gross-domestic-product/" onClick={() => track('Click', 'card_9_link')} className="readmore" target="_blank" rel="noreferrer">Plongez dans les données</a>
                  <div className="source">
                    <em>Source :</em>
                    {' '}
                    Secrétariat de la CNUCED
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
                    La population mondiale a atteint
                    {' '}
                    <span className="highlight">8 milliards</span>
                    {' '}
                    d&apos;habitants en novembre 2022
                  </h3>
                  <People />
                  <p>Mais cette croissance est en baisse depuis la fin des années 1980. En 2021, elle a plongé à +0,87&nbsp;%, contre +1,05&nbsp;% en 2019.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/total-and-urban-population/" onClick={() => track('Click', 'card_10_link')} className="readmore" target="_blank" rel="noreferrer">Plongez dans les données</a>
                  <div className="source">
                    <em>Source :</em>
                    {' '}
                    Secrétariat de la CNUCED
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
                  <div className="icon_container"><img src={`${(window.location.href.includes('unctad.org')) ? 'https://storage.unctad.org/2022-handbook_of_statistics/' : './'}assets/img/2022-handbook_of_statistics_computer.svg`} alt="Commodities icon" /></div>
                  <h3>
                    <div>Voir la version électronique du manuel.</div>
                    <div className="highlight">Interagissez avec les données.</div>
                  </h3>
                  <a href="https://hbs.unctad.org/" onClick={() => track('Click', 'card_11_link')} className="readmore" target="_blank" rel="noreferrer">e-Handbook of Statistics 2022</a>
                  <a href="https://unctad.org/webflyer/handbook-statistics-2022" onClick={() => track('Click', 'webflyer_link')} className="readmore" target="_blank" rel="noreferrer">Téléchargez le rapport (pdf)</a>
                  <a href="https://youtu.be/sCbI-bVX3kY" onClick={() => track('Click', 'video_link')} className="readmore" target="_blank" rel="noreferrer">Regarder la vidéo</a>
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
