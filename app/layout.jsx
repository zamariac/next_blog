import  variables from './variables/module.scss';
import Header from '@components/Header';

export const metadata = {
  title: "Art Design and Wordly Things",
  description: "Headless CMS Graphql Next13 App"
}


// goes across all pages 
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <Header />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout;