import React from 'react'

export default function InfoClient({onClick}) {
  return (
    <div className='row g-3 py-4 pt-2 px-0 px-sm-4'>
      <div className='col-12 col-sm-6'>
      <input className='form-control' placeholder='Entrer votre Nom' type='text'/>
      </div>
      <div className='col-12 col-sm-6'>
      <input className='form-control' placeholder='Entrer votre prenom' type='text'/>
      </div>
      <div className='col-12 col-sm-6'>
      <input className='form-control'  placeholder='Entrer votre Email' type='text'/>
      </div>
      <div className='col-12 col-sm-6'>
        <input className='form-control' placeholder='Entrer votre Numéro de telephone' type='text'/>
       
      </div>

      <div className='col-12'>
        <button
          className='btn py-3 w-100 text-white'
          style={{ borderRadius: '0.6rem', backgroundColor: '#003b95' }}
          onClick={onClick}
        >
          Confirmer la reservation
        </button>
      </div>
    </div>
  )
}
