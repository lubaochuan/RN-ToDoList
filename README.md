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
