import styles from './typography.module.css'

const tags = {
    h1: 'h1',
    h2: 'h2',
    body: 'p'
}

export const Typography = ({children ,  variant}) => {
    const Component = tags[variant] || 'p'
    const variantClass = styles[variant] || styles.p

    return(
        <Component className={variantClass}>
            {children}
        </Component>
    )
}