import { useRouter } from 'next/router'
import { useCallback } from 'react'

export const useChangeRouter = () => {
  const router = useRouter()

  const navigateTo = useCallback((pagePath: string) => {
    // Makes sure the route is valid
    if (pagePath && pagePath.startsWith('/')) {
      router.push(pagePath)
    }
  }, [router])

  // Navigates to the home page
  const navigateToHome = useCallback(() => {
    router.push('/')
  }, [router])

  // Navigates to the FAQ page
  const navigateToFAQ = useCallback(() => {
    router.push('/faq')
  }, [router])

  // It's a general navigator in which you can put the path you want to navigate to
  const navigateToPage = useCallback((pagePath: string) => {
    router.push(pagePath)
  }, [router])

  return {
    navigateTo,
    navigateToHome,
    navigateToFAQ,
    navigateToPage,
    currentPath: router.asPath,
    isCurrentPath: (path: string) => router.asPath === path
  }
}

export default useChangeRouter