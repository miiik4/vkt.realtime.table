type Img = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>;

export const Bus = (props: Img) => <img src="bus.svg" alt="bus icon" {...props} />;
export const Position = (props: Img) => <img src="position.svg" alt="position icon" {...props} />;
