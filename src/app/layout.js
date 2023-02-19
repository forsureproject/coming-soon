import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-50 h-screen overflow-hidden">{children}</body>
    </html>
  )
}
