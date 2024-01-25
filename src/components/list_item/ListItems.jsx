import './style.scss'
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { REMOVE_TASK, COMPLETED_TASK } from '../../utils/api'
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss'
import { useSelector } from 'react-redux'
import { removeTask, complateTask } from "../../store/tasks";
import { useDispatch } from 'react-redux'
import { formatDate } from '../../utils/date';

const ListItems = () => {

  const dispatch = useDispatch();
  // Call Tasks from Store
  let { tasks } = useSelector((state) => state.tasks);
  // Call Filter from Store
  let { filter } = useSelector((state) => state.filter);


  // In Case User Click Button [ remove ] => Remove Task
  const HanldeClickRemove = (taskID) => {
    // Confirmation from the user that he wants to delete the task before sending the delete command to the API
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete this task?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it"
    }).then((result) => {
      if (result.isConfirmed) {
        REMOVE_TASK(taskID)
          .then((responseData) => {
            if (responseData.status === 200) {
              Swal.fire({
                title: "Deleted!",
                text: `The task has been deleted successfully`,
                icon: "success"
              })
              dispatch(removeTask(taskID))
            }
          })
          .catch((error) => {
            console.log(error)
          });
      }
    });
  }

  // In Case User Click Button [ complete ] => change the task from incomplete to complete
  const HanldeClickCompleted = (taskID) => {
    // Confirmation from the user that he wants to change the task from incomplete to complete before sending it to the api
    Swal.fire({
      title: "Are you sure?",
      text: `This task will be marked as completed`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, it's over"
    }).then((result) => {
      if (result.isConfirmed) {
        COMPLETED_TASK(taskID)
          .then((responseData) => {
            if (responseData.status === 201) {
              Swal.fire({
                title: "Completed!",
                text: `Great job keep it up`,
                icon: "success"
              })
              dispatch(complateTask(taskID))
            }
          })
          .catch((error) => {
            console.log(error)
          });
      }
    });
  }


  // Filter => In order to display exactly the tasks that the user wants
  tasks = filter === "all" ? tasks : tasks.filter(task => task.status === filter);

  return (
    <div className='listItems'>
      {tasks?.map(task => (
        <div className="item" key={task.id}>
          <p>{task.description}</p>
          <div className="info_item">
            {
              task.status === "complete" ? (
                <div className="finish">
                  complated
                </div>
              ) : (
                <div className="buttons">
                  <button className="remove" onClick={() => HanldeClickRemove(task.id)}>
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                  <button className="complate" onClick={() => HanldeClickCompleted(task.id, task)}>
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                </div>
              )
            }
            <div className="create_at">
              {formatDate(task.created_at)}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ListItems