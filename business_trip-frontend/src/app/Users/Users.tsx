import React from 'react';
import { match, useRouteMatch, withRouter } from 'react-router-dom';
import { saveCurrentPath } from '../../utils/history';

export function Users(props: any) {
  saveCurrentPath(props.location);
  const { path } = useRouteMatch() as match;

  return (
    <React.Fragment>
      <div></div>
    </React.Fragment>
  );
}

export default withRouter(Users);
