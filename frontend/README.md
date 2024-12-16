# Planning:

**Tech Stack :**

- Styling - TailwindCss and DaisyUi
- Routing - React router dom
- Global Store - Zustand
- Notification - React-hot-toast
- Animation - Framer-Motion

**Component list :**

- navBar
- sideBar
- MessageContainer

**page List :**

- signUp page
- login Page
- homePage

mistakes to Avoid :

- when creating a hook function inside that we need to create a another function to fetch the data ,**hook function should be normal function not a async function**

**How the Context Work and How it Handle the User data and why do we use setAuthUser in **

**This is the reason we are using setAuthUser**

- It saves the user data in localStorage so it persists across page reloads or browser sessions.
- But: React doesn’t know that localStorage has been updated. React state (authUser) doesn’t automatically update itself based on changes in localStorage.

**Why we should use async/await here**

const handleSubmit = async (e) => {
e.preventDefault();
console.log(email, password);
await Login({ email, password });
};

In this code even through signUp function is async await which i wrote in another file but here also we should mention async await because this Login function return promise so we should wait until we get result

# Important of Optional Chaining :

- Eg : selectedConversation?.\_id === user.\_id; -

when using optional chaining initially selectedConversation is null if you try to access the null to \_id it cause run time error so when using optional chaining this whole portion will return undefined===user.\_id it will return false , it will prevent us from run time error - this is my understanding is it ryt?

# Passing message from server to Client :

you should always use to pass message inside the object => when you use destructure in server serverSide like this **const { message } = req.body** - axios will automatically set the content-type as header **const response = await axios.post(`/message/send/${id}`, { message });**

# order is more important : 1st - SocketProvider should Wrap 1st

 <AuthContextProvider>
    <BrowserRouter>
      <SocketContextProvider>
        <App />
      </SocketContextProvider>
    </BrowserRouter>
  </AuthContextProvider>
