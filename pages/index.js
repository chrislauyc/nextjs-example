import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import useSWR from 'swr' //recommended react hook for data fetching in nextjs


export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This is a practice website built using Next.js</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

// pre-rendering
// function that runs at build time
// generate static pages
// runs only on the server
export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  
  const allPostsData = getSortedPostsData()
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {
      allPostsData
    }
  }
}
// server side rendering
// only if you need to pre-render a page whose data must be fetched at request time.


// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }



// import useSWR from 'swr'
// handles caching, revalidation, focus tracking, refetching on interval, and more
// swr is the recommended axios in nextjs
function Profile() {
  const { data, error } = useSWR('/api/user', fetch)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.name}!</div>
}