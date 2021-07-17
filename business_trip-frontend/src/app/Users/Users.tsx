import React, { useEffect, useState } from 'react';
import { match, useRouteMatch, withRouter } from 'react-router-dom';
import useTrips from '../../hooks/useTrips';
import { saveCurrentPath } from '../../utils/history';

export function Users(props: any) {
  saveCurrentPath(props.location);
  const { path } = useRouteMatch() as match;

  const state = {
    user: User,
  };

  const [fTrips, setFtrips] = useState(null);

  const { trips, fetchedTrips, isLoading, handleFetchTrips, handlePostTrips } = useTrips();

  useEffect(() => {
    async function loadTrips() {
      if (!isLoading) {
        await handleFetchTrips();
      }
    }
    loadTrips();
  }, []);

  function onClickCommit() {
    handlePostTrips(this.state.user);
  }

  useEffect(() => {
    setFtrips(fetchedTrips);
  }, [fetchedTrips]);

  return (
    <React.Fragment>
      <form onSubmit={onClickCommit}>
        <div className="container-sm-4">
          <div className="row">
            <div className="col-sm-4">
              <label htmlFor="userNameInput" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="userNameInput"
                value={state.user.userName}
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <label htmlFor="firstNameInput" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstNameInput"
                value={this.state.user.firstName}
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <label htmlFor="lastNameInput" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastNameInput"
                value={this.state.user.lastName}
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <label htmlFor="emailInput" className="form-label">
                Email Adresse
              </label>
              <input
                type="email"
                className="form-control"
                id="emailInput"
                value={this.state.user.email}
              ></input>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            onClickCommit();
          }}
        >
          Send
        </button>
      </form>
    </React.Fragment>
  );
}

export default withRouter(Users);
