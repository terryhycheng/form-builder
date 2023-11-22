import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
  Wallet
} from "lucide-react"
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface LoggedInUserProps {
  user: any
}

const LoggedInUser = ({ user} : LoggedInUserProps ) => {
  const router = useRouter()
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className='hover:cursor-pointer'>
          <Avatar>
              <AvatarImage src={user.image ?? ''} alt="@shadcn" />
              <AvatarFallback className="bg-slate-700">
                  {user.name?.substring(0, 1)}
              </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
        <DropdownMenuLabel className='flex flex-col justify-start items-start gap-2'>
            My Account 
            <span className='text-xs font-normal text-gray-400'>{user.name}</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => router.push('/dashboard')} className='hover:cursor-pointer'>
            <User className="mr-2 h-4 w-4" />
            Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem disabled onClick={() => router.push('/settings')} className='hover:cursor-pointer'>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem disabled onClick={() => router.push('/subscription')} className='hover:cursor-pointer'>
            <Wallet className="mr-2 h-4 w-4" />
            Subscription
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => router.push('https://github.com/terryhycheng/form-builder')} className='hover:cursor-pointer'>
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </DropdownMenuItem>
        <DropdownMenuItem disabled onClick={() => router.push('/docs')} className='hover:cursor-pointer'>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => signOut()} className='hover:cursor-pointer'>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
          {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
        </DropdownMenuItem>
      </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default LoggedInUser
