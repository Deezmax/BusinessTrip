import React, { useEffect } from 'react';
import { match, useRouteMatch, withRouter } from 'react-router-dom';
import { saveCurrentPath } from '../../utils/history';
import { retrieve, useAsyncHook } from '../../service/BaseRest';

export function Users(props: any) {
  saveCurrentPath(props.location);
  const { path } = useRouteMatch() as match;
  const [data, loading] = useAsyncHook();

  // let data: any = null;

  // useEffect(() => {
  //   data = await retrieve();
  // });

  return (
    <React.Fragment>
      <div>test 123</div>
      <div>{loading ? <h1>Lade</h1> : <h1>{data}</h1>}</div>
    </React.Fragment>
  );
}

export default withRouter(Users);
