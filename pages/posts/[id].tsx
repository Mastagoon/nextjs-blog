import { useRouter } from "next/router"
import React from "react"

interface PageIdProps {}

const PageId: React.FC = ({}) => {
    const router = useRouter()
  return (
    <>
      <h1>this is {router.query.id ?? "نقانق"}</h1>
    </>
  )
}

export default PageId
