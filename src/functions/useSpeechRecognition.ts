import { useState } from "react"

const useSpeechRecognition = () => {
  const [ recognizing, setRecognizing ] = useState(false)
  const [ finalResult, setFinalResult ] = useState<string>("")
  const [ interimResult, setInterimResult ] = useState<string>("")
  const [ error, setError ] = useState<"no-speech" | "no-micro" | "not-allowed">()

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  var recognition = new SpeechRecognition()
  recognition.continuous = true
  recognition.interimResults = true

  recognition.onstart = () => {
    console.log("onstart")
    setRecognizing(true)
  }

  recognition.onend = () => {
    console.log("onend")
    setRecognizing(false)
  }

  recognition.onerror = (event: any) => {
    console.log("onerror", event)
    if (event.error === "no-speech") {
      setError("no-speech")
      setRecognizing(false)
      recognition.stop()
    }
    if (event.error === "no-micro") {
      setError("no-micro")
      setRecognizing(false)
      recognition.stop()
    }
    if (event.error === "not-allowed") {
      setError("not-allowed")
      setRecognizing(false)
      recognition.stop()
    }
  }

  recognition.onresult = (event: any) => {
    if (typeof(event.results) === "undefined") {
      recognition.stop()
    }
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      if (event.results[i].isFinal) {
        setFinalResult(finalResult + event.results[i][0].transcript)
      } else {
        setInterimResult(interimResult + event.results[i][0].transcript)
      }
    }
  }

  const start = () => {
    setInterimResult("")
    setFinalResult("")
    recognition.start()
  }

  const stop = () => {
    setRecognizing(false)
    recognition.stop()
  }

  return {
    recognizing,
    error,
    interimResult,
    finalResult,
    start,
    stop
  }
}

export default useSpeechRecognition
