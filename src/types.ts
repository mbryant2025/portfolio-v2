export interface Widget {
  title: string;
  subtitle: string;
  link: string;
  image: string;
}

export interface PeekWidget {
  title: string;
  subtitle: string;
  link: string;
  image: string;
  peek: string[]; //the names, such as "python"
  peekImages: string[]; //the images, such as "img/python.png"
  onClick: (peek?: string) => void;
}
