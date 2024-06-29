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
      
    </div>
  );
};

export default FlourishEmbed;


