const demoModules = import.meta.glob('./**/*Demos.vue', { eager: true })

export const demos: Record<string, unknown> = {}

for (const path in demoModules) {
  const match = path.match(/\/([^/]+)Demos\.vue$/)
  if (match) {
    demos[match[1]] = (demoModules[path] as any).default
  }
}

export function getDemo(componentName: string) {
  return demos[componentName]
}
