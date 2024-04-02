/// <reference types="vite/client" />
declare module "@iconscout/react-unicons-solid";

interface ImportMetaEnv {
  readonly VITE_BASE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
