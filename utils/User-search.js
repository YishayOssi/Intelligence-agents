export function UserSearchByName(name, list_of_users) {
    let found
  for (let i = 0; i < list_of_users.length; i++) {
    if (list_of_users[i].name === name) {
      console.log(list_of_users[i]);
      found = true;
      break;
    }
  }

  if (!found) {
    console.log("User not found!");
  }
}




export function UserSearchByAge(age, list_of_users) {
    let found
  for (let i = 0; i < list_of_users.length; i++) {
    if (list_of_users[i].age == age) {
      console.log(list_of_users[i]);
      found = true;
      break;
    }
  }

  if (!found) {
    console.log("User not found!");
  }
}