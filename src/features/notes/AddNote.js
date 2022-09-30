import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid'
import { addNote } from "./noteSlice"
import Addform from "../../components/Form"
import Button from "../../components/Button"

const AddNote = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: '',
    content: ''
  });

  const handleAddNote = () => {
    setValues({ title: '', content: '' });
    dispatch(addNote({
      id: uuidv4(),
      title: values.title,
      content: values.content
    }));
    navigate('/');
  }

  return (
    <div>
      <Addform
        onChange1={(e) => setValues({ ...values, title: e.target.value })}
        onChange2={(e) => setValues({ ...values, content: e.target.value })}
        value1={values.title}
        value2={values.content}
      />
      <br/>
      <div className="btnBox text-center">
        <Button onClick={handleAddNote}>Submit</Button>
      </div>
    </div>
  )
}

export default AddNote