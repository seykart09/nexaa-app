import React from 'react'

export const Button = ({children, startIcon, endIcon, classNames, onClickAction, disabled, variant}) => {
  return (
    <div>
        <button
            startIcon={startIcon ? startIcon : ""}
            endIcon={endIcon ? endIcon : ""}
            onClick={onClickAction}
            disabled={disabled || false}
            {`rounded-xl text-sm py-4 px-8 ${variant === 'primary' ? 'bg-primary hover:bg-[#0F3AD2]' : 'btn-secondary'} ${classNames}`}
            // className='w-full md:w-auto py-4 bg-primary hover:bg-[#0F3AD2] text-white  md:px-4 shadow-xl mt-5 lg:mt-0'
        >
            {children}
        </button>
    </div>
  )
}
