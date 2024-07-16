'use client'

export default function ErrorPage({ error }: { error: Error }) {

  console.log({ error })

  return (
    <div>{`Oh no! Ha ocurrido lo siguiente:${error}`}</div>
  )
}
