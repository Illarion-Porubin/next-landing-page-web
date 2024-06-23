import React from 'react'

interface Props {
    sort: string[];
    active: string;
    setActive: React.Dispatch<React.SetStateAction<string>>
}

export const Sort:React.FC<Props> = ({sort, active, setActive}) => {
  return (
    <ul className="menu">
    {sort?.map((item: string, id: number) => (
      <li key={id}>
        <button
          className={`menuButton bg-slate-600 ${
            sort && item === active
              ? "border-[2px] border-slate-600 bg-transparent text-black"
              : "text-white"
          }`}
          id={item}
          onClick={(e) => setActive(e.currentTarget.id)}
        >
          {item}
        </button>
      </li>
    ))}
  </ul>
  )
}
