import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import { editNote } from "./noteSlice"
import Addform from "../../components/Form"


const EditNote = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const notes = useSelector(store => store.notes);
  const navigate = useNavigate();
  const existingNote = notes.filter(note => note.id === params.id);
  const { title, content } = existingNote[0];
  const [values, setValues] = useState({
    title,
    content
  });

  const handleEditNote = () => {
    setValues({ title: '', content: '' });
    dispatch(editNote({
      id: params.id,
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
        <Button onClick={handleEditNote}>Submit</Button>
      </div>
    </div>
  )
}

export default EditNote