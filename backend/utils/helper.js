import validator from 'validator'

export const validateInput = (req) => {

    const { name, age, gender, email, password } = req.body

    if (!name || !age || !gender || !email || !password) {
        throw new Error('All fields is Required')
    }
    if (name.length < 3 || name.length > 10) {
        throw new Error('Name should above 3 Letter and Below 10 Letter')
    }

    if (!validator.isEmail(email)) {
        throw new Error('Please Enter Valid Email id')
    }

    // { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }
    if (!validator.isStrongPassword(password)) {
        throw new Error('Please Enter Strong Password')
    }
    if (!gender === 'male' || !gender === 'female') {
        throw new Error('Please Enter the Valid Gender')
    }
}


export const validateUpdateField = (req) => {
    try {
        // 'name', 'profilePic', 'age', 'password'
        const allowedEditField = ['name', 'profilePic', 'age', 'password']
        const isAllowedEditFiled = Object.keys(req.body).every((field) => {
            return allowedEditField.includes(field)
        })
        console.log(isAllowedEditFiled);

        return isAllowedEditFiled

    } catch (error) {
        console.log(`Error in validateUpdateField Function`);
        throw new Error(`Error is ${error.message}`)
    }
}
export const validateUpdatedInput = (req) => {

    const { name, age, password, profilePic } = req.body

    if (!name || !age || !profilePic || !password) {
        throw new Error('All fields is Required')
    }
    if (name.length < 3 || name.length > 10) {
        throw new Error('Name should above 3 Letter and Below 10 Letter')
    }

    if (!validator.isURL(profilePic)) {
        throw new Error('Image URL is Invalid')
    }
    // { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1, returnScore: false, pointsPerUnique: 1, pointsPerRepeat: 0.5, pointsForContainingLower: 10, pointsForContainingUpper: 10, pointsForContainingNumber: 10, pointsForContainingSymbol: 10 }
    if (!validator.isStrongPassword(password)) {
        throw new Error('Please Enter Strong Password')
    }

}