import { ILinks } from '@/types';
import Link from 'next/link';
import React from 'react';


interface Props {
    item: ILinks
}

const NavLst:React.FC<Props> = ({item}) => {
    return (
        <li>
            <Link className="text-white " href={item.link}>{item.title}</Link>
        </li>
    );
}

export default NavLst;
