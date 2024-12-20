const Image = (props: React.ComponentProps<"img">) => {
    const allowWebP = import.meta.env.PROD && props.src?.endsWith(".png");
    return (
        <picture>
            {allowWebP && <source type="image/webp" srcSet={props.src?.replace(".png", ".webp")} />}
            <img alt={props.alt ?? ""} loading="lazy" {...props} />
        </picture>
    );
};

export default Image;
