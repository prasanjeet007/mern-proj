import React from "react";
import Card from "../../shared/components/UIElements/Card";
import UserItem from "./UserItem";
import "./UsersList.css";

export default function UsersList({ items }) {
  return (
    <>
      {items?.length === 0 ? (
        <div className="center">
          <Card>
            <h2>No Users Found.</h2>
          </Card>
        </div>
      ) : (
        <ul className="users-list">
          {items &&
            items.map((user) => (
              <UserItem
                key={user.id}
                id={user.id}
                image={user.image}
                name={user.name}
                placeCount={user.places}
              />
            ))}
        </ul>
      )}
    </>
  );
}
