'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    initCoreUi?: () => void
  }
}

export default function PageLoaderController() {
  const pathname = usePathname()

  useEffect(() => {
    // Template loader is controlled by jQuery(core.js) on first load only.
    // On Next.js client-side navigation, document.ready won't rerun, so we force-hide it.
    const t = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>('.page-loader-wrapper').forEach((el) => {
        el.style.display = 'none'
        el.style.opacity = '0'
        el.style.pointerEvents = 'none'
      })

      // Re-init template JS that relies on DOM scan / event binding.
      // `core.js` defines this function; it is safe to call if undefined.
      window.initCoreUi?.()
    }, 0)

    return () => window.clearTimeout(t)
  }, [pathname])

  return null
}

