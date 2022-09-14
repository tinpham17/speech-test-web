import { useState } from "react"

const useSpeechRecognition = () => {
  const [ recognizing, setRecognizing ] = useState(false)
  const [ finalResult, setFinalResult ] = useState<string>("")
  const [ interimResult, setInterimResult ] = useState<string>("")
  const [ error, setError ] = useState<"no-speech" | "no-micro" | "not-allowed">()

  console.log("useSpeechRecognition")

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  const recognition = new SpeechRecognition()
  recognition.continuous = true
  recognition.interimResults = true

  recognition.onstart = () => {
    console.log("onstart")
    setRecognizing(true)
    setFinalResult("")
  }

  recognition.onend = () => {
    console.log("onend")
    setRecognizing(false)
    setInterimResult("")
  }

  recognition.onspeechend = () => {
    console.log("onspeechend")
    setRecognizing(false)
    setInterimResult("")
    recognition.stop()
  }

  recognition.onerror = (event: any) => {
    console.log("onerror", event)
    if (event.error === "no-speech") {
      setError("no-speech")
    }
    if (event.error === "no-micro") {
      setError("no-micro")
    }
    if (event.error === "not-allowed") {
      setError("not-allowed")
    }
    recognition.stop()
  }

  recognition.onresult = (event: any) => {
    if (typeof(event.results) === "undefined") {
      recognition.stop()
    }
    for (let i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        setFinalResult(finalResult + event.results[i][0].transcript)
      } else {
        setInterimResult(interimResult + event.results[i][0].transcript)
      }
    }
  }

  const start = () => {
    recognition.start()
  }

  const abort = () => {
    console.log("abort")
    setRecognizing(false)
    setInterimResult("")
    recognition.abort()
  }

  return {
    recognizing,
    error,
    interimResult,
    finalResult,
    start,
    abort
  }
}

export default useSpeechRecognition
