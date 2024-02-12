const Letters = () => {
  const sendEmail = () => {
    window.location.href = "mailto:moemensaadeh5@gmail.com";
  };

  return (
    <div style={{ background: "#e4eafc" }} className="text-center pt-6 pb-20">
      <p className="text-xl text-black">
        Have any questions or inquiries? <br />
        Feel free to contact us!
      </p>
      <div
        className="join md:mx-auto mt-10 mx-4"
        style={{ width: "fit-content" }}
      >
        <button
          className="btn uppercase join-item bg-black text-white px-8 md:px-16 tracking-wider mt-2 md:mt-0"
          onClick={sendEmail}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Letters;
