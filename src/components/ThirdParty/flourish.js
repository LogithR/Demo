import React from 'react';

const FlourishEmbed = () => {
  return (
    <div style={{padding:'120px'}}>
      <iframe
        src="https://flo.uri.sh/visualisation/18046907/embed"
        title="Interactive or visual content"
        className="flourish-embed-iframe"
        style={{ width: '100%', height: '600px' }}
        sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
      ></iframe>
      <div style={{ width: '100%', marginTop: '4px', textAlign: 'right' }}>
        <a
          className="flourish-credit"
          href="https://public.flourish.studio/visualisation/18046907/?utm_source=embed&utm_campaign=visualisation/18046907"
          target="_top"
          style={{ textDecoration: 'none' }}
        >
          <img
            alt="Made with Flourish"
            src="https://public.flourish.studio/resources/made_with_flourish.svg"
            style={{ width: '105px', height: '16px', border: 'none', margin: '0' }}
          />
        </a>
      </div>
    </div>
  );
};

export default FlourishEmbed;


