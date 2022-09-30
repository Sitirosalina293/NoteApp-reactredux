import Form from 'react-bootstrap/Form'
const Addform=({ onChange1,onChange2, value1, value2})=>{
  return (
    <div>
      <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Write your title" onChange={onChange1} value={value1}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Content</Form.Label>
            <Form.Control placeholder="Write your notes . . ." onChange={onChange2} value={value2} as="textarea" rows={6} />
          </Form.Group>
        </Form>
    </div>
  )
}

export default Addform;
