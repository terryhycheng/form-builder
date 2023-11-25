'use client'

import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { Trash2 } from 'lucide-react'
import { Form } from '@prisma/client'
import { useRouter } from 'next/navigation'
import { DeleteForm } from '@/actions/form'

interface DeleteModalProps {
  form: Form
}

const DeleteModal = ({ form }: DeleteModalProps) => {
  const router = useRouter()

  const handleFormDelete = async (id: string) => {
    try {
      const form = await DeleteForm(id);
      console.log(`Deleted ${form.name} Form`)
      // TODO: Add toast here
      router.push(`/dashboard`);
    } catch (error) {
        console.log('ERROR', error)
        // TODO: Add toast here
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={'destructive'} className='dark:bg-red-500 dark:hover:bg-red-600'>
            <Trash2 className="w-4 h-4 mr-2" />
            Delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Form</DialogTitle>
        </DialogHeader>
          <div className='flex flex-col justify-start items-start gap-y-4'>
            <p className='text-gray-700 dark:text-gray-300'>Are you sure you want to delete <span className='text-black dark:text-white font-semibold'>{form.name}</span>? Once you have deleted the form it will be removed permanently.</p>
            <Button 
              variant={'destructive'} 
              className='w-full dark:bg-red-500 dark:hover:bg-red-600 font-bold'
              onClick={() => handleFormDelete(form.id)}>
                Confirm deletion
              </Button>
          </div>
      </DialogContent>
  </Dialog>
  )
}

export default DeleteModal
