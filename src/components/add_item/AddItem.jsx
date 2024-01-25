import { useState } from 'react';
import './style.scss'
import { MDBInput } from 'mdb-react-ui-kit'
import Filter from '../filter/Filter'
import { ADD_TASK } from '../../utils/api';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'
import { useDispatch } from 'react-redux'
import { addTask } from "../../store/tasks";

const AddItem = () => {
    const dispatch = useDispatch();
    
    // Storage Value Input 
    const [valueItem, setValueItem] = useState("")

    // In Case User Click Button [Publish Task] => Send Task
    const HanldeClickSumbit = () => {
        // Confirmation by the user that he wants to add the task before sending the task to the api
        Swal.fire({
            title: "Are you sure?",
            text: `Do you want to add this task?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, add it"
        }).then((result) => {
            if (result.isConfirmed) {
                ADD_TASK(valueItem)
                    .then((responseData) => {
                        if (responseData.status === 201) {
                            Swal.fire({
                                title: "Added!",
                                text: `The new task has been added successfully`,
                                icon: "success"
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    dispatch(addTask(responseData.data))
                                    setValueItem("")
                                }
                            })
                        }
                    })
                    .catch((error) => {
                        console.log(error)
                    });
            }
        });
    }


    return (
        <>
            <div className='add_item'>
                <form action="" onSubmit={(e) => {
                    e.preventDefault();
                    HanldeClickSumbit();
                }}>
                    <MDBInput
                        label="what's new ? .."
                        id='Category_Name'
                        type='text'
                        className={valueItem === "" ? "empty" : ""}
                        onChange={(e) => setValueItem(e.target.value)}
                        value={valueItem}
                        required
                    />
                    <button type='sumbit'>Publish Task</button>
                </form>
            </div>
            <Filter />
        </>

    )
}

export default AddItem