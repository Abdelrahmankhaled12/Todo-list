import AddItem from "./components/add_item/AddItem"
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import ListItems from "./components/list_item/ListItems";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";
import { setTasks } from "./store/tasks";
import { useDispatch } from 'react-redux'
import { fetchDataFromApi } from "./utils/api";
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    fetchDataFromApi("items")
      .then((res) => {
        dispatch(setTasks(res.data))
      })
  }, []);


  return (
    <>
      <div className="body">
        <div>
          <AddItem />
          <ListItems />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
