import type { Metadata } from 'next'
import './globals.css'
import React from 'react'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className="bg-white">
        {(() => {
          const childrenArr = React.Children.toArray(children);
          return (
            <>
              <div
                style={{
                  backgroundImage: 'url(https://www.shinhansec.com/siw/common/images/trading/bg_main_visual.jpg)',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center',
                  width: '100%',
                  minHeight: '480px',
                }}
              >
                {childrenArr.slice(0, 3)}
              </div>
              {childrenArr.slice(3)}
            </>
          );
        })()}
      </body>
    </html>
  )
}
