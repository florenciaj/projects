import React from 'react';
import Button from './Button';

const Sidebar = ({ addProject }) => {
    return (
        <aside className='w-1/3 md:w-72 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl'>
            <h2 className='mb-8 font-bold uppercase text-stone-200 md:text-xl'>Your projects</h2>
            <div>
                <Button onClick={addProject}>+ Add project</Button>
            </div>
            <ul>
            </ul>
        </aside>
    )
}

export default Sidebar