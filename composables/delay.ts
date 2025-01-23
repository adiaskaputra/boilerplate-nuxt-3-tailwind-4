async function $delay(time = 1000) {
  const timer = (ms: number) => new Promise((res) => setTimeout(res, ms))
  await timer(time)
}

export { $delay }
