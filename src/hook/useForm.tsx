import { useState, useEffect } from "react";

export default function useForm() {
  const [values, setValues] = useState({
    image: '',
    icon: '',
    color: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = e => {
    const { name, value } = e.target
    setValues({
      ...values,
      [name] : value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return { handleChange, handleSubmit, values };
}