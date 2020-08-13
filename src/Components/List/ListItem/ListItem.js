import React from 'react';
import style from './ListItem.module.css'

const ListItem =({element})=>{
 return(
  <>
  <li className={style.item} style={{backgroundColor: `#${((Math.random() * 0xffffff) << 0).toString(16)}`}}>
  <span className={style.label}>{element.label}</span>
  <span className={style.percentage}>{element.percentage}%</span>
  </li>
</>
 )
}


export default ListItem;