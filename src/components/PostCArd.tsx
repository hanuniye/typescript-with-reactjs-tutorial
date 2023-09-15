import { IPostProps } from "../types/tyeps"

const PostCArd = ({title, body} :IPostProps) => {

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )
}

export default PostCArd
