
import Link from 'next/link';
import React from 'react';


interface Props {
    item: {
        link: string;
        title: string;
    }
}

const NavLst:React.FC<Props> = ({item}) => {
    return (
        <li>
            <Link className="text-white " href={item.link}>{item.title}</Link>
        </li>
    );
}

export default NavLst;
