import mongoose from 'mongoose';
import { userSchema } from './schemas.mjs';

export const UserModel = mongoose.model('user', userSchema);
