import React, { useState, useEffect } from "react";
import HomeButton from "./HomeButton";

const SplitBill = () => {
  const [users, setUsers] = useState([]);
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [expense, setExpense] = useState("");
  const [splitList, setSplitList] = useState([]);

  useEffect(() => {
    // Load users and groups from localStorage
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }

    const storedGroups = localStorage.getItem("groups");
    if (storedGroups) {
      setGroups(JSON.parse(storedGroups));
    }
  }, []);

  useEffect(() => {
    // Update localStorage when users or groups change
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("groups", JSON.stringify(groups));
  }, [users, groups]);

  const addUser = () => {
    const userInput = document.getElementById("user-input");
    const userName = userInput.value.trim();

    if (userName !== "") {
      setUsers((prevUsers) => [...prevUsers, { name: userName }]);
      userInput.value = "";
    }
  };

  const addGroup = () => {
    const groupInput = document.getElementById("group-input");
    const groupName = groupInput.value.trim();

    if (groupName !== "") {
      setGroups((prevGroups) => [
        ...prevGroups,
        { name: groupName, users: [] },
      ]);
      groupInput.value = "";
    }
  };

  const addUserToGroup = () => {
    if (selectedGroup !== "" && selectedUser !== "") {
      const groupId = parseInt(selectedGroup);
      const userId = parseInt(selectedUser);

      if (!isNaN(groupId) && !isNaN(userId)) {
        setGroups((prevGroups) => {
          const updatedGroups = [...prevGroups];
          updatedGroups[groupId].users.push(users[userId]);
          return updatedGroups;
        });
      }
    }
  };

  const removeUserFromGroup = () => {
    if (selectedGroup !== "" && selectedUser !== "") {
      const groupId = parseInt(selectedGroup);
      const userId = parseInt(selectedUser);

      if (!isNaN(groupId) && !isNaN(userId)) {
        setGroups((prevGroups) => {
          const updatedGroups = [...prevGroups];
          const group = updatedGroups[groupId];
          const user = users[userId];

          if (group && user) {
            const updatedUsers = group.users.filter(
              (groupUser) => groupUser.name !== user.name
            );
            group.users = updatedUsers;
          }

          return updatedGroups;
        });
      }
    }
  };

  // const calculateSplitAmount = () => {
  //   if (selectedGroup !== "" && expense !== "") {
  //     const groupId = parseInt(selectedGroup);
  //     const totalAmount = parseFloat(expense);

  //     if (!isNaN(groupId) && !isNaN(totalAmount)) {
  //       const group = groups[groupId];

  //       if (group && group.users.length > 0) {
  //         const splitAmount = (totalAmount / group.users.length).toFixed(2);
  //         const userSet = new Set(); // Create a set to store unique user names

  //         const splitList = group.users.map((user) => {
  //           // Add user name to the set and only return the name if it hasn't been added before
  //           if (!userSet.has(user.name)) {
  //             userSet.add(user.name);
  //             return `${user.name}: $${splitAmount}`;
  //           }
  //           return null; // Return null for duplicate user names
  //         });

  //         setSplitList(splitList.filter(Boolean)); // Filter out null values from the splitList
  //       }
  //     }
  //   }
  // };

  //   const calculateSplitAmount = () => {
  //     if (selectedGroup !== "" && expense !== "") {
  //       const groupId = parseInt(selectedGroup);
  //       const totalAmount = parseFloat(expense);

  //       if (!isNaN(groupId) && !isNaN(totalAmount)) {
  //         const group = groups[groupId];

  //         if (group && group.users.length > 0) {
  //           const numUsers = group.users.length;
  //           const splitAmount = (totalAmount / numUsers).toFixed(2);

  //           const splitList = group.users.map((user) => {
  //             return `${user.name}: $${splitAmount}`;
  //           });

  //           setSplitList(splitList);
  //         }
  //       }
  //     }
  //   };

  const calculateSplitAmount = () => {
    if (selectedGroup !== "" && expense !== "") {
      const groupId = parseInt(selectedGroup);
      const totalAmount = parseFloat(expense);

      if (!isNaN(groupId) && !isNaN(totalAmount)) {
        const group = groups[groupId];

        if (group && group.users.length > 0) {
          const numUsers = group.users.length;
          const splitAmount = (totalAmount / numUsers).toFixed(2);
          const final = splitAmount * 2;
          const userSet = new Set(); // Create a set to store unique user names
          const splitList = [];

          group.users.forEach((user) => {
            if (!userSet.has(user.name)) {
              userSet.add(user.name);
              splitList.push(`${user.name}: $${final}`);
            }
          });

          setSplitList(splitList);
        }
      }
    }
  };

  return (
    <>
      <HomeButton />
      <div className="container">
        <h1>Bill Split Application</h1>

        <h2>Add User</h2>
        <input
          type="text"
          className="form-control form-control-lg mb-2"
          id="user-input"
          placeholder="Enter user name"
        />
        <button className="w-100 btn btn-lg btn-success" onClick={addUser}>
          Add User
        </button>

        <h2>Add Group</h2>
        <input
          type="text"
          className="form-control form-control-lg mb-2"
          id="group-input"
          placeholder="Enter group name"
        />
        <button className="w-100 btn btn-lg btn-success" onClick={addGroup}>
          Add Group
        </button>

        <h2>Add User to Group</h2>
        <select
          value={selectedGroup}
          className="form-control form-control-lg mb-2"
          onChange={(e) => setSelectedGroup(e.target.value)}
        >
          <option value="">Select Group</option>
          {groups.map((group, index) => (
            <option key={index} value={index}>
              {group.name}
            </option>
          ))}
        </select>
        <select
          value={selectedUser}
          className="form-control form-control-lg mb-2"
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value="">Select User</option>
          {users.map((user, index) => (
            <option key={index} value={index}>
              {user.name}
            </option>
          ))}
        </select>
        <button
          className="w-100 btn btn-lg btn-success mb-1"
          onClick={addUserToGroup}
        >
          Add User to Group
        </button>
        <button
          className="w-100 btn btn-lg btn-success"
          onClick={removeUserFromGroup}
        >
          Remove User from Group
        </button>

        <h2>Enter Total Expense</h2>
        <input
          type="number"
          value={expense}
          className="form-control form-control-lg mb-2"
          onChange={(e) => setExpense(e.target.value)}
          placeholder="Enter total expense"
        />
        <select
          value={selectedGroup}
          className="form-control form-control-lg mb-2"
          onChange={(e) => setSelectedGroup(e.target.value)}
        >
          <option value="">Select Group</option>
          {groups.map((group, index) => (
            <option key={index} value={index}>
              {group.name}
            </option>
          ))}
        </select>
        <button
          className="w-100 btn btn-lg btn-success"
          onClick={calculateSplitAmount}
        >
          Split Amount
        </button>

        <h2>Splitted Amount per User</h2>
        <ul>
          {splitList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SplitBill;
