async function $delay(time = 1000) {
  // eslint-disable-next-line promise/param-names
  const timer = (ms: number) => new Promise((res) => setTimeout(res, ms))
  await timer(time)
}

export { $delay }
