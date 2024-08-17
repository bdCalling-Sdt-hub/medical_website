import { Badge } from 'antd'
import React from 'react'
import { IoIosNotifications } from 'react-icons/io'
import profile from '../../assets/icons/itachi.jpg'
import { useNavigate } from 'react-router-dom'
const Header = () => {
    //states
    const navigate = useNavigate()
    return (
        <div className='bg-[var(--primary-bg)] end-center h-[110px] px-4 gap-6'>
            <Badge onClick={()=>navigate('/notification')} className='bg-[var(--bg-white)] rounded-full cursor-pointer' count={2}>
                <IoIosNotifications size={40} />
            </Badge>
            <div onClick={()=>navigate('/profile')} className='center-center gap-2 px-3 w-fit py-1 border border-[var(--bg-white)] rounded-md cursor-pointer'>
                <img className='w-10 h-10 rounded-full' src={profile} alt="" />
                <p className='text-base text-[var(--color-white)]'>shaharul siyam</p>
            </div>
        </div>
    )
}

export default Header
