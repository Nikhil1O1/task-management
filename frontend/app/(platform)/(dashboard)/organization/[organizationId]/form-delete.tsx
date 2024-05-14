"use client"

import { Button } from '@/components/ui/button'
import React from 'react'
import { useFormStatus } from 'react-dom'

type Props = {}

const FormDelete = (props: Props) => {
    const {pending} = useFormStatus()
  return (
    <Button type="submit" variant="destructive" disabled={pending} size="sm">
        Delete
    </Button>
  )
}

export default FormDelete