import React from 'react';
import List from '../List/List';
import style from './Statistics.module.css'

const Statistics = (props)=>{
 const {stats, title} = props;
  return(
  <section className={style.statistics}>
  <h2 className={style.title}>{title}</h2>
  <List elements={stats} />
</section>

  )
}
export default Statistics;