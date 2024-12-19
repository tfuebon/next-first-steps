'use client';
import Link from 'next/link';
import PropTypes from 'prop-types';
import style from './ActiveLink.module.css';
import { usePathname } from 'next/navigation';

export const ActiveLink = ( props ) => {
    const { path, text } = props;
    const pathName = usePathname();
    console.log(pathName)

    return (
        <Link 
            prefetch={true}
            className={`${style.link} ${(pathName === path) && style['active-link']}`} 
            key={path} 
            href={path}
        >
            {text}
        </Link>
    )
}

ActiveLink.propTypes = {
    path: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}