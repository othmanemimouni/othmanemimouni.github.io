/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MAINTENANCE_MODE: string;
  readonly VITE_MAINTENANCE_MESSAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}