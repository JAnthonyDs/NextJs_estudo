import type {  GetStaticProps } from 'next'

export default function Home({ repositories, date }: {repositories: Array<String>, date: String}){
  return (
    <>
    <h1>{date}</h1>
      <ul>
        {repositories.map((repo: any) => (
          <li key={repo}>{repo}</li>
        ))}
      </ul>
    </>
  )
}

//static site generation, só funciona no server de produção(npm run build/ npm start)

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/janthonyds/repos')
  const data = await response.json()
  const repositoryNames = data.map((item: any) => item.name)

  return {
    props: {
      repositories: repositoryNames,
      date: new Date().toISOString(),
    },
    revalidate: 60*60*4,
  }
} 
