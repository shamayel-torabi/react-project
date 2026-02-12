import { type DragEvent, use, useMemo, useState } from 'react';
import clsx from 'clsx';
import { User } from '../User';
import { UserContex } from '../../context/UserContex';
import type { Role } from '../../context/UserType';
import styles from './index.module.css';

type Props = {
  role: Role
}

export const DropZone = ({ role }: Props) => {
  const { users, setRole } = use(UserContex);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData('id');
    setRole(id, role);
    setIsDragging(false);
  }

  const handleDrogOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }

  const filteredUser = useMemo(() => {
    return users.filter(user => user.role === role);
  }, [users, role])

  return (
    <div className={styles['drop-zone']}
      onDrop={handleDrop}
      onDragLeave={handleDragLeave}
      onDragOver={handleDrogOver}>
      <p className={clsx(styles.title, isDragging ? styles.active : undefined)}>{role}</p>
      <ul>
        {filteredUser.map(user => <User key={user.id} user={user} />)}
      </ul>
    </div>
  )
}