import React from 'react'
import Controls from '../../components/controls/Controls'
import { Form } from '../../hooks/useForm'

const Signup = () => {
  const handleSubmit =()=>{}
  return (
    <>
    <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
      <Form
        onSubmit={handleSubmit}
        className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-items-end"
      >
        <label htmlFor="userName">Username</label>
        <Controls.Input id="userName" />
        <label htmlFor="userName">Username</label>

        <Controls.Input id="PassWord" />
        <Controls.Button
          className="col-span-full"
          
          text="Signup"
        />
      </Form>
    </>
  )
}

export default Signup