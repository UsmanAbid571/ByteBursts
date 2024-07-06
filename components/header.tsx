import React from 'react'


interface Props {
    title?:string
}
const Header = ({title=""}:Props) => {
    return (
        <div>
            <div className='flex justify-center mt-24 mx-8'>
                <header className='text-6xl font-bold text-blue-800 mb-6' >{title}</header>

            </div>
        </div>
    )
}

export default Header
