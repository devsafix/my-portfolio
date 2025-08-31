interface IProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: IProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
        {title}
      </h1>
      <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
        {subtitle}
      </p>
    </div>
  );
}
