import React, { useEffect } from 'react';
import { match, useRouteMatch, withRouter } from 'react-router-dom';
import { useApiRequest } from '../../service/BaseRest';
import { saveCurrentPath } from '../../utils/history';

export function Users(props: any) {
  saveCurrentPath(props.location);
  const { path } = useRouteMatch() as match;

  const [{ status, res }, makeRequest] = useApiRequest('/sample/get', {});

  useEffect(() => {
    makeRequest();
  }, []);

  return (
    <React.Fragment>
      <div>Backend says: {res?.test}</div>
    </React.Fragment>
  );
}

export default withRouter(Users);
