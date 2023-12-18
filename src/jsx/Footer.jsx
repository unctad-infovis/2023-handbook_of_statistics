import React, { /* useState,  useEffect, useRef */ } from 'react';
import '../styles/styles.less';

function Footer() {
  return (
    <div className="app" id="app_footer">
      <div className="footer_container">
        <h2>What do you want to do next?</h2>
        <div className="footer_elements">
          <div className="footer_element footer_element_1">
            <div className="footer_content anchor_videos" id="anchor_videos">
              <h3>Watch the videos</h3>
              <div className="iframe_container youtube_iframe">
                <iframe src="https://www.youtube.com/embed/NUJ9dHIHB80" title="Trade And Development Report" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
