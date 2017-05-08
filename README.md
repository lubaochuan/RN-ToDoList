# Todo List
# Setup
Initialize react-native project and install tcomb-form-native
```shell
react-native init RN_ToDoList
npm install tcomb-form-native --save
```

# Step 1
Create a dummy todo ListView and an edit form.
You can start with the demo at https://facebook.github.io/react-native/docs/listview.html

tcomb-form-native is a library for making input collection easier. It uses a domain model to automatically render control elements by their types. The documentation can be found at https://github.com/gcanti/tcomb-form-native
# Step 2
Add navigation between the two scenes. The recipe can be found at https://github.com/lubaochuan/react-native-navigator-demo

[solution](https://github.com/lubaochuan/RN-ToDoList/tree/04b1e18a7c0e592e11eb667aa05af2899ab53742)
# Step 3
Add a container component to manage state and implement business logic.
The recipe can be found at http://www.reactnativeexpress.com/data_component_state

[solution](https://github.com/lubaochuan/RN-ToDoList/tree/68cb817f060a09e6296fa3a7f8b93236ee1186af)
# Step 4
Use Redux and React Redux to manage state. Add the libraries to the project first:
```
npm install redux react-redux --save
```
The recipe can be found at http://www.reactnativeexpress.com/redux

[solution](https://github.com/lubaochuan/RN-ToDoList/tree/8c3cbdc95781bf75e579659a21756a6b2412391e)

# Step 5
Use redux-persist to persist state to local storage. Add the libraries to the project first:
```
npm install redux-persist --save
```
The recipe can be found at http://www.reactnativeexpress.com/redux_persist

[solution](https://github.com/lubaochuan/RN-ToDoList/tree/aa9e1499998c88b19d3a96bb5e27e0487c48f82e)

# Step 6
With Redux in place logging state transitions is simple with the redux-logger library. Add the library to the project first:
```
npm install redux-logger --save
```
The recipe can be found at https://github.com/evgenyrodionov/redux-logger

[solution](https://github.com/lubaochuan/RN-ToDoList/tree/20cbd3b1fbc67703d832bf059a1d8db7c3f3e91f)

# Step 7
Use delete action to remove existing to-do items. An `Alert` menu prompts the user to confirm a delete action.

[solution](https://github.com/lubaochuan/RN-ToDoList/tree/a50b05ea66d82dae8361da24f80c45637943e96c)

# Step 8
Use redux-thunk to fetch todos from a Web API.
```
npm install redux-thunk --save
```
The recipe can be found at http://www.reactnativeexpress.com/networking_redux

[solution](https://github.com/lubaochuan/RN-ToDoList/tree/e830053bfa4e498b01214a95946c3c3720082265)
# Step 9
Use firebase for user authentication. We will use `tcomb-form-native` to create the input form.
```
npm install firebase --save
npm install tcomb-form-native --save
```
You need to create a [Firebase app](https://firebase.google.com/) and enable [user authentication via email](https://cdn-images-1.medium.com/max/1600/1*jiTjs8uGm2YzUGhVscZnfQ.png).
```
cp config.js.example config.js
```
Update config.js with your Firebase app credentials.

# Step 10
Use "react-navigation" for navigation and manage todos in firebase via redux.

The recipes can be found at
- https://hackernoon.com/getting-started-with-react-navigation-the-navigation-solution-for-react-native-ea3f4bd786a4
- https://github.com/bruz/react-native-redux-groceries

[solution](https://github.com/lubaochuan/RN-ToDoList/tree/4e5dd2fef717e430aa06042e684493f7348f235a)

# Step 11
Set the following rules to protect user data in firebase.
```
{
  "rules": {
    "users": {
      "$uid": {
        ".write": "$uid === auth.uid",
    		".read": "$uid === auth.uid"
      }
    }
  }
}
```
