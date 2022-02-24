import React from 'react'
import {useParams} from 'react-router-dom'
import {useTags} from '../hooks/useTags'

type Params = {
  id: string
}
const TagEdit: React.FC = () => {
  const {findTag} = useTags()
  const {id} = useParams<Params>()
  const tag = findTag(parseInt(id))
  return (
    <h1>{tag.name}</h1>
  )
}

export {TagEdit}