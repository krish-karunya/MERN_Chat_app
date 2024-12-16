import mongoose from 'mongoose'
import { MALE_URL, FEMALE_URL } from '../utils/constant.js';
import bcrypt from 'bcryptjs'


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required '],
        min: [3, 'Name should be minimum 3 Letter'],
        max: [20, 'Name should be below 20 Letter']

    },
    age: {
        type: Number,
        required: [true, 'Age is Required'],
        min: ['18', 'Age should be minimum 18'],
        max: ['100', 'Age should be below 100']

    }, email: {
        type: String,
        required: [true, 'Mail id is Required'],
        unique: true,
        validate: {
            validator: function (value) {
                return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value)
            },
            message: "Email id is not valid"
        }
    }, password: {
        type: String,
        required: [true, 'Password is required'],
        validate: {
            validator: function (value) {
                return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/.test(value)
            },
            message: "Please Enter Strong Password"
        }
    }, gender: {
        type: String,
        required: [true, 'Gender is required'],
        enum: {
            values: ['male', 'female'],
            message: 'Gender should be male or female'
        }
    }, profilePic: {
        type: String,
        default: function (value) {
            if (this.gender === 'male') {
                return MALE_URL
            } else {
                return FEMALE_URL
            }
        }

    },

}, { timestamps: true });


// Hashing password Logic :
userSchema.pre('save', async function (next) {

    // Optimize out performance to prevent the password re-hashing
    if (!this.isModified('password')) return next();

    try {
        this.password = await bcrypt.hash(this.password, 10)
        next()
    } catch (error) {
        next(error)
    }
})

// Compare password method :
userSchema.methods.comparePassword = async function (password) {
    try {

        // Don't forgot mention the Empty String for safety fallback :
        const isMatch = await bcrypt.compare(password, this.password || '')
        return isMatch;
    } catch (error) {
        throw new Error('password Invalid')
    }
}

export const User = mongoose.model('User', userSchema)