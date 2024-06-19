import Image from "next/image";

export default function Spinner() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Image width={100} height={100} alt="" src={"/loading.svg"} />
    </div>
  );
}
