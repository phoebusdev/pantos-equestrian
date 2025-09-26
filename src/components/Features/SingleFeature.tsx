import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full text-center">
      <div className="mb-8 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-primary/10 text-primary mx-auto">
        {icon}
      </div>
      <h3 className="mb-4 text-2xl text-black dark:text-white" style={{ fontFamily: 'Georgia, serif' }}>
        {title}
      </h3>
      <p className="text-body-color text-base leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
        {paragraph}
      </p>
    </div>
  );
};

export default SingleFeature;