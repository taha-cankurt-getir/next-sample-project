import './globals.css'
import Header from './components/header'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Header />
        {children}
        <div className={'py-5 bg-blue-300 text-center'}>
            <h1>Footer</h1>
        </div>
      </body>
    </html>
  )
}
