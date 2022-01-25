import React, { useEffect, useState } from 'react';
import { match, useRouteMatch, withRouter } from 'react-router-dom';
import { saveCurrentPath } from '../../utils/history';

export function BusinessTrips(props: any) {
  saveCurrentPath(props.location);
  const { path } = useRouteMatch() as match;

  return (
    <React.Fragment>
        Geschäftsreisen
    </React.Fragment>
  );
}

export default withRouter(BusinessTrips);
