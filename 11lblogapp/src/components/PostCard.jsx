import React from 'react'
import { Link } from 'react-router-dom'
import appwriteService from "../appwrite/konfig"

function PostCard({
    $id, title, featuredImage
}) {
  return (
    <Link to={`/to/${$id}`}>
        <div
        className='w-full bg-gray-100 rounded-xl p-4'
        >
            <div>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard