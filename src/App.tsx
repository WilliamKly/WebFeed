import { Header } from './components/Header'
import {Post} from './components/Post'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/williamKly.png',
      name: 'William Klywerston',
      role: 'Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: "👉 jane.design/doctorcare"},
    ],
    publishedAt: new Date('2022-06-09 21:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://tntsports.com.br/__export/1590485744009/sites/esporteinterativo/img/2020/05/26/cristiano-ronaldo-cinco-champions.jpg_423682103.jpg',
      name: 'Klywerston',
      role: 'Educador'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: "👉 jane.design/doctorcare"},
    ],
    publishedAt: new Date('2022-10-09 21:00:00')
  },
];

export function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

