import bcrypt from 'bcrypt';

const saltRounds = 10;

export const encryptPassword = async(password: string): Promise<string> => {
  try {
    const salt = await bcrypt.genSalt(saltRounds);
  
    return await bcrypt.hash(password, salt);
  } catch {
    throw { message: 'Encryption fail' };
  }
};
