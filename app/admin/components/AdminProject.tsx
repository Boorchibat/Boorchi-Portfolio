import React from 'react'

export const AdminProject = ({ project }: { project: Project }) => {
  return (
    <div className="w-[90%] h-auto bg-slate-800 rounded-lg p-5 flex justify-between items-center">
      <h1 className="text-xl text-white font-bold">{project.title}</h1>
    </div>
  )
}
