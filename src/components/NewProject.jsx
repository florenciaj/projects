import React, { useRef } from 'react';
import Input from './Input';
import Modal from './Modal';

const NewProject = ({ onAdd, onCancel }) => {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function saveHandler() {
        const newTitle = title.current.value;
        const newDescription = description.current.value;
        const newDueDate = dueDate.current.value;

        if (!newTitle.trim() ||
            !newDescription.trim() ||
            !newDueDate.trim()) {
            modal.current.open();
            return;
        }

        onAdd({
            title: newTitle,
            description: newDescription,
            dueDate: newDueDate,
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Ok">
                <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid input</h2>
                <p className='text-stone-600 mb-4'>Oops... looks like you forgot to enter a value.</p>
                <p className='text-stone-600 mb-4'>Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className='w-[35rem] mt-16'>
                <menu className='flex items-center justify-end gap-4 my-4'>
                    <li>
                        <button className='text-stone-800 hover:text-stone-950'
                            onClick={onCancel}
                        >
                            Cancel</button>
                    </li>
                    <li>
                        <button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
                            onClick={saveHandler}
                        >
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title" />
                    <Input ref={description} label="Description" isTextarea />
                    <Input type="date" ref={dueDate} label="Due date" />
                </div>
            </div>
        </>
    )
}

export default NewProject