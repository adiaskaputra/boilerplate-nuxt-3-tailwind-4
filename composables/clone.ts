function $clone(text: string | number | object | any[]) {
  return JSON.parse(JSON.stringify(text))
}

export { $clone }
