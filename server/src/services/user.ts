import { User } from 'models';

// ์ ์  ์กฐํ
const findUserByEmail = async (email: string): Promise<User | null> => {
  const user = await User.findOne({
    attributes: ['id', 'email', 'provider', 'password', 'username'],
    where: {
      email: email,
      provider: 'email',
    },
  });
  return user;
};

export default {
  findUserByEmail,
};
