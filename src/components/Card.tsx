import { Restaurant } from '@/api'

interface Props {
  resturant: Restaurant
}

export default function Card({ resturant }: Props) {
  return (
    <article key={resturant.id}>
      <img
        src={resturant.image}
        className="mb-3 h-[300px] w-full object-cover rounded-lg"
        alt={resturant.name} />
      <h2 className="inline-flex gap-2 text-lg font-bold">
        <span>{resturant.name}</span>
      </h2>
      <small className="inline-flex gap-1">
        <span>⭐</span>
        <span className="font-normal opacity-75">({resturant.ratings})</span>
      </small>
      <p className="opacity-90">
        {resturant.description}
      </p>
    </article>
  )
}
