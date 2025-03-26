import { createContext, useContext } from "react";

function GrandParent() {
  const secret = useContext(SecretNumberContext);
  return (
    <div>
      <h1>GrandParent</h1>
      <p>Secret number in GrandParent is: {secret}</p>
      <Parent />
    </div>
  );
}

function Parent() {
  const secret = useContext(SecretNumberContext);
  return (
    <div>
      <h2>Parent</h2>
      <p>Secret number in Parent is: {secret}</p>
      <SecretNumberContext.Provider value={24}>
        <Child />
      </SecretNumberContext.Provider>
    </div>
  );
}

function Child() {
  const secret = useContext(SecretNumberContext);
  return (
    <div>
      <h3>Child</h3>
      <p>Secret number in Child is: {secret}</p>
    </div>
  );
}

export const SecretNumberContext = createContext(13);

export { GrandParent, Parent, Child };

export default function Context() {
  return (
    <SecretNumberContext.Provider value={42}>
      <GrandParent />
    </SecretNumberContext.Provider>
  );
}
