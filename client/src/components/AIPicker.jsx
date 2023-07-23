/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import CustomButton from './CustomButton'

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className='aipicker-container'>
      <textarea
        className='aipicker-textarea'
        placeholder='Ask Al...'
        rows={5}
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
      />
      <div className='flex flex-wrap gap-3'>
        {generatingImg ? (
          <CustomButton
            type='outline'
            title='Asking AI...'
            customStyles='text-xs'
          />
        ) : (
          <>
            <CustomButton
              type='outline'
              title='AI Logo'
              // handleClick={() => handleSubmit('logo')}
              handleClick={() => {}}
              customStyles='text-xs'
            />
            <CustomButton
              type='filled'
              title='AI Full'
              // handleClick={() => handleSubmit('full')}
              handleClick={() => {}}
              customStyles='text-xs'
            />
          </>
        )}
      </div> 
    </div>
  )
}

export default AIPicker
