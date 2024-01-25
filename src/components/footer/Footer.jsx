import './style.scss'
import { faChartPie } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'

const Footer = () => {
  // Call Tasks from store
  const { tasks } = useSelector((state) => state.tasks);
  // Filter =>  for see how many tasks have not been completed 
  let tasksCompleted = tasks.filter(task=> task.status !== "incomplete")

  return (
    <div className='boxes'>
      <div className="box">
        <p>Added</p>
        <h3>{tasks.length} items</h3>
        <p> <span><FontAwesomeIcon icon={faChartPie} /> </span>{ (100 - (tasksCompleted.length / tasks.length ) * 100 ).toFixed(2)}%</p>
      </div>
      <div className="box">
        <p>Completed</p>
        <h3>{tasksCompleted.length} items</h3>
        <p> <span><FontAwesomeIcon icon={faChartPie} className='up' /> </span>  { ((tasksCompleted.length / tasks.length ) * 100 ).toFixed(2)}%</p>
      </div>
    </div>
  )
}

export default Footer