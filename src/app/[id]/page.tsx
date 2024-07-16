import api from '@/api'
import Card from '@/components/Card'
import Link from 'next/link'
import React from 'react'

export default async function page({ params: { id } }: { params: { id: string } }) {

  const restaurant = await api.fetch(id)

  return (
    <>
      <Card resturant={restaurant} />
      <Link href={'/'}>
        <button className='bg-red-950 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full mt-3'>
          Regresar
        </button>
      </Link>

    </>
  )
}

export async function generateMetadata({params: {id}}: {params: {id: string}}) {

  const restaurant = await api.fetch(id)

  return {
    title: `${restaurant.name} - Restaurancy`, 
    description: restaurant.description
  }


}
