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
                        typewriter.typeString('¿Cuáles son las principales tendencias en el ')
                          .pauseFor(50)
                          .pasteString('<span class="highlight">comercio</span>')
                          .typeString(' y ')
                          .pauseFor(50)
                          .pasteString('<span class="highlight">desarrollo</span>?')
                          .typeString('')
                          .pauseFor(1500)
                          .pasteString('<br /><br /><strong><span class="highlight">El Manual de Estadística</span><br /> de la UNCTAD tiene toda la información.</strong>')
                          .start();
                      }}
                    />
                  </h2>
                  <p>
                    Explore los mensajes clave o
                    {' '}
                    <a href="https://unctad.org/webflyer/handbook-statistics-2022" onClick={() => track('Click', 'webflyer_link')}>descargue el informe</a>
                    .
                  </p>
                </div>
                <div className="unctad_logo_container">
                  <img src="https://unctad.org/sites/default/files/2022-12/unctad_logo_es.svg" alt="UNCTAD logo" />
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
                  <a href="https://hbs.unctad.org/gross-domestic-product/" onClick={() => track('Click', 'card_2_link')} className="readmore" target="_blank" rel="noreferrer">Sumérjase en la información</a>
                  <div className="source"><em>Fuente:</em> World’s real GDP in 2022 is based on UNCTAD nowcasts</div>
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
                    <span className="highlight">El superávit del comercio</span>
                    {' '}
                    de las economías en desarrollo aumentó
                  </h3>
                  <p>El aumento se reflejó en un déficit comercial cada vez mayor para las economías desarrolladas. El superávit aumentó más en África.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/total-merchandise-trade/" onClick={() => track('Click', 'card_3_link')} className="readmore" target="_blank" rel="noreferrer">Sumérjase en la información</a>
                  <div className="source">
                    <em>Fuente:</em>
                    {' '}
                    Secretaría de la UNCTAD
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
                    <span className="highlight">El comercio de servicios</span>
                    {' '}
                    aumentó pero no alcanzó los niveles previos a la pandemia
                  </h3>
                  <NumberAnimation labels={['2020', '2021']} prefix="+" suffix="&nbsp;%" values={[-17.7, 17.2]} decimal="," />
                  <p>En 2022, las previsiones inmediatas de la UNCTAD muestran un crecimiento continuo del +14,6&nbsp;%</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/total-trade-in-services/" onClick={() => track('Click', 'card_4_link')} className="readmore" target="_blank" rel="noreferrer">Sumérjase en la información</a>
                  <div className="source">
                    <em>Fuente:</em>
                    {' '}
                    Secretaría de la UNCTAD
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
                    <span className="highlight">El comercio de mercancías</span>
                    {' '}
                    se recuperó del
                    {' '}
                    <span className="nowrap">COVID-19</span>
                  </h3>
                  <NumberAnimation labels={['2020', '2021']} prefix="+" suffix="&nbsp;%" values={[-7.2, 26.5]} decimal="," />
                  <p>El crecimiento fue impulsado en gran medida por los combustibles (+72%). En 2022, las previsiones de la UNCTAD muestran un crecimiento continuo del 13,8&nbsp;%.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/total-merchandise-trade/" onClick={() => track('Click', 'card_5_link')} className="readmore" target="_blank" rel="noreferrer">Sumérjase en la información</a>
                  <div className="source">
                    <em>Fuente:</em>
                    {' '}
                    Secretaría de la UNCTAD
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
                    <span className="highlight">Los precios de las materias primas</span>
                    {' '}
                    se dispararon en 2021
                  </h3>
                  <div className="numbers_container"><div className="numbers_wrapper"><span className="number_value">{isVisible && (<CountUp easingFn={easingFn} start={0} delay={0.7} end={55} decimals={0} duration={4} separator="," useEasing prefix="+" suffix="&nbsp;%" />)}</span></div></div>
                  <p>Los combustibles registraron 22 puntos porcentuales del crecimiento. La tendencia ascendente de los precios continuó este año, alcanzando sus niveles más altos en casi tres décadas.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/prices/" onClick={() => track('Click', 'card_6_link')} className="readmore" target="_blank" rel="noreferrer">Sumérjase en la información</a>
                  <div className="source">
                    <em>Fuente:</em>
                    {' '}
                    Secretaría de la UNCTAD
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
                    <span className="highlight">Los viajes internacionales</span>
                    {' '}
                    no se han recuperado a los niveles previos a la pandemia
                  </h3>
                  <p>En 2021, las exportaciones de viajes aún representaban menos de la mitad (42&nbsp;%) de su valor en 2019.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/trade-in-services-by-category/" onClick={() => track('Click', 'card_7_link')} className="readmore" target="_blank" rel="noreferrer">Sumérjase en la información</a>
                  <div className="source">
                    <em>Fuente:</em>
                    {' '}
                    Secretaría de la UNCTAD
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
                    <span className="highlight">La diversificación de las exportaciones</span>
                    {' '}
                    sigue siendo un desafío para los países en desarrollo
                  </h3>
                  <p>Asia Occidental y África del Norte tenían la canasta de exportaciones menos diversificada, seguidas por Oceanía y África Subsahariana.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/trade-indicators/" onClick={() => track('Click', 'card_8_link')} className="readmore" target="_blank" rel="noreferrer">Sumérjase en la información</a>
                  <div className="source">
                    <em>Fuente:</em>
                    {' '}
                    Secretaría de la UNCTAD
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
                    <span className="highlight">El crecimiento económico</span>
                    {' '}
                    de los países menos adelantados en 2021 fue lento
                  </h3>
                  <NumberAnimation labels={['PMA', 'Global']} prefix="+" suffix="&nbsp;%" values={[2.0, 5.7]} decimal="," />
                  <p>El crecimiento del PIB en los PMA estuvo muy por debajo del objetivo del 7 % consagrado en la Agenda 2030 para el Desarrollo Sostenible de las Naciones Unidas. </p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/gross-domestic-product/" onClick={() => track('Click', 'card_9_link')} className="readmore" target="_blank" rel="noreferrer">Sumérjase en la información</a>
                  <div className="source">
                    <em>Fuente:</em>
                    {' '}
                    Secretaría de la UNCTAD
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
                    La población mundial alcanzó los
                    {' '}
                    <span className="highlight">8 mil millones</span>
                    {' '}
                    de personas en noviembre de 2022
                  </h3>
                  <People />
                  <p>Pero el crecimiento ha ido disminuyendo desde finales de la década de 1980. En 2021, cayó a +0,87%, por debajo del +1,05% en 2019.</p>
                </div>
                <div className="bottom">
                  <a href="https://hbs.unctad.org/total-and-urban-population/" onClick={() => track('Click', 'card_10_link')} className="readmore" target="_blank" rel="noreferrer">Sumérjase en la información</a>
                  <div className="source">
                    <em>Fuente:</em>
                    {' '}
                    Secretaría de la UNCTAD
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
                    <div>Consulte la versión electrónica del Manual.</div>
                    <div className="highlight">Interactuar con los datos.</div>
                  </h3>
                  <a href="https://hbs.unctad.org/" onClick={() => track('Click', 'card_11_link')} className="readmore" target="_blank" rel="noreferrer">Manual electrónico de estadísticas 2022</a>
                  <a href="https://unctad.org/webflyer/handbook-statistics-2022" onClick={() => track('Click', 'webflyer_link')} className="readmore" target="_blank" rel="noreferrer">Descargar el informe (pdf)</a>
                  <a href="https://youtu.be/fp9p8TOiLFI" onClick={() => track('Click', 'video_link')} className="readmore" target="_blank" rel="noreferrer">Ver el vídeo</a>
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
