import styles from './alert.module.css'
import cn from 'classnames' //this is the classnames module

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        //usage of the classname module
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}
    </div>
  )
}