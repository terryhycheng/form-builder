'use client'

import { UploadCloud, User2 } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import GenerateKeyBtn from './GenerateKeyBtn'

const ProfileSection = () => {
  const { data:session } = useSession()

  return (
    <div>
      <div className="container px-4 pt-8 sm:px-6 lg:px-8 mx-auto">
        <div className="border-b-2 border-slate-100 dark:border-slate-900 pb-3">
            <h3 className="text-2xl font-semibold mb-2">Account & Settings</h3>
            <p className="text-slate-400 text-sm">Manage your name, password and account settings.</p>
        </div>
      </div>

      <div className="container px-4 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div >
          <form className=''>
            <div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
              <div className="sm:col-span-3">
                <label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                  Profile photo
                </label>
              </div>
      
              <div className="sm:col-span-9">
                <div className="flex items-center gap-5">
                  {!session?.user.image ? (<div className='inline-flex h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800 bg-gray-100 dark:bg-slate-900/60 justify-center items-center'>
                    <User2 className='w-8 h-8 text-slate-400' />
                  </div>) : (
                    <Image
                      src="https://lh3.googleusercontent.com/a/ACg8ocKz-Au-hvmkaPy3SVDLog8zx2dKeEYMbuX4EV4PoZmYmM0=s96-c"
                      alt='test'
                      width={50}
                      height={50}
                      className='rounded-full'
                    />
                  )}
                  <div className="flex gap-x-2">
                    <div>
                      <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                        <UploadCloud className='w-4 h-4' />
                        Upload photo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
      
              <div className="sm:col-span-3">
                <label htmlFor="af-account-full-name" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                  Full name
                </label>
              </div>
      
              <div className="sm:col-span-9">
                <div className="sm:flex">
                  <input id="af-account-full-name" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px rounded-md sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="John Doe" value={session?.user.name} />
                </div>
              </div>
      
              <div className="sm:col-span-3">
                <label htmlFor="af-account-email" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                  Email
                </label>
              </div>
      
              <div className="sm:col-span-9">
                <input id="af-account-email" type="email" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="maria@site.com" readOnly value={session?.user.email}/>
              </div>
      
              <div className="sm:col-span-3">
                <label htmlFor="af-account-password" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                  Password
                </label>
              </div>
      
              <div className="sm:col-span-9">
                <div className="space-y-2">
                  <input id="af-account-password" type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter current password" />
                  <input type="text" className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Enter new password" />
                </div>
              </div>
      
              <div className="sm:col-span-3">
                <label htmlFor="af-account-bio" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                  BIO
                </label>
              </div>
      
              <div className="sm:col-span-9">
                <textarea id="af-account-bio" className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600" rows={6} placeholder="Type your message..."></textarea>
              </div>

              <div className='sm:col-span-3'>
                <label htmlFor="af-account-bio" className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
                  API Key
                </label>
              </div>

              <div className='sm:col-span-9'>
                <GenerateKeyBtn />
              </div>

            </div>
      
            <div className="mt-5 flex justify-end gap-x-2">
              <Button variant={'secondary'}>Cancel</Button>
              <Button>Save Changes</Button>
            </div>
          </form>
        </div>
      </div>

      <div>

      
      </div>
    </div>
  )
}

export default ProfileSection
