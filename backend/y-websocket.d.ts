declare module 'y-websocket/bin/utils' {
  import { WebSocket } from 'ws';
  import { IncomingMessage } from 'http';

  export function setupWSConnection(
    conn: WebSocket,
    req: IncomingMessage,
    { docName, gc }: { docName?: string; gc?: boolean }
  ): void;
}