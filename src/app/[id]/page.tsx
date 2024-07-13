import api from '@/api'
import Card from '@/components/Card'
import React from 'react'

export default async function page({ params: { id } }: { params: { id: string } }) {
  
  const restaurant = await api.fetch(id)
  
  return (
    <Card resturant={restaurant} />
  )
}
