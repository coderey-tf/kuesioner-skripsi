import Popup from "@/components/Popup";

export default function KuesionerLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>

      <Popup />
    </div>
  );
}
