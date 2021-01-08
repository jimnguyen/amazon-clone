export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

// export const getName = (auth) => {
//   return capitalize(
//     auth.currentUser.email.substring(0, auth.currentUser.email.indexOf("@"))
//   );
// };

export const getName = (user) => {
  return capitalize(user.email.substring(0, user.email.indexOf("@")));
};
