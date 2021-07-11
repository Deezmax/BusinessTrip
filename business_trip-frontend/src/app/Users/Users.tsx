import React, { useEffect } from 'react';
import { match, useRouteMatch, withRouter } from 'react-router-dom';
import { useApiRequest } from '../../service/BaseRest';
import { saveCurrentPath } from '../../utils/history';
import { IRequestMethods } from '../../utils/secruity/baseSecruityHttp';

export function Users(props: any) {
  saveCurrentPath(props.location);
  const { path } = useRouteMatch() as match;

  // TODO auslagern als interface/Type?
  const [{ status, res }, makeRequest] = useApiRequest('/sample', {});
  const [{ status2, res2 }, makeRequest2] = useApiRequest('/sample', {
    method: IRequestMethods.POST,
  });

  useEffect(() => {
    makeRequest();
  }, []);

  useEffect(() => {
    makeRequest2(data);
  }, []);

  const sendRequest = (data: any) => {
    makeRequest2(data);
  };

  const data = {
    data: 'daten vom frontend',
  };

  return (
    <React.Fragment>
      <div>Backend says: {res?.test}</div>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => sendRequest(data)}
      >
        Commit
      </button>
      <div>Backend hat zurückgeliefert: {res2?.data}</div>
    </React.Fragment>
  );
}

export default withRouter(Users);
