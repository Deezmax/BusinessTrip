import React, { useEffect, useState } from 'react';
import { match, useRouteMatch, withRouter } from 'react-router-dom';
import User from '../../common/dto/Users';
import useUser from '../../hooks/useUser';
import { saveCurrentPath } from '../../utils/history';

export function Users(props: any) {
  saveCurrentPath(props.location);
  const { path } = useRouteMatch() as match;

  const [userList, setUserList] = useState([]);
  // const [singleUser, setSingleUser] = useState<User>({
  //   userName: '',
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  // });

  const [userName, setUserName] = useState<string>();
  const [firstName, setfirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [email, setEmail] = useState<string>();

  const {
    user,
    users,
    hasChanged,
    isLoading,
    handleFetchAllUser,
    handleFetchUser,
    handlePostUser,
  } = useUser();

  useEffect(() => {
    async function loadUserList() {
      if (!isLoading) {
        await handleFetchAllUser();
        setUserList(users);
      }
    }
    loadUserList();
  }, []);

  function onClickCommit() {
    const userToSubmit: User = {
      userName: userName,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    handlePostUser(userToSubmit);
  }

  function onSelectUser(event) {
    // setSingleUser(event.target.value);
  }

  return (
    <React.Fragment>
      <select className="form-select form-select-lg" defaultValue="-1" onSelect={onSelectUser}>
        <option value="-1">Open this select menu</option>
        {userList?.map((user, i) => {
          <option value={user.userName}>{user.userName}</option>;
        })}
      </select>
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
    </React.Fragment>
  );
}

export default withRouter(Users);
