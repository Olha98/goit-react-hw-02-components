import React from 'react';
import styleListItem from './ListItem.module.css'

const ListItem =({element})=>{
  const colors =["#a43cf3", "#e54d62", "#20b8c5", "#51c3f5"]

  const newColor =()=>{
for(let color of colors){
  return color
}
  }

const listyle = {
  backgroundColor: `${newColor()}`,
}

 return(
  <>
  <li className={styleListItem.item} id={element.id} style={listyle}>
  <span className={styleListItem.label}>{element.label}</span>
  <span className={styleListItem.percentage}>{element.percentage}%</span>
  </li>
</>
 )
}

export default ListItem;