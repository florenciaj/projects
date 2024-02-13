import React from 'react';
import Button from './Button';

const Sidebar = ({ addProject, projects }) => {
    return (
        <aside className='w-1/3 md:w-72 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-xl'>
            <h2 className='mb-8 font-bold uppercase text-stone-200 md:text-xl'>Your projects</h2>
            <div>
                <Button onClick={addProject}>+ Add project</Button>
            </div>
            <ul className='mt-8'>
                {projects.map(projects => <li key={projects.id}>
                    <button className='w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800'>{projects.title}</button>
                </li>)}
            </ul>
        </aside>
    )
}

export default Sidebar