import React, { useEffect, useState } from 'react';
import { match, useRouteMatch, withRouter } from 'react-router-dom';
import useTrips from '../../hooks/useTrips';
import { saveCurrentPath } from '../../utils/history';

export function Users(props: any) {
  saveCurrentPath(props.location);
  const { path } = useRouteMatch() as match;

  const [fTrips, setFtrips] = useState(null);

  const { trips, fetchedTrips, isLoading, handleFetchTrips, handlePostTrips } =
    useTrips();

  useEffect(() => {
    async function loadTrips() {
      if (!isLoading) {
        await handleFetchTrips();
      }
    }
    loadTrips();
  }, []);

  function onClickCommit() {
    handlePostTrips();
  }

  return (
    <React.Fragment>
      <div>
        Backend says: {isLoading ? <div>...</div> : <div>{trips.test}</div>}
      </div>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          onClickCommit();
        }}
      >
        Commit
      </button>
      <div>Backend hat zurückgeliefert: {fTrips?.data}</div>
      <div>{}</div>
    </React.Fragment>
  );
}

export default withRouter(Users);
