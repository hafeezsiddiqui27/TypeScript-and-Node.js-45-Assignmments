let current_users: string[] = [`saim`, `abduulah`, `affan`, `noor`];
let new_user: string[] = [`Saim`];

new_user.forEach((new_users) => {
  if (
    current_users.some(
      (current_users) => current_users.toLowerCase() === new_users.toLowerCase()
    )
  ) {
    console.log(`${new_users} will have to enter new name`);
  } else {
    console.log(`${new_user} is available`);
  }
});
