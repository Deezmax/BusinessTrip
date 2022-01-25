import React, { useEffect, useState } from 'react';
import { match, useRouteMatch, withRouter } from 'react-router-dom';
import User from '../../common/dto/Users';
import useUser from '../../hooks/useUser';
import { saveCurrentPath } from '../../utils/history';

export function TravelDestination(props: any) {
  saveCurrentPath(props.location);
  const { path } = useRouteMatch() as match;

  return (
    <React.Fragment>
        Urlaubsziele
    </React.Fragment>
  );
}

export default withRouter(TravelDestination);
