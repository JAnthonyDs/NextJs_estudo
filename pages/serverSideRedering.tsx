import type { GetServerSideProps, NextPage } from 'next'

export default function Home({ repositories }: any){
  return (
    <ul>
      {repositories.map((repo: any) => (
        <li key={repo}>{repo}</li>
      ))}
    </ul>
  )
}

//server side rendering

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('https://api.github.com/users/janthonyds/repos')
  const data = await response.json()
  const repositoryNames = data.map((item: any) => item.name)

  return {
    props: {
      repositories: repositoryNames
    }
  }
} 
