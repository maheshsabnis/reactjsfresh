import React, { Fragment } from 'react';
const data=[
  {term:1, description:'d1'},
  {term:2, description:'d2'},
];
function ListItem({ item }) {
  return (
    <Fragment>
      <dt>{item.term}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  );
}

// function Glossary(props) {
//   return (
//     <dl>
//       {props.items.map(item => (
//         <ListItem item={item} key={item.id} />
//       ))}
//     </dl>
//   );
// }

function Glossary(props) {
    return (
      <dl>
        {props.items.map(item => (
          // Fragments should also have a `key` prop when mapping collections
          <Fragment key={item.id}>
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
          </Fragment>
        ))}
      </dl>
    );
  }
function AccessibilityComponent() {
    return(
        <div className="container">
            <Glossary items={data}/>
        </div>
    )
}

export default AccessibilityComponent;