// Minimal ambient declarations to help the editor resolve Vite and plugin imports
declare module 'vite' {
  export function defineConfig<T = any>(config: T): T;
}

declare module '@vitejs/plugin-react' {
  const plugin: any;
  export default plugin;
}
