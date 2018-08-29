import { UserModel } from './models.mjs';

let io;

export function initIO(_io) {
  io = _io;
}

export async function ADD_USER(action) {

  const user = action.user;
  console.log('Adding new user', user);
  const newUser = new UserModel(user);
  try {
    await newUser.save();
    broadcastUsers();
  } catch (e) {
    throw e;
  }
  return action;
}

export async function broadcastUsers() {
  const users = await FETCH_USERS();
  console.log('sending users to room', users);
  try {
    io.to('room1').emit('message', users);
  } catch (e) {
    console.log(e);
  }
}

export async function FETCH_USERS(action = { type: 'FETCH_USERS'}) {
  await UserModel.find((err, allUsers) => {
    if (err) {
      throw err;
    }
    action.users = allUsers;
  });
  return action;
}
