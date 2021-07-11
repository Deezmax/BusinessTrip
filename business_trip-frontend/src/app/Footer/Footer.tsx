import React, { useEffect } from 'react';
import { useApiRequest } from '../../service/BaseRest';
import './footer.scss';

export function Footer() {
  const [{ status, res }, makeRequest] = useApiRequest('api', { verb: 'get' });

  useEffect(() => {
    makeRequest();
  }, []);

  return (
    <React.Fragment>
      <div className="footer">
        <div className="row">
          <div className="col">Projekt für die Bachelorarbeit</div>
          <div className="col">
            {res?.framework}: v{res?.version}
          </div>
          <div className="col left">
            &copy; Maximilian Schreiter {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
