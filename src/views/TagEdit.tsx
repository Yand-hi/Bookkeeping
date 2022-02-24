import React from 'react'
import {useParams} from 'react-router-dom'
import {useTags} from '../hooks/useTags'

type Params = {
  id: string
}
const TagEdit: React.FC = () => {
  const {tags} = useTags()
  const {id} = useParams<Params>()
  const tag = tags.filter(tag => tag.id === parseInt(id))[0]
  return (
    <h1>{tag.name}</h1>
  )
}

export {TagEdit}