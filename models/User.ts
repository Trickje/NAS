import { hashPassword, comparePassword } from "../modules/hash-password.js";
import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  username: string;
  password: string;
  comparePassword: (newPassword: string) => Promise<boolean>;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await hashPassword(this.password);
  next();
});

userSchema.methods.comparePassword = async function (
  newPassword: string
): Promise<boolean> {
  return comparePassword(newPassword, this.password);
};

const User = mongoose.model<IUser>("User", userSchema);

export default User;
