import type { UserType } from '../../context/UserType'
import styles from './index.module.css';

type UserProps = {
    user: UserType
}

export const User = ({user}: UserProps) => {
  const handleDragStart  = (event:React.DragEvent<HTMLLIElement> ) =>{
    event.dataTransfer.setData('id', user.id);
  }
  return (
    <li className={styles.user} onDragStart={handleDragStart} draggable>{user.name}</li>
  )
}