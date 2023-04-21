# Storybook Vue3 PropType Issue

Repository reproducing this issue.

```sh
npm install
npm run storybook
```

Then view the HelloWorld component docs (you'll get the same result as seen in `./issue.png`).

Expected:
   - When defining a prop with PropType as a string union type, the user should be able to select from the list of options on the autodocs page.

Actual:
   - When defining a prop with PropType as a string union type, the data type is inferred as `object`, and you can not even enter the string value of the prop on the autodocs page as it expects an stringified object to be passed.
