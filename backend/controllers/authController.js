import { validateInput } from "../utils/helper.js";
import { User } from "../models/userModel.js";
import jwt from 'jsonwebtoken'


const generateTokenAndSetCookie = (id, res) => {
    const token = jwt.sign({ userId: id }, process.env.JWT_SECRET_KEY, { expiresIn: '7d' })
    res.cookie('token', token, {
        httpOnly: true, // prevent xss attacks, cross site scripting attack
        secure: process.env.NODE_ENV === 'production',
        sameSite: "strict", //prevent CSRF attack, cross-site request forgery attack
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7days - millisecond
    })
}


export const SignUp = async (req, res) => {
    try {
        const { name, age, gender, email, password } = req.body

        // helper Function to validate the input Data :
        validateInput(req)

        // Checking isExistingUSer :
        const isExistingUser = await User.findOne({ email });
        if (isExistingUser) {
            return res.status(400).send('Already User Exists')
        }

        // Instance of User Model :
        const newUser = new User({ name, age, gender, email, password })
        await newUser.save();


        // Send the JWT Token :
        generateTokenAndSetCookie(newUser._id, res)

        res.status(201).json({
            message: 'New User Created Successfully', user: {
                _id: newUser._id,
                name: newUser.name,
                age: newUser.age,
                password: newUser.password,
                gender: newUser.gender,
                email: newUser.email,
                profilePic: newUser.profilePic
            }
        })

    } catch (error) {
        console.log(`Error in SignUp Controller ,error is  ${error.message}`);
        res.status(500).send(`Error:${error.message}`)

    }
}

export const LogIn = async (req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).send('All field is required')
        }
        const user = await User.findOne({ email })
        console.log(user);

        if (!user) {
            return res.status(401).send('Invalid Credential')
        }
        // Comparing the password :
        const isPasswordMatch = await user.comparePassword(password);
        if (!isPasswordMatch) {
            return res.status(400).json({ error: "Invalid credentials" })
        }
        generateTokenAndSetCookie(user._id, res)

        res.status(200).json({
            message: 'Login Successfully', user: {
                _id: user._id,
                name: user.name,
                age: user.age,
                password: user.password,
                gender: user.gender,
                email: user.email,
                profilePic: user.profilePic
            }
        })

    } catch (error) {
        console.log(`Error in LogIn Controller ,error is  ${error.message}`);
        res.status(500).send(`Error:${error.message}`)
    }
}

export const LogOut = (req, res) => {

    console.log(req.cookies.token);
    try {
        res.cookie("token", "", { maxAge: 0 });
        res.status(200).json({ message: 'Logged out Successfully' })

    } catch (error) {
        console.log(`Error in LogOut Controller ,error is  ${error.message}`);
        res.status(500).send(`Error : ${error.message}`)

    }
}

