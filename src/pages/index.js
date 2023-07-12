import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../styles/global.css"

import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout>
      <header>
        <title>Coffee with Seytech</title>
        <meta name="description" content="Bringing coffee to the Seytech class" />
      </header>
      
      <main className='main'>
        

          <h1 className='title'>
            Welcome to{' '}
            <code className='title_code'>Seytech Coffee</code>
          </h1>
      
          {/* <h4 className='title'>Good luck on your projects!</h4> */}

          <p className='description'>
            Join Our Mailing List!
            <br/>
            <input type="text"></input>
            <br/>
            <button>Submit</button>
          </p>

          <footer className='footer'>
            <a
              href="https://www.seytech.co"
            >
              Powered by{' '}
              <span className='logo'>
                <StaticImage src="../images/Seytech_Logo_Horizontal.png" alt="Seytech logo" width={119} height={16} />
              </span>
            </a>
          </footer>
      </main>

      
    </Layout>
  )
}

export default IndexPage
