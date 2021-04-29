const Right = () => (
  <div className="right">
    <img src="/images/she.jpg" alt="" />
    <style jsx>
      {`
        .right {
          min-width: 600px;
          display: flex;
        }
        img {
          width: 500px;
          height: 500px;
          object-fit: cover;
          border-radius: 1em;
        }

        // ========================

        @media (max-width: 1223px) {
          img {
            padding: 1em 0;
            border-radius: 1em;
          }
        }
        @media (max-width: 1199px) {
          .right {
          }
        }
        @media only screen and (max-width: 768px) {
          .right {
            min-width: unset;
            width: 100%;
          }
          img {
            width: 100%;
          }
        }
      `}
    </style>
  </div>
);

export default Right;
