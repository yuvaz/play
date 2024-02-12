import React, {useEffect, useState} from 'react'
import useResize from "./utils"

function ParentComponent() {
    const currentSize = useResize() // this is a custom hook
  return (
    <div>
        Current Window size {currentSize}
    </div>
  )
}

export default ParentComponent