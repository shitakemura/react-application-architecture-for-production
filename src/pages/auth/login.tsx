import { ReactElement } from 'react'

import { useRouter } from 'next/router'

import { Seo } from '@/components/seo'
import { LoginForm } from '@/features/auth'
import { AuthLayout } from '@/layouts/auth-layout'

export default function LoginPage() {
  const router = useRouter()

  const onSuccess = () => {
    const redirect = router.query.redirect as string
    router.replace(redirect || '/dashboard/jobs')
  }

  return (
    <>
      <Seo title="Log In" />
      <LoginForm onSuccess={onSuccess} />
    </>
  )
}

LoginPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout title="Log In">{page}</AuthLayout>
}
