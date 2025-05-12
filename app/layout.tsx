import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MedShop Admin Dashboard',
  description: 'Admin dashboard for MedShop e-commerce platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  )
}
