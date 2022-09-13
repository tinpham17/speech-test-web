const useSpeechSynthesis = () => {
  const speak = (phrase: string) => {
    if (window !== undefined && window.speechSynthesis) {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(phrase))
    }
  }

  return {
    speak
  }
}

export default useSpeechSynthesis
