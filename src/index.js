import React from "react";
import reactDom from "react-dom";
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const link = React.createElement('a', {href:'react.org'}, 'дичь')
console.log(link);

reactDom.render(link, document.getElementById('root'))