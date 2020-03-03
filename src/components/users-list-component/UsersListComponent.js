import React, { useState } from "react";
import XModal from "../modals/XModal";

import "./UsersListComponent.css";

function UsersListComponent({
  isModalOpen,
  modalTitle,
  onHandleToggleModal,
  onSelectUserFromList,
  hgoArrayUsers,
  loggedInUser
}) {
  const mainTitle = modalTitle.toUpperCase();

  let users = [];

  switch (mainTitle) {
    case "GROWERS":
      users = hgoArrayUsers.filter(
        u =>
          u.grower_hauler.toLowerCase() === "grower" &&
          u.accountName !== loggedInUser.accountName
      );

      break;

    case "HAULERS":
      users = hgoArrayUsers.filter(
        u =>
          u.grower_hauler.toLowerCase() === "hauler" &&
          u.accountName !== loggedInUser.accountName
      );

      break;
  }

  const dataBody = (
    <>
      <ul>
        {users.map((u, index) => {
          return (
            <li
              key={index}
              className="ml-2 usersHGOList"
              id={index}
              onClick={() => onSelectUserFromList(u)}>
              {u.accountName}
            </li>
          );
        })}
      </ul>
    </>
  );

  return (
    <>
      <div>
        <XModal
          isModalOpen={isModalOpen}
          onHandleToggleModal={onHandleToggleModal}
          modalSize={"lg"}
          modalBody={dataBody}
          modalId={"modalTitle"}
          modalTitle={mainTitle}
          buttonHappyText={"None"}
          buttonSadText={"Close"}
          name={"usersListModal"}
        />
      </div>
    </>
  );
}

export default UsersListComponent;
