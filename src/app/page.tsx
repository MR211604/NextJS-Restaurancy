import api from "@/api";

export default async function HomePage() {
  
  const restaurantes = await api.list();

  console.log(restaurantes)
  
  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {
        restaurantes.map((resturant) => {
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
        })
      }
    </section>
  )
}
