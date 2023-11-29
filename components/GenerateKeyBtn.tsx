'use client'

import { Copy, KeyRound, RefreshCw, Trash2 } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { MaskCharacter } from '@/lib/helpers'

const GenerateKeyBtn = () => {
  const [key, setKey] = useState('')


  const GenerateKey = (e: any, length: number) => {
    e.preventDefault()
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    setKey(result)
  }

  const maskedKey = key ? MaskCharacter(key, 'x', 5) : ''

  return (
    <div className=''>
    {!key ? 
      (
        <div className='flex justify-start items-center gap-4'>
          <Button
            variant={'outline'} 
            className='flex justify-center items-center gap-2'
            onClick={(e) => GenerateKey(e, 32)}
          >
            <KeyRound className='w-4 h-4'/>
            Generate Key
          </Button>
          <p className='text-sm text-gray-800 dark:text-gray-200'>Please select this button to generate a key</p>
        </div>
      ) : (
        <div className='flex flex-col justify-start items-start gap-4'>
          <div className='flex justify-start items-center w-full'>
          <input className="py-2 px-3 block w-1/2 border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" readOnly value={maskedKey} />
          <Button size={'icon'} variant={'ghost'}><Copy className='w-4 h-4'/></Button>
          <Button size={'icon'} variant={'ghost'} onClick={() => setKey('')}><Trash2 className='w-4 h-4'/></Button>
          </div>
          <Button 
            variant={'outline'} 
            className='flex justify-center items-center gap-2'
            onClick={(e) => GenerateKey(e, 32)}
          >
            <RefreshCw className='w-4 h-4'/>
            Generate New Key
          </Button>
          <p className='text-xs text-gray-500'>This will overwrite your existing key.</p>
        </div>
    )}
    </div>
  )
}

export default GenerateKeyBtn
