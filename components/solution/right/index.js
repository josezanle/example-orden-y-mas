import Image from "next/image";

const Right = () => (
  <div className="right">
    <Image
      src="/images/armario.jpg"
      alt=""
      width={500}
      height={500}
      className="border"
    />
    <style jsx>
      {`
        .right {
          width: 600px;
          display: flex;
        }
        .border {
          border-radius: 1em;
        }
        @media (max-width: 1199px) {
          .right {
            display: none;
          }
      `}
    </style>
  </div>
);

export default Right;
