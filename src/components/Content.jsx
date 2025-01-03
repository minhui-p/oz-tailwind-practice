export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-5">
      <img
        src={content.img}
        alt={content.title}
        className="w-[300px] rounded-lg mb-3"
      />
      <span className="text-xs text-[#d7fa00] border-solid border-1 border-[#d7fa00] px-0.5 py-1 rounded-sm">
        모집중
      </span>
      <div className="text-lg font-semibold">{content.title}</div>
      <p className="text-xs text-[rgb(160, 160, 160)]">{content.subtitle}</p>
    </div>
  );
}
