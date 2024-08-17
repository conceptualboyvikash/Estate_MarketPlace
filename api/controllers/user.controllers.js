import bcrypt from 'bcrypt'
import { errorHandler } from '../utils/error.js';
import User from '../Model/user.model.js';

export const test=(req, res) => {
    res.json({"name":"viaksh kuamr"})
};

export const updateUser = async (req, res, next) => {
    if (req.user.id !== req.params.id)
      return next(errorHandler(401, 'You can only update your own account!'));
    try {
      if (req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
      }
  
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            avatar: req.body.avatar,
          },
        },
        { new: true }
      );
      /*
      The $set operator is used in MongoDB to specify the fields in a document that you want to update. It updates the specified fields with the new values you provide, while leaving the other fields unchanged.
      */
/*
      The { new: true } option tells Mongoose to return the updated document instead of the original document before the update.
*/
      const { password, ...rest } = updatedUser._doc;
  
      res.status(200).json(rest);
    } catch (error) {
      next(error);
    }
  };