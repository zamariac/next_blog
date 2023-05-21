import  variables from './variables/module.scss';

export const metadata = {
  title: "Art Design and Wordly Things",
  description: "Headless CMS Graphql Next13 App"
}

const RootLayout = ({ children }) => {
  return (
    <html Lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout;