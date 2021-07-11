import React, { useEffect } from 'react';
import { useApiRequest } from '../../service/BaseRest';
import { IStates } from '../../utils/actiontypes/actionTypes';
import { IRequestMethods } from '../../utils/secruity/baseRest';
import './footer.scss';

export function Footer() {
  const [{ status, res }, makeRequest] = useApiRequest('', {
    verb: IRequestMethods.GET,
  });

  useEffect(() => {
    makeRequest();
  }, []);

  return (
    <React.Fragment>
      <div className="footer bg-dark">
        <div className="row">
          <div className="col">Projekt für die Bachelorarbeit</div>
          <div className="col center">
            {status === IStates.FETCHING}
            {status === IStates.ERROR && <div>ERROR</div>}
            {status === IStates.SUCCESS && (
              <div>
                {res.framework} : {res.version}
              </div>
            )}
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
