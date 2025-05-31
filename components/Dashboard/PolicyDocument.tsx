"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

interface Document {
  id: string
  title: string
  description: string
  file: string
  pub_date: string
}

const PolicyDocument = () => {
  const [loading, setLoading] = useState(true)
  const [documents, setDocuments] = useState<Document[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch("https://hf-api.craftandurban.com/document/document/")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setDocuments(data as any)
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred")
      } finally {
        setLoading(false)
      }
    }

    fetchDocuments()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center p-4">
        <p>Loading documents...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center p-4 text-red-500">
        <p>Error loading documents: {error}</p>
      </div>
    )
  }

  return (
    <>
      {documents.map((document) => (
        <div className="w-full rounded border-[0.5px] bg-white p-4 shadow" key={document.id}>
          <div>
            <div className="flex justify-between">
              {/* Placeholder for document icon - you might want to replace this with actual document type icons */}
              <div className="flex h-[45px] w-[36px] items-center justify-center bg-gray-200">
                <span className="text-xs">DOC</span>
              </div>
              <Link
                href={`/policy/view/${document.id}`}
                className="flex h-6 items-center justify-center rounded-md border border-[#000000] bg-blue-400 px-2 text-xs text-[#000000]"
              >
                View
              </Link>
            </div>
            <h6 className="mt-3 text-base font-bold">{document.title}</h6>
            <p>{document.description}</p>

            <div className="mt-2 flex gap-2">
              <a
                href={document.file} // Assuming this is a direct download link
                download
                className="flex w-full items-center justify-center rounded-md border border-[#000000] px-2 py-2 text-xs text-[#000000]"
              >
                DOWNLOAD
              </a>
              <Link
                href={`/policy/edit/${document.id}`}
                className="flex w-full items-center justify-center rounded-md border border-[#000000] px-2 py-2 text-xs text-[#000000]"
              >
                EDIT
              </Link>
            </div>
            <p className="mt-2 text-xs text-gray-500">Published: {new Date(document.pub_date).toLocaleDateString()}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default PolicyDocument
