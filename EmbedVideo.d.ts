interface EmbedVideoOptions {
  width: number;
  ratio: number;
  related?: boolean;
  height?: number;
  noIframeBorder?: boolean;
  showInfo?: boolean;
}

interface VideoId {
  id: string,
  service: string
}