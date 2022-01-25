import React, { useEffect } from 'react';
import useApi from '../../hooks/useApi';
import './footer.scss';

export function Footer() {
  const { api, isLoading, handleFetchApi } = useApi();

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
            {isLoading ? (
              <div>...</div>
            ) : (
              <div>
                {api.framework}:{api.version}
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
