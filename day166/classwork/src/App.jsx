import { useState } from "react";
function Child() {
  return <p>child</p>
}
function Parent() {
  return (
    <div>
      <h2>i am parent</h2>
      <Child /> {}
    </div>
  )
}

export default Parent




