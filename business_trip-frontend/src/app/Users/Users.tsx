import React, { useEffect } from 'react';
import { match, useRouteMatch, withRouter } from 'react-router-dom';
import { saveCurrentPath } from '../../utils/history';

export function Users(props: any) {
  saveCurrentPath(props.location);
  const { path } = useRouteMatch() as match;

  return (
    <React.Fragment>
      <div>Backend says: {}</div>
      <button type="button" className="btn btn-danger" onClick={() => {}}>
        Commit
      </button>
      <div>Backend hat zurückgeliefert: {}</div>
      <div>{}</div>
    </React.Fragment>
  );
}

export default withRouter(Users);
