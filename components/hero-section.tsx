import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/daycare-hero-background.png"
          alt="Sunshine Day Care"
          fill
          className="object-cover brightness-[0.8]"
          priority
        />
      </div>

      {/* Animal Decorations */}
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 z-10">
        <Image src="/elephant-decoration.png" alt="Elephant" width={200} height={200} className="object-contain" />
      </div>

      <div className="absolute top-10 right-10 w-1/6 h-1/6 z-10">
        <Image src="/giraffe-decoration.png" alt="Giraffe" width={150} height={150} className="object-contain" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[600px] flex-col items-center justify-center text-center px-4 py-24 text-white">
        <div className="max-w-3xl space-y-6">
          <div className="flex justify-center mb-4">
            <div className="relative h-24 w-24 overflow-hidden rounded-full bg-amber-400 flex items-center justify-center">
              <Image
                src="/sunshine-logo.png"
                alt="Sunshine Day Care Logo"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Welcome to <span className="text-amber-400">Sunshine</span> Day Care
          </h1>
          <p className="mx-auto max-w-[700px] text-lg md:text-xl">
            Where little animals learn, play, and grow in a magical world of adventure and discovery.
          </p>
          <div className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600" asChild>
              <Link href="/">Register Now</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/20 hover:bg-background/30 border-amber-300"
              asChild
            >
              <Link href="/">Schedule a Tour</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
