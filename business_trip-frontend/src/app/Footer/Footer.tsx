import React, { useEffect } from 'react';
import useApi from '../../hooks/useApi';
import './footer.scss';

export function Footer() {
  const { error, isLoading, message, api, handleFetchApi } = useApi();

  // const { handleFetchApi, error, isLoading, message, api } = useApi();

  useEffect(() => {
    async function loadApi() {
      if (!isLoading) {
        await handleFetchApi();
      }
    }
    loadApi();
  }, []);

  return (
    <React.Fragment>
      <div className="footer bg-dark">
        <div className="row">
          <div className="col">Projekt für die Bachelorarbeit</div>
          <div className="col center">
            {/* {status === IStates.FETCHING}
            {status === IStates.ERROR && <div>ERROR</div>}
            {status === IStates.SUCCESS && (
              <div>
                {res.framework} : {res.version}
              </div>
            )} */}
            {}
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
