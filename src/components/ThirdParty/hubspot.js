import React, { useEffect } from 'react';

const HubSpotForm = () => {
  useEffect(() => {
    
    const existingScript = document.querySelector(`script[src="//js.hsforms.net/forms/embed/v2.js"]`);

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = '//js.hsforms.net/forms/embed/v2.js';
      script.type = 'text/javascript';
      script.charset = 'utf-8';
      script.async = true;

      script.onload = () => {
        if (window.hbspt) {
          window.hbspt.forms.create({
            region: 'na1',
            portalId: '45576266',
            formId: 'fc043ea2-588d-4dfd-bf3c-238d325811e5',
            target: '#hubspotForm'
          });
        }
      };

      document.body.appendChild(script);
    } else {
      // Script already exists, just create the form
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: 'na1',
          portalId: '45576266',
          formId: 'fc043ea2-588d-4dfd-bf3c-238d325811e5',
          target: '#hubspotForm'
        });
      }
    }

    // Cleanup function
    return () => {
      const formContainer = document.querySelector('#hubspotForm');
      if (formContainer) {
        formContainer.innerHTML = '';
      }
    };
  }, []);

  return (
    <div id="hubspotForm">
    </div>
  );
};

export default HubSpotForm;

