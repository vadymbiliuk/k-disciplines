import { Faculty } from '../../database/entities/Faculty';
import { findUserByEmail } from '../../database/repositories/user';

export const signInManager = async(email: string) => {
  const user = await findUserByEmail(email);

  if (!user) {
    throw { message: 'Ошибочный email или пароль' };
  }
};

export const signUpManager = async(
  email: string,
  password: string,
  firstName: string,
  lastName: string, 
  course: number,
  faculty: Faculty, 
) => {
  const user = await findUserByEmail(email);

  if (user) {
    throw { message: 'Студент уже зарегистрирован' };
  }
};
