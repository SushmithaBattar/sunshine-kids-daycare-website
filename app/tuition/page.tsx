import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function TuitionPage() {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-amber-800 mb-6">Tuition & Fees</h1>
      <p className="text-lg mb-6">
        We offer flexible enrollment options to meet your family's needs. Our tuition rates are competitive and include
        all daily activities, meals, and supplies.
      </p>

      <div className="mt-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">Program</TableHead>
              <TableHead>Full-Time (Weekly)</TableHead>
              <TableHead>Part-Time (Weekly)</TableHead>
              <TableHead>Daily Rate</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Baby Elephants (Infants)</TableCell>
              <TableCell>$325</TableCell>
              <TableCell>$225 (3 days)</TableCell>
              <TableCell>$85</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Playful Cubs (Toddlers)</TableCell>
              <TableCell>$295</TableCell>
              <TableCell>$205 (3 days)</TableCell>
              <TableCell>$75</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Curious Monkeys (Preschool)</TableCell>
              <TableCell>$275</TableCell>
              <TableCell>$195 (3 days)</TableCell>
              <TableCell>$70</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Wise Owls (Pre-K)</TableCell>
              <TableCell>$265</TableCell>
              <TableCell>$185 (3 days)</TableCell>
              <TableCell>$65</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="mt-8">
        <Button asChild className="bg-amber-500 hover:bg-amber-600">
          <Link href="/register">Enroll Now</Link>
        </Button>
      </div>
    </div>
  )
}
