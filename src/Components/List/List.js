import React  from 'react';
import ListItem from './ListItem/ListItem'
import style from './List.module.css'

const List = ({elements}) =>{
  

    return(
      <>
      <ul className={style.list}>
      {elements.map(element => <ListItem key={element.id} element={element} />)}
      </ul>
      </>
    )
 
  
}

export default List;