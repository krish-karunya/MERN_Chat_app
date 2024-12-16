mistakes Notes :

- Keep the .env file in the Root Level
- userSchema.methods.comparePassword = over here use Methods not a method
- Always use async await while hashing password ,Don't forgot to put await in front hash and compare
- While using Enum use values not a value => Select => Body => None (If you not select none you will get Error)
- While Mentioning Protect route don't forgot to write (cookies) s should add like this => req.cookies.token

# Model List :

- User model = name , age , gender , email , password , profilePic
- Conversation model - participant(ref-userModel),message(ref - messageModelId)
- Message model - senderId(ref-userModel) , receiverId(ref-userModel) , Content

# Routes :

**authRoutes :**

- signUp
- LogIn
- LogOut

**MessageRoutes :**

- SendMessage
- getAllMessage

**userRoutes :**

- Profile
- ProfileEdit
- getUsersForSidebar

**$all**

when you querying the direct value from array always use $all method
