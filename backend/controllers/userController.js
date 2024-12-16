import { User } from "../models/userModel.js";
import { validateUpdatedInput, validateUpdateField } from "../utils/helper.js";

export const getProfile = async (req, res) => {
    try {
        const { _id, name, gender, profilePic, age } = req.user
        // console.log(req.user);
        res.status(200).json({
            _id,
            name,
            age,
            gender,
            profilePic
        })

    } catch (error) {
        console.log(`Error in getProfile Controller ${error.message}`);
        res.status(500).send(`Error is ${error.message}`)
    }
}

export const UpdateProfile = async (req, res) => {
    try {
        const { name, profilePic, age, password } = req.body
        if (!validateUpdateField(req)) {
            return res.send('field is not allowed to edit ')
        }
        // Validate the updated data input value :
        validateUpdatedInput(req)

        const user = req.user

        user.name = name || user.name
        user.profilePic = profilePic || user.profilePic
        user.age = age || user.age
        user.password = password || user.password

        await user.save();
        res.status(200).json({ message: 'Updated Successfully', user })

    } catch (error) {
        console.log(`Error in UpdateProfile Controller ${error.message}`);
        res.status(500).send(`Error is ${error.message}`)
    }
}

export const getUserForSidebar = async (req, res) => {
    try {
        const user = req.user
        const getAllUser = await User.find({ _id: { $ne: user._id } }).select('name profilePic')
        res.status(200).json({ user: getAllUser })

    } catch (error) {
        console.log(`Error in getUserForSidebar Controller, ${error.message}`)
        res.status(500).send(`Error is ${error.message}`)
    }
}