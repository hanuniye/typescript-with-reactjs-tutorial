import {useEffect, useState} from 'react'
import { IPostProps } from '../types/tyeps'
import PostCArd from './PostCArd';

const Post = () => {
    const [post, setPost] = useState<IPostProps[] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await res.json();

            setPost(data)
        }
        fetchData()
    })

  return (
    <div>
      {
        post?.map((post, index) => {
            return <PostCArd {...post} />
        })
      }
    </div>
  )
}

export default Post
