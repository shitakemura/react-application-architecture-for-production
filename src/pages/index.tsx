import { Button } from '@/components/button'
import { InputField } from '@/components/form'
import { Link } from '@/components/link'

export default function LandingPage() {
  return (
    <>
      <Button variant="solid" type="button">
        Click Me
      </Button>
      <br />
      <InputField label="Name" />
      <br />
      <Link href="/">Home</Link>
    </>
  )
}
