let USERS = [];

exports.getAll = async () => {
  return USERS;
};

exports.create = async (payload) => {
  const newUser = {
    id: USERS.length + 1,
    ...payload
  };
  USERS.push(newUser);
  return newUser;
};
