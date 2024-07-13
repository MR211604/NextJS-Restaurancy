import api from "@/api";
import Card from "@/components/Card";

export default async function HomePage() {
  
  const restaurantes = await api.list();

  console.log(restaurantes)
  
  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {
        restaurantes.map((resturant) => {
          return (
            <Card key={resturant.id} resturant={resturant} />
          )
        })
      }
    </section>
  )
}
