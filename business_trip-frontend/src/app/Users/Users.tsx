import React, { useEffect, useState } from 'react';
import { match, useRouteMatch, withRouter } from 'react-router-dom';
import User from '../../common/dto/Users';
import useUser from '../../hooks/useUser';
import { saveCurrentPath } from '../../utils/history';

export function Users(props: any) {
  saveCurrentPath(props.location);
  const { path } = useRouteMatch() as match;

  const [userList, setUserList] = useState([]);

  const [userName, setUserName] = useState<string>();
  const [firstName, setfirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();

  const { user, users, hasChanged, isLoading, handleFetchAllUser, handlePostUser } = useUser();

  useEffect(() => {
    async function loadUserList() {
      if (!isLoading) {
        await handleFetchAllUser();
      }
    }
    loadUserList();
  }, []);

  useEffect(() => {
    setUserList(users);
  }, [users]);

  function onClickCommit() {
    const userToSubmit: User = {
      userName: userName,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    handlePostUser(userToSubmit);
  }

  const onSelectUser = (event) => {
    const user: User = userList.find((user) => user.userName === event.target.value);
    setUserName(user.userName);
    setfirstName(user.firstName);
    setLastName(user.lastName);
    setEmail(user.email);
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-lg-6">
              <select
                className="form-select form-select-lg"
                defaultValue="-1"
                onChange={onSelectUser}
              >
                <option value="-1">Open this select menu</option>
                {userList.map((user, i) => (
                  <option value={user.userName}>{user.userName}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="row">
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
                      value={userName}
                      onChange={(event) => {
                        setUserName(event.target.value);
                      }}
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
                      value={firstName}
                      onChange={(event) => {
                        setfirstName(event.target.value);
                      }}
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
                      value={lastName}
                      onChange={(event) => {
                        setLastName(event.target.value);
                      }}
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
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default withRouter(Users);
