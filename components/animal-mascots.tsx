import Image from "next/image"

export default function AnimalMascots() {
  const mascots = [
    {
      name: "Ellie the Elephant",
      role: "Gentle Guide",
      description: "Ellie helps our youngest friends learn about kindness and sharing.",
      image: "/elephant-mascot.png",
    },
    {
      name: "Leo the Lion",
      role: "Brave Explorer",
      description: "Leo encourages curiosity and confidence in our little adventurers.",
      image: "/lion-mascot.png",
    },
    {
      name: "Gerry the Giraffe",
      role: "Tall Thinker",
      description: "Gerry helps children reach new heights in learning and creativity.",
      image: "/giraffe-mascot.png",
    },
    {
      name: "Ollie the Owl",
      role: "Wise Teacher",
      description: "Ollie guides our pre-K children in developing school readiness skills.",
      image: "/owl-mascot.png",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-amber-500 px-3 py-1 text-sm text-white">Meet Our Friends</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-amber-800">Our Animal Guides</h2>
            <p className="max-w-[900px] text-amber-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              These special animal friends help your children learn and grow at Sunshine Day Care.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {mascots.map((mascot) => (
            <div key={mascot.name} className="flex flex-col items-center text-center group">
              <div className="relative h-40 w-40 overflow-hidden rounded-full mb-4 border-4 border-amber-300 transition-transform duration-300 transform group-hover:scale-105">
                <Image src={mascot.image || "/placeholder.svg"} alt={mascot.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-bold text-amber-700">{mascot.name}</h3>
              <p className="text-sm text-amber-500 font-medium">{mascot.role}</p>
              <p className="mt-2 text-sm text-amber-600">{mascot.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
