import { getRepository } from 'typeorm';
import { User } from '../../database/entities/User';

export const findUserByEmail = async(email: string): Promise<User | undefined> => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne({ 
    where: {
      email,
    }, 
  });

  return user;
};

export const createUser = async(
  email: string,
  password: string,
  firstName: string,
  lastName: string,
  course: number,
  masteredDisciplines: string[],
): Promise<User> => {
  const userRepository = getRepository(User);
  const userInstance = userRepository.create();

  userInstance.email = email;
  userInstance.password = await passwordEncryption(password);
  userInstance.firstName = firstName;
  userInstance.lastName = lastName;
  userInstance.course = course;
  userInstance.firstName = firstName;

  const user = userRepository.save(userInstance);

  return user;
};
